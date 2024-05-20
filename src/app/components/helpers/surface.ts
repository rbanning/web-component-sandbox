export const themeColorBasics = ['default', 'primary', 'secondary', 'error'] as const;
export type ThemeColorBasic = typeof themeColorBasics[number];

export const themeColorBGs = [...themeColorBasics, 'background', 'surface', 'transparent'] as const;
export type ThemeColorBG = typeof themeColorBGs[number];

export const themeColorOpacities = ['full', 'mostly', 'half', 'quarter', 'full'] as const;
export type ThemeColorOpacity = typeof themeColorOpacities[number];

export type Surface = {
  color: string;
  background: string;
}
export function surfaceParts(text: ThemeColorBasic, bg: ThemeColorBG, opacity?: ThemeColorOpacity) {

  return {
    color: textColorCss(text),
    background: bgColorCss(bg, opacity),
  } as Surface;
}
export function surfaceCss(surface: Surface) {
  return `
    color: ${surface.color};
    background-color: ${surface.background};
  `;
}

//helpers

function textColorCss(color: ThemeColorBasic) {
  const x = (color === 'default') ? 'color' : color;
  return  `light-dark(var(--text-${x}-light, #000), var(--text-${x}-dark, #fff))`;

}
function bgColorCss(color: ThemeColorBG, opacity?: ThemeColorOpacity) {
  opacity ??= 'full';

  const x = (color === 'default') ? 'color' : color;
  const pre = themeColorBasics.includes(color as ThemeColorBasic) 
    ? 'text' : 'bg';
  const o = (opacity === 'full') ? '100%' : `var(--bg-opacity-${opacity})`;
  return  `light-dark(
    rgb(from var(--${pre}-${x}-light, #000) r g b / ${o}), 
    rgb(from var(--${pre}-${x}-dark, #fff) r g b / ${o})
  )`;
}