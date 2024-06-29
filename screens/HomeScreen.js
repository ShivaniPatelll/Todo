import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Swipeable } from 'react-native-gesture-handler';
import { ListItem, Button } from 'react-native-elements';
import { deleteTodo } from '../actions/todoActions';

const HomeScreen = ({ navigation }) => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const renderTodoItem = ({ item }) => (
    <Swipeable renderRightActions={() => (
      <Button
        title="Delete"
        onPress={() => handleDelete(item.id)}
        buttonStyle={styles.deleteButton}
      />
    )}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.text}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={item => item.id.toString()}
      />
      <Button
        title="Add Todo"
        onPress={() => navigation.navigate('AddTodo')}
        containerStyle={styles.addButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf:'center'
    // right: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
});

export default HomeScreen;
