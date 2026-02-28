import { NextResponse } from "next/server";

export const revalidate = 3600; // Revalidate every hour

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

export async function GET() {
  try {
    // Use the rss2json API to convert Medium RSS to JSON
    const username = "azharthegeek";
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error(`RSS fetch failed: ${res.status}`);
    }

    const data = await res.json();

    if (data.status !== "ok") {
      throw new Error("Invalid RSS response");
    }

    const posts: MediumPost[] = (data.items ?? [])
      .slice(0, 6)
      .map(
        (item: {
          title: string;
          link: string;
          pubDate: string;
          thumbnail: string;
          description: string;
          categories: string[];
        }) => {
          // Extract first image from content if thumbnail is empty
          let thumbnail = item.thumbnail;
          if (!thumbnail) {
            const imgMatch = item.description?.match(
              /<img[^>]+src=["']([^"']+)["']/
            );
            thumbnail = imgMatch?.[1] ?? "";
          }

          // Strip HTML from description and truncate
          const cleanDesc = item.description
            ?.replace(/<[^>]*>/g, "")
            ?.replace(/&nbsp;/g, " ")
            ?.trim()
            ?.slice(0, 160);

          return {
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            thumbnail,
            description: cleanDesc ? `${cleanDesc}...` : "",
            categories: item.categories?.slice(0, 3) ?? [],
          };
        }
      );

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Medium RSS fetch error:", error);
    return NextResponse.json({ posts: [] }, { status: 200 });
  }
}
