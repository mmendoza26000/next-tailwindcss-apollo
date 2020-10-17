import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="w-full relative flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span
              className="text-normal font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
            >
              Gen Template
            </span>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              
			  <FontAwesomeIcon icon={'bars'} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <FontAwesomeIcon className="text-lg leading-lg text-white opacity-75" icon={['fab', 'facebook-square']} /><span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
				  <FontAwesomeIcon className="text-lg leading-lg text-white opacity-75" icon={['fab', 'twitter']} />
				  <span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
					<FontAwesomeIcon className="text-lg leading-lg text-white opacity-75" icon={['fab', 'pinterest']} /><span className="ml-2">Pin</span>
                </a>
              </li>
              <li className="nav-item">
				<Link href="/about">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
					<span className="ml-2">About</span>
                </a>
				</Link>  
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}