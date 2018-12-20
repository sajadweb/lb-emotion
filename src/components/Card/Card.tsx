import styled from '../../common/styled';
import Variables from './../Variables';
/**
 * @description it is props for Card component
 */
interface CardProps extends Variables.Base {
    backgroundColor?: string;
    color?: string;
    radius?: any;
    margin?: string;
    noShadow?: boolean;
}
const Card = styled('div')(
    (props: (CardProps | any)) => {
        const base = {
            border: '1px solid',
            borderRadius: '.25rem',
            borderColor: 'rgba(0,0,0,.125)',
            backgroundColor: 'transparent',
            color: '#000',
            '*, ::after, ::before': {
                'box-sizing': 'border-box',
            }
        };
        if (props.radius) {
            base.borderRadius = props.radius;
        }
        if (props.bgColor) {
            if (props.theme.color[props.bgColor]) {
                base.backgroundColor = props.theme.color[props.bgColor];
            } else {
                base.backgroundColor = props.bgColor;
            }
        }
        if (props.borderColor) {
            if (props.theme.color[props.borderColor]) {
                base.borderColor = props.theme.color[props.borderColor];
            } else {
                base.borderColor = props.borderColor;
            }
        }
        base.color = props.color ? props.color : base.color;
        return base;
    }
);

export default Card;
