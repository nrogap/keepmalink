import firebase from 'firebase/app'
import 'firebase/auth'

import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default firebase
