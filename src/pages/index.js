import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faYoutube, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF, faYoutube, faInstagram, faGithub, fas)

function Home() {
    return (
        <div className='font-loopless font-bold text-4xl text-blue-600'>
            Character Voice คืออะไร วิธีใช้ยกระดับสำนวนการเขียนให้ฟังดูมีชีวิต!
        </div>
    )
}

export default Home
