import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Pokedex - First Generation Pokemons List' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='header'>
        <h1 className='header-title'>
          <span className='pr-2'>
            <Image
              alt={title}
              width={47}
              height={47}
              src={`/assets/imgs/pokeball.png`}
            />
          </span>
          {title}
        </h1>
      </header>

      <main className='main'>{children}</main>

      <footer className='footer'>
        <a
          className='flex flex-col'
          href='#'
          target='_blank'
          rel='noopener noreferrer'
        ></a>
      </footer>
    </>
  )
}

export default Layout
