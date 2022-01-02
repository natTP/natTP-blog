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

// TODO : Move global styles to layout component later
// TODO : customize todo-tree colors
// FIXME : gatsby develop renders blank page

function Home() {
    return (
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
    )
}

export default Home
