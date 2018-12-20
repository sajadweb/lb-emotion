import styled from '../../common/styled';
import Variables from '../Variables';
/**
 * @description it is props for Navbar component
 */
interface NavbarProps extends Variables.Base {
    backgroundColor?: string;
    color?: string;
    noShadow?: boolean;
}

const Navbar = styled('div')(
    (props: (NavbarProps | any)) => {
        // const base = `
        // background-color: #f8f9fa!important;1
        // -ms-flex-flow: row nowrap;1
        // flex-flow: row nowrap;1
        // -ms-flex-pack: start;1
        // justify-content: flex-start;
        // position: fixed;
        // top: 0;
        // left: 0;
        // right:0;
        // min-height: 4rem;
        // display: -ms-flexbox;
        // display: flex;
        // -ms-flex-wrap: wrap;
        // flex-wrap: wrap;
        // -ms-flex-align: center;
        // align-items: center;
        // -ms-flex-pack: justify;
        // justify-content: space-between;
        // padding: .5rem 1rem;
        // *, ::after, ::before {
        //     box-sizing: border-box;
        // }
        // `;
        const base = {
            ...[`;
            position: -webkit-fixed;
            position: fixed;
            display: -ms-flexbox;
            display: flex;
            `],
            '-ms-flex-flow': 'row nowrap',
            'flex-flow': 'row nowrap',
            '-ms-flex-pack': 'start',
            justifyContent: 'flex-start',
            top: 0,
            left: 0,
            right: 0,
            // minHeight: '4rem',
            '-ms-flex-wrap': 'wrap',
            'flex-wrap': 'wrap',
            '-ms-flex-align': 'center',
            'flex-align': 'center',
            'justify-content': 'space-between',
            // width: '100%',
            padding: '1.3rem 1rem',
            // margin: 'auto',
            backgroundColor: 'transparent',
            color: '#000'
        };
        if (props.bgColor) {
            if (props.theme.color[props.bgColor]) {
                base.backgroundColor = props.theme.color[props.bgColor];
            } else {
                base.backgroundColor = props.bgColor;
            }
        }
        base.color = props.color ? props.color : base.color;
        return base;
    }
);

export default Navbar;
