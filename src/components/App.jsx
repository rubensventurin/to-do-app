import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import AddForm from './AddForm/AddFormContainer';
import { styles } from './AppStyles';
import Item from './Item/ItemContainer';

const App = (props) => {
  const todoTasks = props.todos.filter((item) => item.state === 'todo');
  const completedTasks = props.todos.filter((item) => item.state === 'done');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.pageTitle}>To Do App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>A Fazer 📝</Text>
        {todoTasks.length !== 0 ? (
          <FlatList
            data={todoTasks}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyListText}>Nenhuma tarefa adicionada</Text>
        )}
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
      <Text style={styles.listTitle}>Concluído ✅</Text>
        {completedTasks.length !== 0 ? (
          <FlatList
            data={completedTasks}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyListText}>Nenhuma tarefa concluída</Text>
        )}
      </View>
      <AddForm />
    </SafeAreaView>
  );
};

export default App;
