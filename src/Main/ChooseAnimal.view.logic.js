import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button.view.js'
import ChooseAnimalView from './ChooseAnimal.view.js'
import Card from '../Card/Card.view.js'
import { getRandomGiphyByTag } from '../services'
import { ANIMALS } from '../constants'

const ChooseAnimal = (props) => {
  const [ animals, setAnimals ] = useState(ANIMALS.map((animal => ({ name: animal, url: 'https://via.placeholder.com/400x200?text=Greyfinch' }))))

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      return props.history.push('/choose-name')
    }

    async function fetchData() {
      const animalsPromise = ANIMALS.map(animal => getRandomGiphyByTag(animal))
      const animalsResolved = await Promise.all(animalsPromise)
      setAnimals(animalsResolved.map((animal, index) => ({
        id: animal.id,
        name: ANIMALS[index],
        url: animal.images.fixed_height.url
      })))
    }
    fetchData()
  }, [])

  return (
    <ChooseAnimalView>
      <Link to="/users">
        <Button text="Recent users" />
      </Link>
      {animals.map(({ id, name, url }) => {
        return (
          <Card
            key={id}
            avatar={url}
            onClick={() => props.history.push(`/animal-list/${name}`)}
          />
        )
      })}
    </ChooseAnimalView>
  )
}

export default ChooseAnimal
