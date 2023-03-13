import { css } from '@emotion/react';
import Link from 'next/link';

import { BodyText } from '@/ui/BodyText';

const linkCss = css`
    font-family: var(--font-primary);
    color: var(--clr-text);
    text-decoration: none;
    padding-block: var(--pad-8);
    padding-inline: var(--pad-16);
    border-radius: var(--br-btn);
    transition: background-color var(--animation-timing) var(--ease-fade-in),
        box-shadow calc(var(--animation-timing) + 25ms) var(--ease-fade-in);

    &:hover {
        --shadow-color: var(--clr-text-bg);
        background-color: var(--clr-text-bg);
        box-shadow: var(--shadow-elevation-medium);
    }
`;

const activeLinkCss = css`
    background-color: var(--clr-text-bg);
`;

type NavigationLinkProps = {
    href: string;
    label: string;
    isActive?: boolean;
};

export function NavigationLink({
    href,
    label,
    isActive = false,
}: NavigationLinkProps) {
    return (
        <Link href={href} css={[linkCss, isActive && activeLinkCss]}>
            <BodyText variant="regular/regular" as="span">
                {label}
            </BodyText>
        </Link>
    );
}
