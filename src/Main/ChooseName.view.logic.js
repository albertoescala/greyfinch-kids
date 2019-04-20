import React, { useState, useEffect } from 'react'
import ChooseNameView from './ChooseName.view.js'
import CardView from '../Card/Card.view.js'
import { searchGiphy } from '../services'
import {
  pickRandomly
} from '../utils/common'
import {
  ANIMALS
} from '../constants'

const ChooseName = () => {
  let [ animal, setAnimal ] = useState('https://via.placeholder.com/400x200?text=Greyfinch')
  useEffect(() => {
    async function fetchData() {
      const data = await searchGiphy(pickRandomly(ANIMALS))
      if (Array.isArray(data)) {
        setAnimal(data[0].images.fixed_height.url)
      }
    }
    fetchData()
  }, [])
  return (
    <ChooseNameView>
      <CardView avatar={animal} />
    </ChooseNameView>
  )
}

export default ChooseName
