import styled from '../../common/styled';
import Variables from '../Variables';

/**
 * @description it is props for CardBody component
 */
interface CardBodyProps extends Variables.Color {
    backgroundColor?: string;
    color?: string;
    radius?: any;
    margin?: string;
    noShadow?: boolean;
}

const CardBody = styled('div')(
    (props: (CardBodyProps | any)) => {
        const base = {
            flex: '1 1 auto',
            padding: '.75rem .75rem',
            '*, ::after, ::before': {
                'box-sizing': 'border-box',
            }
        };
        return base;
    }
);

export default CardBody;
