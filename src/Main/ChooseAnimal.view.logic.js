import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button.view.js'
import ChooseAnimalView from './ChooseAnimal.view.js'
import CardList from '../components/List/CardList.view.js'
import { getRandomGiphyByTag } from '../services'
import { ANIMALS } from '../constants'

const ChooseAnimal = (props) => {
  const [ animals, setAnimals ] = useState(ANIMALS.map(((animal, index) => ({
    id: index,
    avatar: 'https://via.placeholder.com/400x200?text=Greyfinch'
  }))))

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      return props.history.push('/choose-name')
    }

    async function fetchData() {
      const animalsPromise = ANIMALS.map(animal => getRandomGiphyByTag(animal))
      const animalsResolved = await Promise.all(animalsPromise)
      setAnimals(animalsResolved.map((animal, index) => ({
        id: animal.id,
        avatar: animal.images.fixed_height.url,
        onClick: () => props.history.push(`/animal-list/${ANIMALS[index]}`),
      })))
    }
    fetchData()
  }, [])

  return (
    <ChooseAnimalView>
      <Link to="/users">
        <Button text="Recent users" />
      </Link>
      <CardList from={animals} />
    </ChooseAnimalView>
  )
}

export default ChooseAnimal
