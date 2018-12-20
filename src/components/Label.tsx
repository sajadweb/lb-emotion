import styled from '../common/styled';
import Variables from './Variables';
/**
 * @description it is props for Label component
 */
interface LabelProps extends Variables.Color {
    backgroundColor?: string;
    color?: string;
    margin?: string;
    badge?: boolean | number
}

const Label = styled('label')(
    (props: (LabelProps | any)) => {
        const base_label = {
            display: 'inline',
            padding: '.2em .6em .3em',
            fontSize: '75%',
            fontWeight: 700,
            lineHeight: 1,
            verticalAlign: 'baseline',
            borderRadius: '.25em',
            margin: props.margin ? props.margin : 0,
            color: props.color ? props.color : '#fff',
            backgroundColor: 'transparent'
        };
        if (props.badge) {
            base_label.borderRadius = props.badge === true ? '50%' : `${props.badge}%`;
        }
        if (props.primary) {
            base_label.backgroundColor = props.theme.color.primary;
            return base_label;
        }
        if (props.success) {
            base_label.backgroundColor = props.theme.color.success;
            return base_label;
        }
        if (props.info) {
            base_label.backgroundColor = props.theme.color.info;
            return base_label;
        }
        if (props.danger) {
            base_label.backgroundColor = props.theme.color.danger;
            return base_label;
        }
        if (props.warning) {
            base_label.backgroundColor = props.theme.color.warning;
            return base_label;
        }
        if (props.light) {
            base_label.backgroundColor = props.theme.color.light;
            base_label.color = '#000';
            return base_label;
        }
        if (props.dark) {
            base_label.backgroundColor = props.theme.color.dark;
            return base_label;
        }

        base_label.backgroundColor = props.backgroundColor ? props.backgroundColor : 'transparent';
        return base_label;
    }
);

export default Label;
