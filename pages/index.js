import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import NavBar from '../components/Home/NavBar';

import { useQuery, useSubscription } from '@apollo/client';

import { TEST_QUERY, TEST_SUBSCRIPTION } from '../graphql/Test';
import { initializeApollo } from '../lib/apolloClient';

export async function getServerSideProps(context){

  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({ query: TEST_QUERY });

  console.log('apollo data', data.test[0]);

  return{
    props: { testData: data.test[0] }
  }
}


export default function Home({testData}) {


  const { data, error, loading } = useSubscription(TEST_SUBSCRIPTION);

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error: {JSON.stringify(error)}</div>
  }

  console.log("Test table:",data.test);

  return (
    <div className="bg-gray-100  flex flex-col items-center">
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

      <div id="card" className="mt-8 w-2/3  border bg-white rounded-lg">
        <h1 className="font-bold text-lg text-gray-700 px-4 py-2">Info from getServerSideProps</h1>
        <p className=" text-gray-600 px-4 py-4">
          This info comes from the first record of "test" table.
        </p>
        <ul className="flex justify-center pb-4">
          <li>{testData.sometext}</li>
        </ul>
      </div>

      <div id="card" className="mt-8 w-2/3  border bg-white rounded-lg">
        <h1 className="font-bold text-lg text-gray-700 px-4 py-2">Fetching client side</h1>
        <p className=" text-gray-600 px-4 py-4">
          This info comes from "test" table. Using Apollo client side WITH subscriptions.
        </p>
        <ol className="text-gray-600 flex justify-center pb-4 list-decimal items-center flex-col">
          { data.test.map( testData => <li key={testData.id}>{testData.sometext}</li> )}
        </ol>
      </div>

    <Link href="/about">
      <a className="text-blue-400 my-4">About page</a>
    </Link>

    </div>

    
  )
}
