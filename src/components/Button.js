import React from 'react'
import styled, { css } from 'styled-components'
import { ButtonText } from 'styles/TextStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const variantStyles = (variant = 'filled') =>
    ({
        filled: css`
            background-color: ${(props) => props.theme.colors.amethyst.main};
            color: ${(props) => props.theme.colors.neutral[0]};
            border: none;
            &:hover {
                background-color: ${(props) => props.theme.colors.amethyst.dark};
            }
        `,
        white: css`
            background-color: ${(props) => props.theme.colors.neutral[0]};
            color: ${(props) => props.theme.colors.amethyst.main};
            border: none;
            &:hover {
                background-color: ${(props) => props.theme.colors.neutral[200]};
            }
        `,
        outlined: css`
            background-color: ${(props) => props.theme.colors.neutral[0]};
            color: ${(props) => props.theme.colors.amethyst.main};
            border: 2px solid ${(props) => props.theme.colors.amethyst.main};
            border-radius: 7px;
            &:hover {
                background-color: ${(props) => props.theme.colors.neutral[200]};
            }
        `,
    }[variant])

// TODO : Use Gatsby link in button

const StyledButton = styled.button`
    padding: 0.75rem 0.5rem 0.75rem 1rem;
    margin: 0.5rem;
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.shadows.default};

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.amethyst.dark};
    }

    & > * {
        margin-right: 0.5rem;
    }

    ${({ variant }) => variantStyles(variant)}
`

export function Button({ className, variant, icon, children }) {
    return (
        <StyledButton className={className} variant={variant}>
            {icon && <FontAwesomeIcon icon={icon} />}
            <ButtonText>{children}</ButtonText>
        </StyledButton>
    )
}
