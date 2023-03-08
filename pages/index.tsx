import { css } from '@emotion/react';

const header = css`
    font-family: var(--font-primary);
    background-color: red;
`;

export default function Home() {
    return <h1 css={header}>Hello world</h1>;
}
