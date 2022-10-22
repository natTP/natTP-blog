import React from 'react'

export function AppContainer({ className, children }) {
    return <div>{children}</div>
    // return (
    //     <StyledAppContainer className={className}>
    //         <NavBar />
    //         {children}
    //         <Footer />
    //     </StyledAppContainer>
    // )
}
