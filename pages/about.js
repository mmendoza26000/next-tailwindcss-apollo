import Head from 'next/head';
import Link from 'next/link';

const About = () => (
	<div className="bg-gray-100 h-screen flex flex-col items-center">
		<Head>
			<title>About</title>
		</Head>

		<Link href="/">
			<a className="text-blue-400 mt-32">Go Home</a>
		</Link>

		<div className="mt-8">
			About Page
		</div>
	</div>
);

export default About;