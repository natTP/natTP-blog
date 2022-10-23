import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faYoutube, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF, faYoutube, faInstagram, faGithub, fas)

function Home() {
    return <h1 className='text-gradient h-96'>Character Voice คืออะไร วิธีใช้ยกระดับสำนวนการเขียนให้ฟังดูมีชีวิต!</h1>
}

export default Home
