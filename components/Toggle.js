import { StyleSheet, Text, View, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function CompletedToggle({ label, color, toggle, setToggle }) {
  const toggleCompleted = () => {
    setToggle(!toggle);
  };


  return (
    <Pressable style={styles.container} onPress={toggleCompleted}>
      <Entypo name={toggle ? 'chevron-down' : 'chevron-right'} size={18} color={color} />
      <Text style={[styles.text, { color }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});
