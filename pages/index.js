import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import NavBar from '../components/Home/NavBar';

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center">
      <Head>
        <title>Gen template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div id="card" className="mt-16 w-2/3  border bg-white rounded-lg">
        <h1 className="font-bold text-lg text-gray-700 px-4 py-2">TailwindCSS is Working!</h1>
        <p className=" text-gray-600 px-4 py-4">
          If you see this card centered horizontally, it means TailwindCSS is working properly.
        </p>
      </div>

    <Link href="/about">
      <a className="text-blue-400">About page</a>
    </Link>

    </div>

    
  )
}
