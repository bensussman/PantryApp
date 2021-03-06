import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  activity: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 204, 206, 0.6)',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  bottomMargin: {
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ff5c61',
    borderRadius: 50,
    // opacity: 1,
    padding: 12,
  },
  buttonLogin: {
    borderColor: 'white',
    // borderWidth: 2,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 14,
  },
  buttonLoginText: {
    fontWeight: '900',
  },
  buttonSignup: {
    backgroundColor: 'rgb(255, 92, 97)',
    borderColor: 'white',
    marginHorizontal: 10,
    // margin: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  checkBox: {
    marginLeft: 16,
    marginRight: 6,
    marginVertical: 10,
  },
  container: {
    // backgroundColor: '#ff5c61',
    flex: 1,
  },
  forgotPassword: {
    alignSelf: 'center',
    color: '#000',
    elevation: 4,
    fontSize: 16,
    marginTop: 10,
  },
  form: {
    width: '100%',
  },
  formInputContainer: {
    // backgroundColor: 'rgba(255, 238, 238, .88)',
    borderRadius: 7,
    marginBottom: 16,
    // marginHorizontal: 5,
    paddingHorizontal: 12,
    paddingVertical: 40,
  },
  header: {
    alignSelf: 'center',
    // color: '#ff5c61',
    color: '#ff5c61',
    fontFamily: 'Vibur',
    fontSize: 70,
    fontWeight: '900',
    marginBottom: 30,
  },
  image: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    width: '100%',
  },
  input: {
    borderBottomColor: '#777',
    borderBottomWidth: 1,
    color: '#e60008',
    fontSize: 16,
    marginHorizontal: 16,
    marginTop: 20,
    paddingVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, .6)',
    textShadowOffset: { width: -0.25, height: 0.5 },
    textShadowRadius: 1,
  },
  shadowButton: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.22,
  },
  shadowText: {
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 2.62,
  },
});
