import { Theme } from './styled';
import * as color from 'color';
function darken(hex: string) {
    return color(hex)
        .darken(0.03)
        .hex();
}
const mainTheme: Theme = {
    color: {
        primary: '#00aba9',
        primary_dark: darken('#00aba9'),
        secondary: '#24292e',
        secondary_dark: darken('#24292e'),
        warning: '#f0ad4e',
        warning_dark: darken('#f0ad4e'),
        light: '#f8f9fa',
        light_dark: darken('#f8f9fa'),
        dark: '#000',
        success: '#d4edda',
        success_dark: '#155724',
        info: '#5bc0de',
        info_dark: darken('#5bc0de'),
        danger: '#d9534f',
        danger_dark: darken('#d9534f'),
    },
    font: {
        size: 16,
        family: '"Roboto"',
    },
    darken: (_color?: string) => {
        return color(_color)
            .darken(0.03)
            .hex();
    },
    hexToRgba: (hex: string, a: number) => {
        return color(hex).fade(a ? a : 0.5).string();
    }
};

export default mainTheme;
