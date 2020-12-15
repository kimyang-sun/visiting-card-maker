import {
  firebaseAuth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    const unsubscribe = firebaseAuth.onAuthStateChanged(user =>
      onUserChanged(user)
    );
    return () => unsubscribe(); // 이것도 card repository와 마찬가지로 unmount될때 onAuthStateChanged를 중지시켜줘야한다.
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Facebook':
        return facebookProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider ${providerName}`);
    }
  }
}

export default AuthService;
