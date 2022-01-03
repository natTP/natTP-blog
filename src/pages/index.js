import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faYoutube, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { AppContainer } from 'components/AppContainer'
import { Button } from 'components/Button'
import { NavBar } from 'components/NavBar'
import { Footer } from 'components/Footer'
import { Body, H1 } from 'styles/TextStyles'

library.add(faFacebookF, faYoutube, faInstagram, faGithub, fas)

// TODO : Move appcontainer to layout component
// TODO : customize todo-tree colors

function Home() {
    return (
        <AppContainer>
            <NavBar />
            <div class="example">
                <H1>ตัวอย่าง Example</H1>
                <Body>
                    เลือก Fighter ของ
                    <i>คุณ</i>
                    ได้เลย
                </Body>
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