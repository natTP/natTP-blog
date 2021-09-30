import React from 'react'
import styled from 'styled-components'
import { ReactComponent as WaveLR } from 'assets/waveLR.svg'
import { ReactComponent as WaveRL } from 'assets/waveRL.svg'

const StyledWave1 = styled(WaveRL)`
    width: 100vw;
    z-index: -3;
    path {
        fill: ${(props) => props.theme.colors.neutral[100]};
    }
`

const StyledWave2 = styled(WaveLR)`
    width: 100vw;
    z-index: -2;
    path {
        fill: ${(props) => props.theme.colors.neutral[200]};
    }
`

const StyledWave3 = styled(WaveRL)`
    width: 100vw;
    z-index: -1;
    path {
        fill: ${(props) => props.theme.colors.neutral[300]};
    }
`

const StyledAppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    background-color: ${(props) => props.theme.colors.neutral[0]};
`
export function AppContainer({ className, children }) {
    return (
        <StyledAppContainer className="className">
            {children}
            <StyledWave1 />
            <StyledWave2 />
            <StyledWave3 />
        </StyledAppContainer>
    )
}
