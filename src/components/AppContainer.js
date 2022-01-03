import React from 'react'
import styled from 'styled-components'
import WaveLR from 'assets/waveLR.svg'
import WaveRL from 'assets/waveRL.svg'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

// TODO : Separate background component, maybe use particlests

// const StyledWave1 = styled(WaveRL)`
//     width: 100vw;
//     z-index: -3;
//     path {
//         fill: ${(props) => props.theme.colors.neutral[100]};
//     }
// `

// const StyledWave2 = styled(WaveLR)`
//     width: 100vw;
//     z-index: -2;
//     path {
//         fill: ${(props) => props.theme.colors.neutral[200]};
//     }
// `

// const StyledWave3 = styled(WaveRL)`
//     width: 100vw;
//     z-index: -1;
//     path {
//         fill: ${(props) => props.theme.colors.neutral[300]};
//     }
// `

const StyledAppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    background-color: ${(props) => props.theme.colors.neutral[0]};
`
export function AppContainer({ className, children }) {
    return (
        <StyledAppContainer className={className}>
            <NavBar />
            {children}
            <Footer />
        </StyledAppContainer>
    )
}
