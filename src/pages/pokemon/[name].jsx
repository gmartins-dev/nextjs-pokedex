import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

const PokemonDetails = ({ pokemon }) => {
  // console.log(pokemon)
  const pokeIndex = ('000' + pokemon.id).slice(-3)
  const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

  const renderTypes = () =>
    pokemon.types.map((type) => (
      <li key={type.slot} className='pokemon-details-name'>
        {type.type.name}
      </li>
    ))

  const renderStats = () =>
    pokemon.stats.map((stat, index) => (
      <div key={index} className='pokemon-details-stats'>
        <div
          className='pokemon-details-stats-bar'
          style={{ width: `${stat.base_stat}%` }}
        >
          {stat.stat.name}: {stat.base_stat}
        </div>
      </div>
    ))

  return (
    <Layout title={pokemonName}>
      <section id='pokemon-details'>
        <div
          className='pokemon-details-poster'
        >
          <Image
            alt={pokemon.name}
            width={400}
            height={400}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
          />
        </div>

        <section
          className='pokemon-details-attributes'
        >
          <ul className='pokemon-details-types'>
            {renderTypes()}
          </ul>
          <div>{renderStats()}</div>
        </section>
      </section>

      <footer className='pokemon-details-footer'>
        <button className='pokemon-details-button'>
          <Link href='/'>◀️BACK</Link>
        </button>
      </footer>
      
    </Layout>
  )
}
export default PokemonDetails

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.query.name}`
  )
  const pokemon = await response.json()

  return {
    props: {
      pokemon,
    },
  }
}

//https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
//https://nextjs.org/docs/routing/dynamic-routes
