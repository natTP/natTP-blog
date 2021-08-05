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

library.add(faFacebookF, faYoutube, faInstagram, faGithub, fas)

function App() {
    return (
        <Theme>
            <AppContainer>
                <GlobalStyles />
                <NavBar />
                <div class="example">
                    <Button variant="filled">เลือก Fighter ของคุณ</Button>
                    <Button variant="white" icon="chevron-left">
                        Back
                    </Button>
                    <Button variant="outlined" icon={['fab', 'github']}>
                        ปุ่มมีเส้นขอบจ้า
                    </Button>
                    <Button variant="filled">เลือก Fighter ของคุณ</Button>
                    <Button variant="white" icon="chevron-left">
                        Back
                    </Button>
                    <Button variant="outlined" icon={['fab', 'github']}>
                        ปุ่มมีเส้นขอบจ้า
                    </Button>
                    <Button variant="filled">เลือก Fighter ของคุณ</Button>
                    <Button variant="white" icon="chevron-left">
                        Back
                    </Button>
                    <Button variant="outlined" icon={['fab', 'github']}>
                        ปุ่มมีเส้นขอบจ้า
                    </Button>
                    <Button variant="filled">เลือก Fighter ของคุณ</Button>
                    <Button variant="white" icon="chevron-left">
                        Back
                    </Button>
                    <Button variant="outlined" icon={['fab', 'github']}>
                        ปุ่มมีเส้นขอบจ้า
                    </Button>
                    <Button variant="filled">เลือก Fighter ของคุณ</Button>
                    <Button variant="white" icon="chevron-left">
                        Back
                    </Button>
                    <Button variant="outlined" icon={['fab', 'github']}>
                        ปุ่มมีเส้นขอบจ้า
                    </Button>
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
