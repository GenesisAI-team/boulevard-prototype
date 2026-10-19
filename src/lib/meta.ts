export interface PageMeta {
  title?: string;
}

export function buildPageTitle(title?: string): string {
  const clean = title?.trim();
  if (!clean) return "Nuevo sitio";
  return clean;
}
