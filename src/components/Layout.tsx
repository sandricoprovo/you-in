import { css } from '@emotion/react';
import { useEffect } from 'react';
import localFont from 'next/font/local';

import { Header } from '@/components/Header';
import { Children } from '@/types/children';
import { GlobalStyles } from '@/styles/GlobalStyles';

const interLocal = localFont({
    src: '../../public/fonts/Inter-Variable-Font.woff2',
    variable: '--inter',
});

const layoutCss = css``;

type LayoutProps = {
    children: Children;
};

export function Layout({ children }: LayoutProps) {
    useEffect(() => {
        if (!window || !document) return;
        const body = document.querySelector('body');

        if (!body) return;

        body.dataset.theme = 'default';
    }, []);

    return (
        <>
            <GlobalStyles />
            <div css={layoutCss} className={interLocal.className}>
                <Header />
                {children}
                <footer />
            </div>
        </>
    );
}
