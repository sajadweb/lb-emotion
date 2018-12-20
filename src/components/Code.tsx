import * as React from 'react';
import styled from '../common/styled';

/**
 * @description it is props for code component
 */
interface CodeProps {
    backgroundColor?: string;
    children?: any
}
const CodeStyle = styled('code')(
    (props: (CodeProps | any)) => {
        const btn = {
            'display': 'block',
            'text-align': 'left',
            'font-weight': 'normal',
            'padding': '15px 0px 15px 0px',
            'margin': props.margin ? props.margin : 0,
            'color': props.color ? props.color : '#000',
            'backgroundColor': props.theme.color.light
        };
        return btn;
    }
);
interface PropsType {
    children?: any
    theme?: any
}
// StatelessComponent
const Code: React.SFC<PropsType> = ({ children, theme }) => (
    <div>
        <CodeStyle theme={theme} data-lang="html">
            <pre>      {children} </pre>
        </CodeStyle>
    </div>
);
export default Code;