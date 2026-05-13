import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const MIN_VIDEO_MS = 2200;
const MIN_SIMPLE_MS = 900;
const MAX_MS = 15000;

type PreloaderVariant = 'video-desktop' | 'video-mobile' | 'simple';

export default function SitePreloader() {
  const { pathname } = useLocation();
  const [variant] = useState<PreloaderVariant>(() => {
    if (pathname !== '/') return 'simple';
    if (typeof window === 'undefined') return 'simple';
    return window.matchMedia('(min-width: 1024px)').matches ? 'video-desktop' : 'video-mobile';
  });

  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const startRef = useRef(Date.now());
  const dismissedRef = useRef(false);

  const minMs = variant === 'simple' ? MIN_SIMPLE_MS : MIN_VIDEO_MS;

  useEffect(() => {
    const body = document.body;
    const prev = body.style.overflow;
    body.style.overflow = 'hidden';

    const dismiss = () => {
      if (dismissedRef.current) return;
      dismissedRef.current = true;
      const elapsed = Date.now() - startRef.current;
      const wait = Math.max(0, minMs - elapsed);
      window.setTimeout(() => {
        setExiting(true);
        window.setTimeout(() => {
          setVisible(false);
          body.style.overflow = prev;
        }, 600);
      }, wait);
    };

    const onLoad = () => dismiss();
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);

    const force = window.setTimeout(() => dismiss(), MAX_MS);

    return () => {
      window.removeEventListener('load', onLoad);
      window.clearTimeout(force);
      if (!dismissedRef.current) body.style.overflow = prev;
    };
  }, [minMs]);

  if (!visible) return null;

  const videoSrc =
    variant === 'video-desktop'
      ? '/videos/preloader-home-desktop.mp4'
      : '/videos/preloader-home-mobile.mp4';

  return (
    <motion.div
      className={`fixed inset-0 z-[9999] flex items-center justify-center ${variant === 'video-desktop' ? 'bg-[#EDEDE8]' : 'bg-espresso'}`}
      initial={false}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="status"
      aria-label="Carregando"
      aria-live="polite"
    >
      {variant === 'simple' ? (
        <div className="relative flex flex-col items-center justify-center gap-5 px-6">
          <Loader2
            className="h-11 w-11 text-amber-warm animate-spin"
            strokeWidth={1.15}
            aria-hidden
          />
          <span className="font-sans text-xs tracking-[0.28em] uppercase text-cream/45">
            Carregando
          </span>
        </div>
      ) : variant === 'video-desktop' ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-full w-full max-w-7xl items-center justify-center px-6 lg:px-8 box-border min-h-0">
            <video
              key="preloader-home-desktop"
              className="mx-auto block h-auto w-auto max-h-[min(88vh,88dvh)] max-w-full object-contain"
              src={videoSrc}
              autoPlay
              muted
              playsInline
              loop
            />
          </div>
        </div>
      ) : (
        <video
          key="preloader-home-mobile"
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          playsInline
          loop
        />
      )}
    </motion.div>
  );
}
