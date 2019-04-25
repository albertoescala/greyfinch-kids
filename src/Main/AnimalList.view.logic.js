import React, { useEffect, useReducer } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import AnimalListView from './AnimalList.view.js'
import Button from '../components/Button/Button.view.js'
import CardList from '../components/List/CardList.view.js'
import { searchGiphy } from '../services'

const limit = 20

const initialState = {
  config: {
    animals: [],
    offset: 1,
    hasMore: true
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setConfig':
      return { ...state, config: action.config };
    default:
      throw new Error('Unexpected action');
  }
};

const AnimalList = ({ match }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      const { data } = await searchGiphy(match.params.name, limit)
      if (Array.isArray(data)) {
        dispatch({
          type: 'setConfig',
          config: {
            ...state.config,
            animals: data.map(({ id, images }) => ({ id, avatar: images.fixed_height.url }))
          }
        })
      }
    }
    fetchData()
  }, [])

  const loadMoreAnimals = async () => {
    if (!state.config.hasMore) return null
    const { data, pagination } = await searchGiphy(match.params.name, limit, state.config.offset + limit)
    const newAnimals = data.map(({ id, images }) => ({ id, avatar: images.fixed_height.url }))

    dispatch({
      type:'setConfig',
      config: {
        offset: state.config.offset + limit,
        animals: [
          ...state.config.animals,
          ...newAnimals
        ],
        hasMore: state.config.offset >= pagination.total_count ? false : true
      }
    })
  }

  return (
    <AnimalListView>
      <Link to="/choose-animal">
        <Button text="Back" />
      </Link>
      <InfiniteScroll
        dataLength={state.config.animals.length}
        next={loadMoreAnimals}
        hasMore={state.config.hasMore}
        scrollThreshold={0.8}
      >
        <CardList from={state.config.animals} />
      </InfiniteScroll>
    </AnimalListView>
  )
}

export default AnimalList
