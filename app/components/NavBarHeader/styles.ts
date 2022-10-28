import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backButton: {
    marginRight: 20,
  },
  header: {
    backgroundColor: '#1F49D1',
    height: 200,
    paddingHorizontal: 24,
    paddingTop: 10,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  headerSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 34,
  },
});

export default styles;
