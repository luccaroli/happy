import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },

  imageContainer: {
  },

  description: {
    alignItems: 'flex-start',
    width: '100%',
    fontSize: 30,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#0089a5',
    lineHeight: 30,
    padding: 12
  },

  footer: {
    width: '100%',
  },

  button: {
    backgroundColor: '#FFD666',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
    
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#8D734B',
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
  },

  buttoDisbled: {
    backgroundColor: '#f5f5f5',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIconDisabled: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonTextDisabled: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.2)',
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
  },

  inputIOS: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  }

})





export default styles