import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PokemonCard = ({ pokemon, index }) => {
  const pokeIndex = ('000' + (index + 1)).slice(-3)
  //that strange numbers is just for get the correct url for pokemon.com imgs
  //because have a diferent url/endpoint pattern (/0 => /01)
  //example: 000 + (0+1) = 00001.slice(-3) = 01
  //https://assets.pokemon.com/assets/cms2/img/pokedex/detail/01.png

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <a className='mx-4'>
        <div className='card'>
          <span className='card-index'>
            #{pokeIndex}
          </span>
          <div className='m-4'>
            <Image
              alt={pokemon.name}
              width={150}
              height={150}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
            />
          </div>

          <span className='card-title'>
            {pokemon.name}
          </span>
        </div>
      </a>
    </Link>
  )
}

export default PokemonCard
