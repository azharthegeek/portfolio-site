"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number; // 0 = purple, 1 = cyan
}

interface Signal {
  fromNode: number;
  toNode: number;
  progress: number; // 0–1
  speed: number;
}

export const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 25 : 50;
    const maxDist = isMobile ? 80 : 120;

    let nodes: Node[] = [];
    let signals: Signal[] = [];
    let animationId: number;
    let frameCount = 0;
    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const initNodes = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        hue: Math.random(),
      }));
    };

    const spawnSignal = () => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) to = Math.floor(Math.random() * nodes.length);
      signals.push({ fromNode: from, toNode: to, progress: 0, speed: 0.008 + Math.random() * 0.006 });
    };

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(112, 66, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw signal pulses traveling along connections
      signals = signals.filter((sig) => {
        const a = nodes[sig.fromNode];
        const b = nodes[sig.toNode];
        sig.progress += sig.speed;

        const x = a.x + (b.x - a.x) * sig.progress;
        const y = a.y + (b.y - a.y) * sig.progress;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, 0.85)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(0, 212, 255, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0;

        return sig.progress < 1;
      });

      // Draw nodes
      for (const node of nodes) {
        const color =
          node.hue > 0.5
            ? `rgba(112, 66, 248, 0.7)`
            : `rgba(0, 212, 255, 0.6)`;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = node.hue > 0.5 ? "rgba(112, 66, 248, 0.5)" : "rgba(0, 212, 255, 0.5)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const update = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;

        node.x = Math.max(0, Math.min(w, node.x));
        node.y = Math.max(0, Math.min(h, node.y));
      }

      frameCount++;
      // Spawn a signal pulse every ~180 frames (~3s at 60fps)
      if (frameCount % 180 === 0) {
        spawnSignal();
      }
    };

    const loop = () => {
      update();
      draw();
      animationId = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(() => {
      resize();
      initNodes();
    });

    resize();
    initNodes();

    if (prefersReducedMotion) {
      // Draw one static frame
      draw();
    } else {
      loop();
      if (canvas.parentElement) ro.observe(canvas.parentElement);
    }

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
      aria-hidden="true"
    />
  );
};
