import { css } from '@emotion/react';

const variants = {
    size: {
        small: 'var(--font-200)',
        large: 'var(--font-300)',
    },
    weight: {
        regular: 'var(--fw-reg)',
        semibold: 'var(--fw-semi)',
        bold: 'var(--fw-bold)',
    },
} as const;

const subHeaderCss = css`
    font-family: var(--font-primary);
    font-size: var(--font-300);
    font-weight: var(--fw-reg);
`;

type SubHeaderSizes = keyof typeof variants['size'];
type SubHeaderWeights = keyof typeof variants['weight'];

type SubHeaderProps = {
    children: React.ReactNode;
    variant: `${SubHeaderSizes}/${SubHeaderWeights}`;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

type SubHeaderMap = {
    [index: string]: JSX.Element;
};

export function SubHeader({ children, variant, as = 'h2' }: SubHeaderProps) {
    const [size = 'small', weight = 'regular'] = variant.split('/') as [
        SubHeaderSizes,
        SubHeaderWeights,
    ];

    const textCss = [
        subHeaderCss,
        css`
            font-size: ${variants.size[size]};
            font-weight: ${variants.weight[weight]};
        `,
    ];

    const subHeaderMap: SubHeaderMap = {
        h1: <h1 css={textCss}>{children}</h1>,
        h2: <h2 css={textCss}>{children}</h2>,
        h3: <h3 css={textCss}>{children}</h3>,
        h4: <h4 css={textCss}>{children}</h4>,
        h5: <h5 css={textCss}>{children}</h5>,
        h6: <h6 css={textCss}>{children}</h6>,
    };

    return subHeaderMap[as];
}
