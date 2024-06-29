import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const AddTodoScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
    };
    dispatch(addTodo(newTodo));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Todo"
        value={todoText}
        onChangeText={text => setTodoText(text)}
        style={styles.input}
      />
      <Button
        title="Add Todo"
        onPress={handleAddTodo}
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
  input: {
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default AddTodoScreen;
