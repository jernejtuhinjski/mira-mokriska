import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDir = path.join(process.cwd(), "content");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  category?: string;
  location?: string;
  archived?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

function getContentDir(type: "novice" | "dogodki"): string {
  return path.join(contentDir, type);
}

export function getAllPosts(type: "novice" | "dogodki"): PostMeta[] {
  const dir = getContentDir(type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(dir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      image: data.image,
      category: data.category,
      location: data.location,
      archived: data.archived ?? data.arhiv ?? false,
    } as PostMeta;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(
  type: "novice" | "dogodki",
  slug: string
): Promise<Post | null> {
  const filePath = path.join(getContentDir(type), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const htmlContent = await marked(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    image: data.image,
    category: data.category,
    location: data.location,
    archived: data.archived ?? false,
    content: htmlContent,
  };
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("sl-SI", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
