import Head from 'next/head';


import NavBar from '../components/About/NavBar';

const About = () => (
	<div className="bg-gray-100 h-screen flex flex-col items-center">
		<Head>
			<title>About</title>
		</Head>

		<NavBar />

		<div className="mt-8">
			About Page
		</div>
	</div>
);

export default About;