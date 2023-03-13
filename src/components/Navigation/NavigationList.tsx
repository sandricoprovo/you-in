import { css } from '@emotion/react';

import { Children } from '@/types/children';

const navListCss = css`
    display: flex;
    align-items: center;
    gap: 24px;

    & > li {
        list-style: none;
    }
`;

type NavigationListProps = {
    children: Children;
};

export function NavigationList({ children }: NavigationListProps) {
    return (
        <nav>
            <ul css={navListCss}>{children}</ul>
        </nav>
    );
}
