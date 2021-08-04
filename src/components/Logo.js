import React from 'react'
import styled, { css } from 'styled-components'

const variantStyles = (variant = 'dark') =>
    ({
        dark: css`
            color: ${(props) => props.theme.colors.neutral[700]};
        `,
        light: css`
            color: ${(props) => props.theme.colors.neutral[200]};
        `,
    }[variant])

const StyledLogo = styled.a`
    padding: 1rem;
    text-decoration: none;
    font-family: 'Lexend', sans-serif;
    font-weight: 600;

    span {
        font-weight: 300;
    }

    ${({ variant }) => variantStyles(variant)}
`

export function Logo({ className, variant, href }) {
    return (
        <StyledLogo className={className} variant={variant} href={href}>
            nat<span>TP</span>
        </StyledLogo>
    )
}
