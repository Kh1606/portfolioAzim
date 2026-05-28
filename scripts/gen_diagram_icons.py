"""Generate brand-colored PNG logos for diagram nodes.

Run from this directory (or anywhere):
    /c/Users/Alex/.diagramsenv/Scripts/python.exe scripts/gen_diagram_icons.py

Source: simple-icons via jsDelivr. Output: app/assets/_diagram_icons/<slug>.png.
"""
import os
import re
import urllib.request

import cairosvg

OUT = os.path.join(os.path.dirname(__file__), "..", "app", "assets", "_diagram_icons")
OUT = os.path.normpath(OUT)
os.makedirs(OUT, exist_ok=True)

# (simple-icons slug, brand hex without #) — covers techs across all 10 projects
ICONS = [
    ("python", "3776AB"),
    ("tensorflow", "FF6F00"),
    ("keras", "D00000"),
    ("pytorch", "EE4C2C"),
    ("scikitlearn", "F7931E"),
    ("opencv", "5C3EE8"),
    ("pandas", "150458"),
    ("plotly", "7A76FF"),
    ("jupyter", "F37626"),
    ("fastapi", "009688"),
    ("react", "61DAFB"),
    ("vite", "646CFF"),
    ("tailwindcss", "06B6D4"),
    ("postgresql", "4169E1"),
    ("supabase", "3FCF8E"),
    ("docker", "2496ED"),
    ("leaflet", "199900"),
    ("openstreetmap", "7EBC6F"),
    ("streamlit", "FF4B4B"),
    ("electron", "47848F"),
    ("nodedotjs", "5FA04E"),
    ("express", "111111"),
    ("githubactions", "2088FF"),
    ("cloudflareworkers", "F38020"),
    ("kakao", "FFCD00"),
    ("ultralytics", "111F68"),
    ("jsdelivr", "E84D3D"),
    ("files", "5D6D7E"),       # generic file/data
    ("googlechrome", "4285F4"), # browser
    ("openai", "412991"),       # ML / model (generic fallback)
]

URL = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/{slug}.svg"


def fetch_svg(slug: str) -> str:
    req = urllib.request.Request(URL.format(slug=slug), headers={"User-Agent": "diagram-icons"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode("utf-8")


def colorize(svg: str, hex_color: str) -> str:
    # simple-icons SVGs use a single path that inherits 'currentColor'.
    # Inject explicit fill on the <svg> element so the path is colored.
    if "fill=" not in svg.split(">", 1)[0]:
        svg = svg.replace("<svg ", f'<svg fill="#{hex_color}" ', 1)
    else:
        svg = re.sub(r'fill="[^"]*"', f'fill="#{hex_color}"', svg, count=1)
    return svg


def render(slug: str, hex_color: str):
    try:
        svg = colorize(fetch_svg(slug), hex_color)
    except Exception as e:
        print(f"  !! {slug}: fetch failed ({e})")
        return False
    out_path = os.path.join(OUT, f"{slug}.png")
    cairosvg.svg2png(bytestring=svg.encode("utf-8"),
                     write_to=out_path,
                     output_width=256, output_height=256)
    return True


def main():
    ok = 0
    for slug, color in ICONS:
        if render(slug, color):
            ok += 1
            print(f"  OK{slug}")
    print(f"\nWrote {ok}/{len(ICONS)} icons to {OUT}")


if __name__ == "__main__":
    main()
