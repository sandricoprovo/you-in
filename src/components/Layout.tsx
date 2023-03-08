import { css } from '@emotion/react';

import { Children } from '@/types/children';

const layoutCss = css``;

type LayoutProps = {
    children: Children;
};

export function Layout({ children }: LayoutProps) {
    return (
        <div css={layoutCss}>
            <header />
            <main>{children}</main>
            <footer />
        </div>
    );
}
