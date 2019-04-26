import React, { useState, useEffect } from 'react'
import { Mutation } from 'react-apollo'
import ChooseNameView from './ChooseName.view.js'
import Card from '../components/Card/Card.view.js'
import Button from '../components/Button/Button.view.js'
import { searchGiphy } from '../services'
import { pickRandomly } from '../utils/common'
import { ANIMALS } from '../constants'
import { createUser } from '../graphql/mutations'
import { TextCapture, NumberCapture } from '../components/Captures'

const ChooseName = props => {
  const [animal, setAnimal] = useState(
    'https://via.placeholder.com/400x200?text=Greyfinch'
  )
  const [nickname, setNickname] = useState('')
  const [age, setAge] = useState('')

  useEffect(() => {
    if (localStorage.getItem('user')) {
      return props.history.push('/choose-animal')
    }
    async function fetchData() {
      const { data } = await searchGiphy(pickRandomly(ANIMALS))
      if (Array.isArray(data)) {
        setAnimal(data[0].images.fixed_height.url)
      }
    }
    fetchData()
  }, [])

  return (
    <Mutation mutation={createUser}>
      {(createUser, { data, loading }) => (
        <ChooseNameView
          avatar={animal}
          nickname={nickname}
          onChangeNickname={e => setNickname(e.target.value)}
          age={age}
          onChangeAge={e => setAge(e.target.value)}
          onSubmit={async e => {
            e.preventDefault()
            const { data } = await createUser({
              variables: { name: nickname, age: age, score: 0 },
            })
            if (data.createUser) {
              localStorage.setItem('user', JSON.stringify(data.createUser))
              props.history.push('/choose-animal')
            }
          }}
        />
      )}
    </Mutation>
  )
}

export default ChooseName
