export const buildImageUrl = (path?: string) => {
  if (!path) return "/images/placeholder.jpg";
  if (path.startsWith("http")) return path;

  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
};