import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const friends = [
  { name: "Ben", age: 30},
  { name: "Magnus", age: 35},
  { name: "Kjell", age: 49},
  { name: "Joakim", age: 19},
  { name: "Kirsten", age: 22},
  { name: "Ingrid", age: 24},
  { name: "Tone", age: 24},
  { name: "Henok", age: 77}
]

const ListScreen = () => {
  return (
    <View>
      <FlatList 
      keyExtractor={(friend) => friend.name}
      data={friends} 
      renderItem={({item}) => {
        return <Text style={styles.textStyles}>{item.name} - Age {item.age}</Text>
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 20,
    marginVertical: 30,
    marginHorizontal: 10
  }
})

export default ListScreen

