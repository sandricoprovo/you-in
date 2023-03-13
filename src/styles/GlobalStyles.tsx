import { Global, css } from '@emotion/react';

import { Reset } from './reset';

const globalStyles = css`
    ${Reset}

    :root {
        /* === COLOR === */
        --black: #1f1f1f;

        /* === TYPOGRAPHY === */
        --font-primary: var(--inter);

        /* Scale */
        --font-scale: 1.414;
        --font-shrink: 0.6;
        --font-tiny: 0.5rem;
        --font-overline: 0.707rem;
        --font-base: 1rem;
        --font-st-sm: 1.414rem;
        --font-st-lg: 1.999rem;
        --font-h-sm: 2.827rem;
        --font-h-md: 3.998rem;
        --font-h-lg: 5.653rem;

        /* Clamps */
        --font-50: var(--font-tiny);
        --font-75: var(--font-overline);
        --font-100: var(--font-base);
        --font-200: clamp(
            calc(var(--font-base) * var(--font-scale) * var(--font-shrink)),
            12vw,
            var(--font-st-sm)
        );
        --font-300: clamp(
            calc(var(--font-st-sm) * var(--font-scale) * var(--font-shrink)),
            8vw,
            var(--font-st-lg)
        );
        --font-400: clamp(
            calc(var(--font-st-lg) * var(--font-scale) * var(--font-shrink)),
            10vw,
            var(--font-h-sm)
        );
        --font-500: clamp(
            calc(var(--font-h-sm) * var(--font-scale) * var(--font-shrink)),
            12vw,
            var(--font-h-md)
        );
        --font-600: clamp(
            calc(var(--font-h-md) * var(--font-scale) * var(--font-shrink)),
            14vw,
            var(--font-h-lg)
        );

        /* Weights */
        --fw-reg: 400;
        --fw-semi: 600;
        --fw-bold: 800;

        /* === ELEVATION === */
        --shadow-color: 0deg 0% 75%;
        --shadow-elevation-low: 0.4px 0.6px 1px hsl(var(--shadow-color) / 0.09),
            0.7px 1px 1.6px -0.5px hsl(var(--shadow-color) / 0.18),
            1.3px 2.1px 3.3px -1px hsl(var(--shadow-color) / 0.26);
        --shadow-elevation-medium: 0.4px 0.6px 1px
                hsl(var(--shadow-color) / 0.07),
            1.2px 1.9px 3px -0.2px hsl(var(--shadow-color) / 0.12),
            2.1px 3.3px 5.3px -0.5px hsl(var(--shadow-color) / 0.16),
            3.7px 5.8px 9.3px -0.7px hsl(var(--shadow-color) / 0.21),
            6.6px 10.4px 16.6px -1px hsl(var(--shadow-color) / 0.25);
        --shadow-elevation-high: 0.4px 0.6px 1px hsl(var(--shadow-color) / 0.07),
            1.9px 3.1px 4.9px -0.1px hsl(var(--shadow-color) / 0.09),
            3.3px 5.2px 8.3px -0.2px hsl(var(--shadow-color) / 0.11),
            4.7px 7.5px 11.9px -0.3px hsl(var(--shadow-color) / 0.13),
            6.4px 10.1px 16.1px -0.4px hsl(var(--shadow-color) / 0.15),
            8.6px 13.5px 21.6px -0.6px hsl(var(--shadow-color) / 0.17),
            11.4px 17.9px 28.6px -0.7px hsl(var(--shadow-color) / 0.19),
            15.1px 23.7px 37.9px -0.8px hsl(var(--shadow-color) / 0.21),
            19.8px 31.2px 49.9px -0.9px hsl(var(--shadow-color) / 0.23),
            25.9px 40.8px 65.2px -1px hsl(var(--shadow-color) / 0.25);

        /* === SPACING === */
        /* Padding */
        --padding-base: 8px;
        --pad-2: calc(var(--padding-base) * 0.25);
        --pad-4: calc(var(--padding-base) * 0.5);
        --pad-6: calc(var(--padding-base) * 0.75);
        --pad-8: var(--padding-base);
        --pad-16: calc(var(--padding-base) * 2);
        --pad-24: calc(var(--padding-base) * 3);
        --pad-32: calc(var(--padding-base) * 4);
        --pad-40: calc(var(--padding-base) * 5);
        --pad-48: calc(var(--padding-base) * 6);
        --pad-56: calc(var(--padding-base) * 7);
        --pad-64: calc(var(--padding-base) * 8);

        /* === ELEMENTS === */
        /* Border Radius */
        --br-btn: 5px;

        /* === ELEMENTS === */
        /* Animations */
        --animation-timing: 200ms;
    }

    body[data-theme='default'] {
        --clr-text: var(--black);
    }
`;

export function GlobalStyles() {
    return <Global styles={globalStyles} />;
}
