import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Navbar({ previousLabel, color, fontSize }) {
  const previousPage = () => {
    // TODO
    console.log('Previous page');
    alert('Previous page');
  }

  const openListOptions = () => {
    // TODO
    console.log('Open list options');
    alert('Open list options');
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.navGroup} onPress={previousPage}>
        <FontAwesome5 name='chevron-left' size={fontSize + 4} color={color} />
        <Text style={[styles.text, { color, fontSize }]}>{previousLabel}</Text>
      </Pressable>
      <View style={styles.navGroup}>
        <Pressable onPress={openListOptions}>
          <Entypo name='dots-three-horizontal' size={fontSize + 4} color={color} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    color: '#E4E4E4',
    fontSize: 16,
  },
});
