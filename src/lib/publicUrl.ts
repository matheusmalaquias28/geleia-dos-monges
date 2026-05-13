/** Caminho para ficheiros em `public/` (funciona com `base` do Vite e codifica espaços, etc.). */
export function publicUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalized = relativePath.replace(/^\/+/, '');
  const path = normalized
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  if (base === '/') return `/${path}`;
  return `${String(base).replace(/\/$/, '')}/${path}`;
}
