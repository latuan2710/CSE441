import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    flexWrap: 'wrap',
  },
  result: {
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  numberButton: {
    flexBasis: '20%',
    margin: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 100,
    borderColor: '#000',
    borderWidth: 1,
  },
  operatorButton: {
    flexBasis: '20%',
    margin: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 100,
    borderColor: '#000',
    borderWidth: 1,
  },
  equalButton: {
    backgroundColor: 'orange',
    borderWidth: 0,
  },
  clearButton: {
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 100,
    borderColor: '#000',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
});
