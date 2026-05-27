import {
  SiPython,
  SiStreamlit,
  SiPostgresql,
  SiDocker,
  SiReact,
  SiVite,
  SiSupabase,
  SiFastapi,
  SiPytorch,
  SiOpenstreetmap,
  SiLeaflet,
  SiOpencv,
  SiPandas,
  SiElectron,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiCloudflare,
  SiNginx,
  SiPlotly,
  SiGithub,
  SiUltralytics,
  SiTailwindcss,
  SiTensorflow,
  SiKeras,
} from 'react-icons/si';

// Normalized-substring → brand icon. Order matters: more specific keys first so a
// compound label (e.g. "Ultralytics YOLOv11", "Folium / Leaflet") resolves correctly.
const ICON_MAP = [
  ['streamlit', SiStreamlit],
  ['postgresql', SiPostgresql],
  ['postgres', SiPostgresql],
  ['fastapi', SiFastapi],
  ['pytorch', SiPytorch],
  ['torchvision', SiPytorch],
  ['openstreetmap', SiOpenstreetmap],
  ['leaflet', SiLeaflet],
  ['folium', SiLeaflet],
  ['opencv', SiOpencv],
  ['pandas', SiPandas],
  ['electron', SiElectron],
  ['nodejs', SiNodedotjs],
  ['express', SiExpress],
  ['javascript', SiJavascript],
  ['cloudflare', SiCloudflare],
  ['nginx', SiNginx],
  ['plotly', SiPlotly],
  ['githubpages', SiGithub],
  ['github', SiGithub],
  ['ultralytics', SiUltralytics],
  ['yolo', SiUltralytics],
  ['supabase', SiSupabase],
  ['tailwind', SiTailwindcss],
  ['tensorflow', SiTensorflow],
  ['keras', SiKeras],
  ['docker', SiDocker],
  ['react', SiReact],
  ['vite', SiVite],
  ['python', SiPython],
];

export function getTechIcon(name = '') {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (const [key, Icon] of ICON_MAP) {
    if (normalized.includes(key)) return Icon;
  }
  return null;
}

/**
 * Renders the brand logo for a tech name, or nothing if there's no matching icon
 * (e.g. "ML", "CLI", "API-Football"). Monochrome (currentColor) so it adapts to theme.
 */
export function TechIcon({ name, className, ...rest }) {
  const Icon = getTechIcon(name);
  if (!Icon) return null;
  return <Icon className={className} aria-hidden {...rest} />;
}
