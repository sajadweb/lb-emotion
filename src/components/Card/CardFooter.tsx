import styled from '../../common/styled';
import Variables from '../Variables';
/**
 * @description it is props for Card component
 */
interface CardFooterProps extends Variables.Color {
    backgroundColor?: string;
    color?: string;
    radius?: any;
    margin?: string;
    noShadow?: boolean;
}
const CardFooter = styled('div')(
    (props: (CardFooterProps | any)) => {
        const base = {
            borderTop: '1px solid',
            padding: '.75rem .75rem',
            marginTop: 0,
            backgroundColor: 'transparent',
            borderRadius: 'none',
            borderTopColor: 'transparent',
            ':first-child': {
                borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0'
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
                base.borderTopColor = props.theme.color[props.borderColor];
            } else {
                base.borderTopColor = props.borderColor;
            }
        }
        return base;
    }
);

export default CardFooter;
