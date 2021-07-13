import Theme from 'styles/Theme'

import GlobalFonts from 'fonts/Fonts'
import { GlobalStyles } from 'styles/GlobalStyles'
import { AppContainer } from 'components/AppContainer'
import { Button } from 'components/Button'

function App() {
    return (
        <Theme>
            <AppContainer>
                <GlobalStyles />
                <Button primary>เลือก Fighter ของคุณ</Button>
            </AppContainer>
        </Theme>
    )
}

export default App
