import React, { useState, useEffect } from 'react'
import ChooseNameView from './ChooseName.view.js'
import Card from '../Card/Card.view.js'
import Button from '../Button/Button.view.js'
import { searchGiphy } from '../services'
import { pickRandomly } from '../utils/common'
import { ANIMALS } from '../constants'
import {
  TextCapture,
  NumberCapture
} from '../Captures'

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
      <Card avatar={animal} />
      <TextCapture placeholder="Your nickname" />
      <NumberCapture placeholder="Your age" />
      <Button text="Send" />
    </ChooseNameView>
  )
}

export default ChooseName
