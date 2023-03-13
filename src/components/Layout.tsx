import { css } from '@emotion/react';

import { Header } from '@/components/Header';
import { Children } from '@/types/children';
import { GlobalStyles } from '@/styles/GlobalStyles';

const layoutCss = css``;

type LayoutProps = {
    children: Children;
};

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <GlobalStyles />
            <div css={layoutCss}>
                <Header />
                {children}
                <footer />
            </div>
        </>
    );
}
