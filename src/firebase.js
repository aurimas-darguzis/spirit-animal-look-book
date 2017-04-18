import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBvgzZizy7gOted_ZUdorE6-kzij-bg3tI',
  authDomain: 'social-animals-1ff0d.firebaseapp.com',
  databaseURL: 'https://social-animals-1ff0d.firebaseio.com',
  projectId: 'social-animals-1ff0d',
  storageBucket: 'social-animals-1ff0d.appspot.com',
  messagingSenderId: '428967595224'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
