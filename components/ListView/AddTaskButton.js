import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function AddTaskButton({ color }) {
  const addTask = () => {
    // TODO
    console.log('AddTask');
    alert('Add task');
  };


  return (
    <Pressable style={styles.taskContainer} onPress={addTask}>
      <View style={styles.leftGroup}>
        <Entypo name="plus" size={28} color={color} />
        <Text style={[styles.taskText, { color }]}>Add Task</Text>
      </View>
    </Pressable>
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
});
