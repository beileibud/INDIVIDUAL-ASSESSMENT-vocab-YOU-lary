import {
  deleteSingleVocb, filterCSS, filterHTML, filterJAVA, getVocabs, getSingleVocab
} from '../api/vocabsData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocabs } from '../pages/Vocabs';
// import addVocabForm from '../components/forms/addVocabForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // FIXME: ADD CLICK EVENT FOR DELETING voacb card
    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE VOCAB', e.target.id);
        console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleVocb(firebaseKey).then(() => {
          getVocabs(user.uid).then(showVocabs);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('update-vocab')) {
      console.warn('update vocab');
      if (e.target.id.split('--')) {
        const [, firebaseKey] = e.target.id.split('--');

        getSingleVocab(firebaseKey).then((entryObj) => addVocabForm(user.uid, entryObj));
      }
    }

    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
    // Filter on Category
    document.querySelector('#html-btn').addEventListener('click', () => {
      console.warn('filterHTML', e.target.id);
      filterHTML().then(showVocabs);
    });

    document.querySelector('#css-btn').addEventListener('click', () => {
      filterCSS().then(showVocabs);
    });

    document.querySelector('#java-btn').addEventListener('click', () => {
      filterJAVA().then(showVocabs);
    });
  });
};

export default domEvents;
