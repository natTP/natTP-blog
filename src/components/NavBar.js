import React, { useState } from 'react'
import styled from 'styled-components/macro'
import breakpoints from 'styles/Breakpoints'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logo } from './Logo'
import { Link } from 'gatsby'

const MenuItem = styled(Link)`
    padding-left: 1rem;
    text-decoration: none;

    font-family: 'Lexend', 'Noto Sans Thai', sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.25rem;

    color: ${(props) => props.theme.colors.neutral[700]};
    transition: all 0.3s ease-in;

    &:hover {
        color: ${(props) => props.theme.colors.amethyst.main};
    }

    @media (max-width: ${breakpoints.sm}) {
        padding-bottom: 2rem;
    } ;
`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoints.sm}) {
        overflow: hidden;
        flex-direction: column;

        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? '100vh' : '0px')};
        transition: max-height 0.3s ease-in;
    } ;
`

const StyledNavBar = styled.header`
    padding: 0 15% 0 15%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;

    position: sticky;
    top: 0;

    background: ${(props) => props.theme.colors.neutral[100]};

    @media (max-width: ${breakpoints.sm}) {
        align-items: center;
        padding: 0 1rem 0 0;
    } ;
`

export function NavBar({ className }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <StyledNavBar className={className}>
            <Logo
                href="/"
                variant="dark"
                css={`
                    font-size: 1.5rem;
                `}
            />
            <FontAwesomeIcon
                icon="bars"
                onClick={() => setIsOpen(!isOpen)}
                css={`
                    cursor: pointer;
                    display: none;

                    @media (max-width: ${breakpoints.sm}) {
                        display: flex;
                    } ;
                `}
            />
            <Menu isOpen={isOpen}>
                <MenuItem href="">Columns</MenuItem>
                <MenuItem href="">About The Author</MenuItem>
            </Menu>
        </StyledNavBar>
    )
}
