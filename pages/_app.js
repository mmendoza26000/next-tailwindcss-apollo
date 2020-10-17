// import '../styles/globals.css'
import '../styles/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookSquare, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


library.add(faBars, faTwitter, faFacebookSquare, faPinterest, faArrowLeft);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
