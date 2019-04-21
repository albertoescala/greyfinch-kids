import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import AnimalListView from './AnimalList.view.js'
import Button from '../components/Button/Button.view.js'
import CardList from '../components/List/CardList.view.js'
import { searchGiphy } from '../services'

const limit = 20

const AnimalList = (props) => {
  const [ animals, setAnimals ] = useState([])
  const [ offset, setOffset ] = useState(1)
  const [ hasMore, setHasMore ] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const { data } = await searchGiphy(props.match.params.name, limit)
      if (Array.isArray(data)) {
        setAnimals(data.map(({ id, images }) => ({ id, avatar: images.fixed_height.url })))
      }
    }
    fetchData()
  }, [])

  const loadMoreAnimals = async () => {
    if (!hasMore) return null
    setOffset(offset + limit)
  }

  useEffect(() => {
    async function loadMore() {
      const { data, pagination } = await searchGiphy(props.match.params.name, limit, offset)
      const newAnimals = data.map(({ id, images }) => ({ id, avatar: images.fixed_height.url }))
      setAnimals([
        ...animals,
        ...newAnimals
      ])
      if (offset >= pagination.total_count) {
        setHasMore(false)
      }
    }
    loadMore()
  }, [ offset ])

  return (
    <AnimalListView>
      <Link to="/choose-animal">
        <Button text="Back" />
      </Link>
      <InfiniteScroll
        dataLength={animals.length}
        next={loadMoreAnimals}
        hasMore={hasMore}
        scrollThreshold={0.8}
      >
        <CardList from={animals} />
      </InfiniteScroll>
    </AnimalListView>
  )
}

export default AnimalList
