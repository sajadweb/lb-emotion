import styled from '../common/styled';
import Variables from './Variables';

/**
 * @description it is props for button component
 */
interface ButtonProps extends Variables.Color {
    backgroundColor?: string;
    color?: string;
    margin?: string;
    noShadow?: boolean;
}
const Button = styled('button')(
    (props: (ButtonProps | any)) => {
        const btn = {
            'display': 'inline-block',
            'text-align': 'center',
            'font-weight': 'normal',
            'white-space': 'nowrap',
            'vertical-align': 'middle',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'cursor': 'pointer',
            'user-select': 'none',
            'border': '1px solid transparent',
            'padding': '.375rem .75rem',
            'font-size': '1rem',
            'line-height': '1.5em',
            'border-radius': '.25rem',
            'transition': `color .15s ease-in-out,
                           background-color.15s ease-in-out,
                           border-color .15s ease-in-out,
                           box-shadow .15s ease-in-out
             `,
            'margin': props.margin ? props.margin : 0,
            'color': props.color ? props.color : '#fff',
            'backgroundColor': 'transparent'
        };
        if (props.primary) {
            btn.backgroundColor = props.theme.color.primary;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem  ${props.theme.hexToRgba(props.theme.color.primary)}`
                };
            }
            return btn;
        }
        if (props.success) {
            btn.backgroundColor = props.theme.color.success;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem  ${props.theme.hexToRgba(props.theme.color.success)}`
                };
            }
            return btn;
        }
        if (props.info) {
            btn.backgroundColor = props.theme.color.info;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem  ${props.theme.hexToRgba(props.theme.color.info)}`
                };
            }
            return btn;
        }
        if (props.danger) {
            btn.backgroundColor = props.theme.color.danger;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem  ${props.theme.hexToRgba(props.theme.color.danger)}`
                };
            }
            return btn;
        }
        if (props.warning) {
            btn.backgroundColor = props.theme.color.warning;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem  ${props.theme.hexToRgba(props.theme.color.warning)}`
                };
            }
            return btn;
        }
        if (props.light) {
            btn.color = props.color ? props.color : '#000';
            btn.backgroundColor = props.theme.color.light;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem  ${props.theme.hexToRgba(props.theme.color.light)}`
                };
            }
            return btn;
        }
        if (props.dark) {
            btn.backgroundColor = props.theme.color.dark;
            if (!props.noShadow) {
                btn['&:hover'] = {
                    boxShadow: `0 0 0 0.2rem  ${props.theme.hexToRgba(props.theme.color.dark)}`
                };
            }
            return btn;
        }

        btn.backgroundColor = props.backgroundColor ? props.backgroundColor : props.theme.color.primary;
        if (!props.noShadow) {
            btn['&:hover'] = {
                boxShadow: `0 0 0 0.2rem  ${props.theme.hexToRgba(btn.backgroundColor)}`
            };
        }
        return btn;
    }
);

export default Button;
