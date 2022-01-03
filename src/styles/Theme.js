import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalFonts from 'fonts/Fonts'
import { GlobalStyles } from 'styles/GlobalStyles'

export const theme = {
    colors: {
        amethyst: {
            veryLight: '#EFE9FB',
            light: '#9361FF',
            main: '#6D44C5',
            dark: '#563996',
        },
        salmon: {
            light: '#FF9398',
            main: '#E85158',
            dark: '#E85158',
        },
        neutral: {
            0: '#FFFFFF',
            100: '#F6F4FB',
            200: '#E6E1F1',
            300: '#C5BDD7',
            700: '#585361',
            900: '#3E3A47',
        },
        success: '#87DB53',
    },
    fonts: ['sans-serif', 'Noto Sans Thai', 'Lexend', 'Bai Jamjuree'],
    shadows: {
        default: '1px 1px 2px rgba(88, 83, 97, 0.25)',
        hover: ' 1px 4px 10px rgba(88, 83, 97, 0.25)',
    },
}

export const Theme = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GlobalFonts />
            {element}
        </ThemeProvider>
    )
}
