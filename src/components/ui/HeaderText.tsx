import { css } from '@emotion/react';

const variants = {
    size: {
        small: 'var(--font-400)',
        med: 'var(--font-500)',
        large: 'var(--font-600)',
    },
    weight: {
        regular: 'var(--fw-reg)',
        semibold: 'var(--fw-semi)',
        bold: 'var(--fw-bold)',
    },
} as const;

const headerCss = css`
    font-family: var(--font-primary);
    font-size: var(--font-500);
    font-weight: var(--fw-regular);
`;

type HeaderTextSizes = keyof typeof variants['size'];
type HeaderTextWeights = keyof typeof variants['weight'];

type HeaderTextProps = {
    children: React.ReactNode;
    variant: `${HeaderTextSizes}/${HeaderTextWeights}`;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

type HeaderMap = {
    [index: string]: JSX.Element;
};

export function HeaderText({ children, variant, as = 'h1' }: HeaderTextProps) {
    const [size = 'large', weight = 'regular'] = variant.split('/') as [
        HeaderTextSizes,
        HeaderTextWeights,
    ];

    const textCss = [
        headerCss,
        css`
            font-size: ${variants.size[size]};
            font-weight: ${variants.weight[weight]};
        `,
    ];

    const headerMap: HeaderMap = {
        h1: <h1 css={textCss}>{children}</h1>,
        h2: <h2 css={textCss}>{children}</h2>,
        h3: <h3 css={textCss}>{children}</h3>,
        h4: <h4 css={textCss}>{children}</h4>,
        h5: <h5 css={textCss}>{children}</h5>,
        h6: <h6 css={textCss}>{children}</h6>,
    };

    return headerMap[as];
}
