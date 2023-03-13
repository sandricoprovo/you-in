import { css } from '@emotion/react';

import { NavigationLink } from '@/components/Navigation/NavigationLink';
import { NavigationList } from '@/components/Navigation/NavigationList';

const headerCss = css`
    height: 12vh;
    min-height: 72px;
    padding-inline: var(--pad-64);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NAV_LINKS = [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Login', href: '/login' },
];

export function Header() {
    return (
        <header css={headerCss}>
            <p>YouIn</p>
            <NavigationList>
                {NAV_LINKS.map((link) => {
                    const { href, label } = link;

                    return (
                        <li key={label}>
                            <NavigationLink href={href} label={label} />
                        </li>
                    );
                })}
            </NavigationList>
        </header>
    );
}
