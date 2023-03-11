import { getVocabs } from '../api/vocabsData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocabs } from '../pages/Vocabs';
import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: ALL vocab
  document.querySelector('#all-vocabs').addEventListener('click', () => {
    console.warn('CLICKED ALL vocabs');
    getVocabs().then(showVocabs);
  });

  // add new vocab on navbar
  document.querySelector('#add-vocab').addEventListener('click', () => {
    console.warn('CLICKED VOCAB');
    addVocabForm();
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
