import { useEffect, useState } from 'react';
import {
  Sun,
  Moon,
  Cloud,
  CloudSun,
  CloudFog,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Loader2,
  type LucideIcon,
} from 'lucide-react';

/** Campos do Jordão — centro aproximado */
const LAT = -22.7392;
const LON = -45.5913;
const REFRESH_MS = 10 * 60 * 1000;

type State =
  | { kind: 'loading' }
  | { kind: 'error' }
  | { kind: 'ok'; tempC: number; weatherCode: number; isDay: boolean };

function iconForWmo(code: number, isDay: boolean): LucideIcon {
  if (code === 0) return isDay ? Sun : Moon;
  if (code >= 1 && code <= 3) {
    if (code === 3) return Cloud;
    return CloudSun;
  }
  if (code === 45 || code === 48) return CloudFog;
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return CloudRain;
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return CloudSnow;
  if (code >= 95) return CloudLightning;
  return Cloud;
}

export default function NavbarWeather({ scrolled }: { scrolled: boolean }) {
  const [state, setState] = useState<State>({ kind: 'loading' });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const url = new URL('https://api.open-meteo.com/v1/forecast');
        url.searchParams.set('latitude', String(LAT));
        url.searchParams.set('longitude', String(LON));
        url.searchParams.set('current', 'temperature_2m,weather_code,is_day');
        url.searchParams.set('timezone', 'America/Sao_Paulo');

        const res = await fetch(url.toString());
        if (!res.ok) throw new Error('weather');
        const data: {
          current?: {
            temperature_2m: number;
            weather_code: number;
            is_day: number;
          };
        } = await res.json();

        const c = data.current;
        if (cancelled || !c) return;

        setState({
          kind: 'ok',
          tempC: c.temperature_2m,
          weatherCode: c.weather_code,
          isDay: c.is_day === 1,
        });
      } catch {
        if (!cancelled) setState({ kind: 'error' });
      }
    };

    load();
    const id = window.setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  const muted = scrolled ? 'text-espresso/55' : 'text-cream/60';
  const strong = scrolled ? 'text-espresso' : 'text-cream';
  const accent = 'text-amber-warm';
  const chip = scrolled
    ? 'border-espresso/12 bg-espresso/[0.04]'
    : 'border-cream/25 bg-cream/[0.08]';

  if (state.kind === 'error') {
    return (
      <span className={`hidden font-sans text-[11px] uppercase tracking-wider md:inline ${muted}`} title="Clima indisponível">
        Campos do Jordão
      </span>
    );
  }

  if (state.kind === 'loading') {
    return (
      <div
        className={`flex items-center gap-2 rounded-full border px-2.5 py-1 md:px-3 md:py-1.5 ${chip}`}
        title="Campos do Jordão — carregando clima"
      >
        <Loader2 className={`h-3.5 w-3.5 shrink-0 animate-spin md:h-4 md:w-4 ${muted}`} aria-hidden />
        <span className={`font-sans text-xs font-medium tabular-nums md:text-sm ${strong}`}>--°</span>
      </div>
    );
  }

  const Icon = iconForWmo(state.weatherCode, state.isDay);

  return (
    <div
      className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 md:gap-2 md:px-3 md:py-1.5 ${chip}`}
      title="Campos do Jordão — temperatura ao vivo (Open-Meteo)"
    >
      <Icon className={`h-3.5 w-3.5 shrink-0 md:h-4 md:w-4 ${accent}`} aria-hidden />
      <span className={`font-sans text-xs font-semibold tabular-nums md:text-sm ${strong}`}>
        {Math.round(state.tempC)}°C
      </span>
      <span className={`hidden lg:inline font-sans text-[11px] ${muted}`}>Campos</span>
    </div>
  );
}
