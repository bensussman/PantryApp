import { StyleSheet, Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

export const swipeStyles = StyleSheet.create({
  leftButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    borderRadius: 7,
    paddingHorizontal: 18,
    paddingVertical: 23,
    backgroundColor: '#50f442',
    position: 'absolute',
    elevation: 3,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    marginHorizontal: 5,
    marginTop: 30,
    elevation: 3,
  },
  textContainer: {
    elevation: 3,
    zIndex: 2,
    height: 95,
    padding: 20,
    shadowRadius: 2,
    borderRadius: 7,
    shadowOpacity: 0.1,
    paddingVertical: 35,
    shadowColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#CFD8DC',
    width: SCREEN_WIDTH / 1.03,
    shadowOffset: { width: 9, height: 9 },
  },
  textStyle: {
    fontSize: 17,
  },
  rightButtonContainer: {
    position: 'absolute',
    left: SCREEN_WIDTH / 1.24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    borderRadius: 7,
    paddingHorizontal: 18,
    paddingVertical: 23,
    elevation: 3,
    backgroundColor: '#D50000',
    zIndex: 1,
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 5,
    marginLeft: -20,
  },
  delete: {
    marginRight: 20,
    marginLeft: 30,
    color: 'white',
  },
  title: {
    fontSize: 14,
  },
});
