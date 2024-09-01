import { StyleSheet, Text, View } from 'react-native';

export default function ListTitle({ title, icon, color, fontSize }) {

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color, fontSize }]}>{icon}</Text>
      <Text style={[styles.text, { color, fontSize }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    color: '#E4E4E4',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
