import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39CC83',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  image: {
  },

  title: {
    fontFamily: 'Nunito_800ExtraBold',
    color: '#fff',
    fontSize: 40,
    lineHeight: 45,
    textAlign: 'center',
    marginTop: 32,
  },
  description: {
    fontFamily: 'Nunito_600SemiBold',
    fontStyle: 'normal',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    color: '#fff',
    marginTop: 18,
  },
  button: {
    width: 120,
    height: 56,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19C06D',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 15,
  },
})

export default styles