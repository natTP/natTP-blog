import { createGlobalStyle } from 'styled-components'

import NotoSansThaiMediumWoff from 'fonts/NotoSansThai-Medium.woff'
import NotoSansThaiMediumWoff2 from 'fonts/NotoSansThai-Medium.woff2'

import NotoSansThaiBoldWoff from 'fonts/NotoSansThai-Bold.woff'
import NotoSansThaiBoldWoff2 from 'fonts/NotoSansThai-Bold.woff2'

export default createGlobalStyle`
@font-face {
font-family: 'Noto Sans Thai';
    src: url(${NotoSansThaiMediumWoff2}) format('woff2'),
        url(${NotoSansThaiMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
font-family: 'Noto Sans Thai';
    src: url(${NotoSansThaiBoldWoff2}) format('woff2'),
        url(${NotoSansThaiBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
`
