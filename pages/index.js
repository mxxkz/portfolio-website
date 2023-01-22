import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import Head from 'next/head'
import Image from 'next/image'
import Profile from '../public/Profile.png'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Somying Phetdenlarp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-900 px-10 min-h-screen">
        <section>
          <nav className="flex justify-between gap-10 mb-5 py-10">
            <h1
              className="font-logo font-semibold text-3xl text-gray-300 cursor-pointer"
              onClick={() => router.push('./')}
            >
              Mooks
            </h1>
            <div className="flex gap-10">
              <div
                className="items-center px-4 py-2 text-xl font-mono font-semibold text-white border-none rounded-md bg-gradient-to-r from-cyan-500 to-orange-400 shadow-md shadow-cyan-500/30 cursor-pointer"
                onClick={() => router.push('./project')}
              >
                Project
              </div>
            </div>
          </nav>
          <div className="font-mono text-center p-10 flex flex-col justify-center gap-10 lg:gap10 lg:justify-between lg:flex-row ">
            <div className="mx-auto lg:mx-12 bg-gradient-to-b from-teal-500 to-orange-400 rounded-full w-80 h-80 relative overflow-hidden mb-10 md:h-96 md:w-96 md:mt-10 shadow-lg shadow-cyan-500/30">
              <Image
                src={Profile}
                alt=""
                className="flex justify-center mt-24"
              />
            </div>
            <div className="lg:mt-12 lg:px-12">
              <h2 className="text-5xl text-center font-bold py-2 text-teal-600 md:text-6xl animate-bounce">
                Somying Phetdenlarp
              </h2>
              <h3 className="text-2xl text-gray-300 font-semibold py-2 md:text-3xl">
                Software and Front-end Developer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-200  max-w-xl mx-auto md:text-xl">
                I am a junior computer engineering student at KMUTT interested
                in front-end web development, software engineering, and web
                design. Seeking an internship opportunity to explore practical
                knowledge, enhance my skills, and gain real-life work experience
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-200 ">
                <a href="https://github.com/mxxkz">
                  <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/somying-phetdenlarp-010980220/">
                  <AiFillLinkedin />
                </a>
                <a href="https://www.facebook.com/mook.sypdl/">
                  <AiFillFacebook />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
