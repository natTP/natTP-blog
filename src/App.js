import Theme from 'styles/Theme'

import GlobalFonts from 'fonts/Fonts'
import { GlobalStyles } from 'styles/GlobalStyles'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faYoutube, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { AppContainer } from 'components/AppContainer'
import { Button } from 'components/Button'
import { NavBar } from 'components/NavBar'
import { Footer } from 'components/Footer'
import { Body, H1 } from 'styles/TextStyles'

library.add(faFacebookF, faYoutube, faInstagram, faGithub, fas)

// https://medium.com/@satyambansal001/transform-create-react-app-to-gatsby-3ba4546f66d3
// https://www.gatsbyjs.com/docs/porting-from-create-react-app-to-gatsby/
// https://www.gatsbyjs.com/docs/how-to/styling/styled-components/

function App() {
    return (
        <Theme>
            <AppContainer>
                <GlobalStyles />
                <GlobalFonts />
                <NavBar />
                <div class="example">
                    <H1>ตัวอย่าง Example</H1>
                    <Body>เลือก Fighter ของคุณได้เลย</Body>
                    <Button variant="filled">เลือก Fighter ของคุณ</Button>
                    <Button variant="white" icon="chevron-left">
                        Back
                    </Button>
                    <Button variant="outlined" icon={['fab', 'github']}>
                        ปุ่มมีเส้นขอบจ้า
                    </Button>
                </div>
                <Footer />
            </AppContainer>
        </Theme>
    )
}

export default App
