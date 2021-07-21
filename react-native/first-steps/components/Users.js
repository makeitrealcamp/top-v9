import React from 'react'
import faker from 'faker'
import { View, FlatList, Text } from 'react-native'

const usersMock = Array.from({ length: 50 }, () => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
  }
})

function Users() {
  // !!users && users.length > 0 && users.map()
  return (
    <View>
      <FlatList
        data={usersMock}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name} {item.lastname}</Text>
            </View>
          )
        }}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  )
}

export default Users
