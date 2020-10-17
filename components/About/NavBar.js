import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

export default function Navbar({ fixed }) {

  const router = useRouter();

  return (
    <>
      <nav className="w-full relative flex flex-wrap items-center justify-between px-1 py-2 navbar-expand-lg bg-pink-500 mb-3">
        <div className="container  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-start items-center lg:w-auto lg:static lg:block lg:justify-start">

          <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
              type="button"
              onClick={() => router.push('/')}
          >    
          <FontAwesomeIcon className="text-lg leading-lg text-white" icon={'arrow-left'} />
          </button>

            <span
              className="text-normal font-bold leading-relaxed inline-block px-1  py-2 whitespace-no-wrap uppercase text-white"
              href="#pablo"
            >
              About this app
            </span>
 
          </div>
        </div>
      </nav>
    </>
  );
}