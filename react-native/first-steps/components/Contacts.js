import React from 'react'
import faker from 'faker'
import { View, SectionList, Text } from 'react-native'

const contactsMock = [
  { // section
    title: 'A',
    data: [
      { // item
        id: faker.datatype.uuid(),
        name: 'Ana'
      }
    ]
  },
  {
    title: 'M',
    data: [
      {
        id: faker.datatype.uuid(),
        name: 'María'
      },
      {
        id: faker.datatype.uuid(),
        name: 'Martin'
      }
    ]
  }
]

function Contacts() {
  return (
    <SectionList
      sections={contactsMock}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.name}</Text>
          </View>
        )
      }}
      renderSectionHeader={({ section }) => {
        return (
          <Text>{section.title}</Text>
        )
      }}
      renderSectionFooter={({ section }) => {
        return (
          <Text>------------</Text>
        )
      }}
      keyExtractor={item => item.id}
    />
  )
}

export default Contacts
