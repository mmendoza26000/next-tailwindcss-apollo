// import '../styles/globals.css'
import '../styles/tailwind.css'

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookSquare, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


library.add(faBars, faTwitter, faFacebookSquare, faPinterest, faArrowLeft);

function MyApp({ Component, pageProps }) {

  const apolloClient = useApollo(pageProps.initialApolloState);

  return(
    <ApolloProvider client={apolloClient} >
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
