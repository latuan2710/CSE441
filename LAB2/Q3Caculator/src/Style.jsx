import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    rowGap: 5,
  },
  numberContainer: {
    flexBasis: '75%',
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'wrap-reverse',
    gap: 5,
  },
  operatorContainer: {
    flexBasis: '25%',
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'wrap',
    gap: 5,
    paddingHorizontal: 5,
  },
  result: {
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  numberButton: {
    flex: 1,
    flexBasis: '30%',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
  },
  operatorButton: {
    flexBasis: '100%',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
  },
  equalButton: {
    backgroundColor: 'orange',
    borderWidth: 0,
    flexBasis: '100%',
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
