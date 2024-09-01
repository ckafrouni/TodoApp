import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

// Tasks look like this:
// const tasks = [
//   { id: 1, task: 'Buy new backpack', completed: true, favorite: false },
//   { id: 2, task: 'Pay first semester tuition', completed: false, favorite: true },
//   { id: 3, task: 'Make friends/Don\'t be stupid..', completed: false, favorite: true },
// ];

export default function ListTasks({ tasks, color }) {
  const openTask = () => {
    // TODO
    console.log('Open task');
    alert('Open task');
  };

  const toggleFavorite = () => {
    // TODO
    console.log('Toggle favorite');
    alert('Toggle favorite');
  }

  const toggleCompleted = () => {
    // TODO
    console.log('Toggle completed');
    alert('Toggle completed');
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={task => task.id.toString()}
      ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
      renderItem={({ item }) => (
        <Pressable style={styles.taskContainer} onPress={openTask}>
          <View style={styles.leftGroup}>
            <Pressable onPress={toggleCompleted}>
              <AntDesign name={item.completed ? 'checkcircle' : 'checkcircleo'} size={28} color={item.completed ? color : '#707070'} />
            </Pressable>
            <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>{item.task}</Text>
          </View>
          <Pressable onPress={toggleFavorite}>
            <Entypo name={item.favorite ? 'star' : 'star-outlined'} size={28} color={item.favorite ? color : '#707070'} />
          </Pressable>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#222222',
    borderRadius: 8,
  },
  taskText: {
    color: '#E4E4E4',
    fontSize: 16,
  },
  taskTextCompleted: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});
