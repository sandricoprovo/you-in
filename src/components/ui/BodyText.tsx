import { css } from '@emotion/react';

const variants = {
    size: {
        tiny: 'var(--font-50)',
        small: 'var(--font-75)',
        regular: 'var(--font-100)',
    },
    weight: {
        regular: 'var(--fw-reg)',
        semibold: 'var(--fw-semi)',
        bold: 'var(--fw-bold)',
    },
} as const;

const bodyTextCss = css`
    font-family: var(--font-primary);
    font-size: var(--font-100); // fallbacks
    font-weight: var(--fw-reg); // fallbacks
`;

type BodyTextSizes = keyof typeof variants['size'];
type BodyTextWeights = keyof typeof variants['weight'];

type BodyTextProps = {
    children: React.ReactNode;
    variant: `${BodyTextSizes}/${BodyTextWeights}`;
    as?: 'p' | 'span';
};

export function BodyText({ children, variant, as = 'p' }: BodyTextProps) {
    const [size = 'regular', weight = 'regular'] = variant.split('/') as [
        BodyTextSizes,
        BodyTextWeights,
    ];

    // Composes the shared css.
    const textCss = [
        bodyTextCss,
        css`
            font-size: ${variants.size[size]};
            font-weight: ${variants.weight[weight]};
        `,
    ];

    return as === 'p' ? (
        <p css={textCss}>{children}</p>
    ) : (
        <span css={textCss}>{children}</span>
    );
}
