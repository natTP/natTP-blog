import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logo } from './Logo'
import { ReactComponent as Wave } from 'assets/waveLR.svg'

const SocialLink = styled.a`
    margin: 0.75rem;
    color: ${(props) => props.theme.colors.neutral[200]};
    transition: all 0.3s ease-in;

    &:hover {
        color: ${(props) => props.theme.colors.neutral[300]};
    }
`

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    position: absolute;
    left: 46.33%;
    right: 46.33%;
    top: 30.5%;
`

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
`

export function Footer({ className }) {
    return (
        <StyledFooter className={className}>
            <Content>
                <Logo
                    variant="light"
                    css={`
                        font-size: 1.5rem;
                        align-self: center;
                    `}
                />
                <SocialLinks>
                    <SocialLink href="https://www.facebook.com/765pro.no.natTP" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" />
                    </SocialLink>
                    <SocialLink href="https://www.instagram.com/art.at.natty.p" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                    </SocialLink>
                    <SocialLink href="https://github.com/natTP/natTP-blog" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                    </SocialLink>
                </SocialLinks>
            </Content>
            <Wave
                preserveAspectRatio="none"
                css={`
                    width: 100vw;
                `}
            />
        </StyledFooter>
    )
}
