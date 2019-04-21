import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { allUsers } from '../graphql/queries'
import { Link } from 'react-router-dom'
import UserListView from './UserList.view.js'
import Button from '../Button/Button.view.js'
import TextList from '../List/TextList.view.js'

const UserList = () => {
  return (
    <UserListView>
      <Query query={allUsers}>
        {({ loading, error, data, refetch }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          const users = data.allUsers.map(({ id, name, age }) => ({ id, name, age }))
          return (
            <Fragment>
              <TextList from={users} />
              <Button text="Refresh" onClick={() => refetch()} />
            </Fragment>
          );
        }}
      </Query>
      <Link to="/choose-animal">
        <Button text="back" />
      </Link>
    </UserListView>
  )
}

export default UserList
