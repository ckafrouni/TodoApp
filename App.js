import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import Navbar from './components/ListView/Navbar';
import ListTitle from './components/ListView/ListTitle';
import ListTasks from './components/ListView/ListTasks';
import Toggle from './components/Toggle';
import AddTaskButton from './components/ListView/AddTaskButton';

// Every list has:
// - id
// - title
// - color
// - icon 
// - list of tasks
// - showCompletedToggle

// Every task has:
// - id
// - task
// - completed
// - favorite


export default function App() {
  const previousPage = 'Lists';
  const db = [
    {
      id: 1,
      title: 'Back To School',
      color: '#64B3B9',
      icon: '🎓',
      tasks: [
        { id: 1, task: 'Buy new backpack', completed: true, favorite: false },
        { id: 2, task: 'Pay first semester tuition', completed: false, favorite: true },
        { id: 3, task: 'Make friends/Don\'t be stupid..', completed: false, favorite: true },
      ],
      showCompletedToggle: true,
    },
  ];



  const [selectedListId, setSelectedListId] = useState(1);
  const [tasks, setTasks] = useState(db.find(list => list.id === selectedListId).tasks);
  const [showCompletedToggle, setShowCompletedToggle] = useState(db.find(list => list.id === selectedListId).showCompletedToggle);
  const [currentColor, setCurrentColor] = useState(db.find(list => list.id === selectedListId).color);
  const [currentIcon, setCurrentIcon] = useState(db.find(list => list.id === selectedListId).icon);
  const [currentTitle, setCurrentTitle] = useState(db.find(list => list.id === selectedListId).title);

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Navbar previousLabel={previousPage} color={currentColor} fontSize={16} />
        <ListTitle title={currentTitle} icon={currentIcon} color={currentColor} fontSize={32} />
        <ListTasks tasks={incompleteTasks} color={currentColor} />
        {/* The next section is only shown if there are completed tasks */}
        {completedTasks.length > 0 && (
          <Toggle color={currentColor} toggle={showCompletedToggle} label="Completed" setToggle={setShowCompletedToggle} />
        )}
        {/* The next section is only shown if there are completed tasks and the toggle is true */}
        {completedTasks.length > 0 && showCompletedToggle && (
          <ListTasks tasks={completedTasks} color={currentColor} />
        )}
      </View>

      <AddTaskButton color={currentColor} />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 12,

    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'column',
    gap: 8,
  },
});
