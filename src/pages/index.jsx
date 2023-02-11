import React, { useState } from 'react'
import Layout from '../components/Layout'
import PokemonCard from '../components/PokemonCard'

export default function Home({ apiData }) {
  const [pokemon, setPokemon] = useState(apiData)
  const [offset, setOffset] = useState(0)

  const fetchPokemon = async (url, next) => {
    const response = await fetch(url)
    const nextPokemon = await response.json()

    setOffset(next ? offset + 20 : offset)
    setPokemon(nextPokemon)
  }

  return (
    <Layout title={'Pokédex'}>
      <section className='pokemon-gallery'>
        {pokemon.results.map((pokemonName, index) =>
          index + offset <= 150 ? (
            <PokemonCard
              key={index}
              pokemon={pokemonName}
              index={index + offset}
            />
          ) : (
            (pokemon.next = false)
          )
        )}
      </section>

      <nav className='pagination'>
        <button
          className='pagination-button'
          disabled={!pokemon.previous}
          onClick={() => fetchPokemon(pokemon.previous, false)}
        >
          {' '}
          ◀️Prev
        </button>
        <button
          disabled={!pokemon.next}
          className='pagination-button'
          onClick={() => fetchPokemon(pokemon.next, true)}
        >
          Next▶️
        </button>
      </nav>
    </Layout>
  )
}

// SSG - Static Site Generation
// The data required to render the page is available at build time ahead of a user’s request
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props

export async function getStaticProps(context) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const apiData = await response.json()

  return {
    props: {
      apiData,
    },
  }
}
