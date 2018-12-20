import styled from '../../common/styled';
import Variables from '../Variables';

/**
 * @description it is props for CardHeader component
 */
interface CardHeaderProps extends Variables.Base {
    backgroundColor?: string;
    color?: string;
    radius?: any;
    margin?: string;
    noShadow?: boolean;
}

const CardHeader = styled('div')(
    (props: (CardHeaderProps | any)) => {
        const base = {
            borderBottom: '1px solid',
            padding: '.75rem 1.25rem',
            marginBottom: 0,
            backgroundColor: 'transparent',
            borderRadius: '.25rem',
            borderBottomColor: 'rgba(0,0,0,.125)',
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
                base.borderBottomColor = props.theme.color[props.borderColor];
            } else {
                base.borderBottomColor = props.borderColor;
            }
        }
        return base;
    }
);

export default CardHeader;
