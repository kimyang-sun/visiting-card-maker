import { firebaseDatabase } from './firebase';

class CardRepository {
  syncCards(userId, onUpdate) {
    // 해당 경로 데이터베이스에 value가 있다면 onUpdate(value)한다.
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    ref.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off(); // unmount 될때 중지시켜주기 위함
  }

  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
