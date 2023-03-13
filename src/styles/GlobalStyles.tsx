import { Global, css } from '@emotion/react';

import { Reset } from './reset';

const globalStyles = css`
    ${Reset}

    :root {
        /* === COLOR === */

        /* Bluemine */
        --blumine-50: #f2f9fd;
        --blumine-100: #e5f1f9;
        --blumine-200: #c5e2f2;
        --blumine-300: #91cae8;
        --blumine-400: #57aed9;
        --blumine-500: #3195c6;
        --blumine-600: #2277a7;
        --blumine-700: #1c5e86; // main
        --blumine-800: #1b5171;
        --blumine-900: #1c445e;

        /* Gossamer */
        --gossamer-50: #effef7;
        --gossamer-100: #dafeed;
        --gossamer-200: #b7fbdb;
        --gossamer-300: #7ff6c0;
        --gossamer-400: #40e89b;
        --gossamer-500: #17d07d;
        --gossamer-600: #0cac64; // main
        --gossamer-700: #0d8851;
        --gossamer-800: #106b43;
        --gossamer-900: #105739;

        /* Buttercup */
        --buttercup-50: #fffceb;
        --buttercup-100: #fdf5c8;
        --buttercup-200: #fce98b;
        --buttercup-300: #fad84f;
        --buttercup-400: #f9c526;
        --buttercup-500: #f3a712; // main
        --buttercup-600: #d77e08;
        --buttercup-700: #b2590b;
        --buttercup-800: #91440f;
        --buttercup-900: #773910;

        /* Alizarin Crimson */
        --alizarin-crimson-50: #fef2f3;
        --alizarin-crimson-100: #fee2e4;
        --alizarin-crimson-200: #fecace;
        --alizarin-crimson-300: #fba6ad;
        --alizarin-crimson-400: #f7727d;
        --alizarin-crimson-500: #ee4552;
        --alizarin-crimson-600: #db2b39; // main
        --alizarin-crimson-700: #b81d29;
        --alizarin-crimson-800: #981c26;
        --alizarin-crimson-900: #7e1e26;

        /* Grey Scale */
        --grey-25: #ffffff; // white
        --grey-50: #f7f7f7;
        --grey-100: #e3e3e3;
        --grey-200: #c8c8c8;
        --grey-300: #a4a4a4;
        --grey-400: #818181;
        --grey-500: #666666;
        --grey-600: #515151;
        --grey-700: #434343;
        --grey-800: #383838;
        --grey-900: #1f1f1f; // Black

        /* === TYPOGRAPHY === */

        /* Fonts */
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
        --ease-fade-in: cubic-bezier(0.77, 0, 0.18, 1);
    }

    body[data-theme='default'] {
        /* Text */
        --clr-text: var(--grey-900);
        --clr-text-bg: var(--blumine-300);
    }
`;

export function GlobalStyles() {
    return <Global styles={globalStyles} />;
}
