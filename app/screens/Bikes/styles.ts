import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  listContainer: {
    position: 'absolute',
    top: 70,
    height: '90%',
    width: '100%',
  },
  listItemSeparator: {
    height: 14,
  },
  header: {
    backgroundColor: '#1F49D1',
    height: 200,
    paddingHorizontal: 24,
    paddingTop: 10,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  headerText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 34,
  },
});

export default styles;
