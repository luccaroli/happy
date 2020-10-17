import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    top: -23,
  },

  title: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 48,
    lineHeight: 48,
    top: -9,
    right: 46,
    color: '#0089A5',
  },

  description: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 20,
    lineHeight: 30,
    right: 36,
    color: '#5C8599'
  },

  footer: { 
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    right: 24,
    bottom: 32,

  },

  nextPageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#D1EDF2',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default styles