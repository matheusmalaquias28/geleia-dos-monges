import type { CSSProperties } from 'react';
import { publicUrl } from '../lib/publicUrl';

const LOGO_URL = publicUrl('logo-monges.svg');

type BrandLogoProps = {
  /** Tamanho e cor via Tailwind: a cor vem de `text-*` (ex.: `h-14 text-cream`). */
  className?: string;
  /** Texto alternativo; passe `''` quando o logo for decorativo. */
  label?: string;
};

/**
 * Logotipo Geleia dos Monges (`public/logo-monges.svg`) aplicado como máscara,
 * para herdar a cor do texto e contrastar com qualquer fundo.
 */
export default function BrandLogo({ className = '', label = 'Geleia dos Monges — Campos do Jordão' }: BrandLogoProps) {
  const style: CSSProperties = {
    aspectRatio: '597 / 646',
    backgroundColor: 'currentColor',
    WebkitMaskImage: `url("${LOGO_URL}")`,
    maskImage: `url("${LOGO_URL}")`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
  };

  return (
    <span
      className={`inline-block shrink-0 ${className}`}
      style={style}
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
    />
  );
}
