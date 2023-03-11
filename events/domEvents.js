import {
  deleteSingleVocb, filterCSS, filterHTML, filterJAVA, getVocabs, getSingleVocab
} from '../api/vocabsData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocabs } from '../pages/Vocabs';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // FIXME: ADD CLICK EVENT FOR DELETING voacb card
    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE VOCAB', e.target.id);
        console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');
        console.warn('delete', firebaseKey);

        deleteSingleVocb(firebaseKey).then(() => {
          getVocabs(user.uid).then(showVocabs);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('update-vocab')) {
      console.warn('update/edit vocab', e.target.id);
      if (e.target.id.split('--')) {
        const [, firebaseKey] = e.target.id.split('--');

        getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(user.uid, vocabObj));
      }
    }

    // Filter buttons
    if (e.target.id.includes('html-btn')) {
      document.querySelector('#html-btn').addEventListener('click', () => {
        console.warn('filterHTML', e.target.id);
        filterHTML(user.uid).then(showVocabs);
      });
    }

    if (e.target.id.includes('css-btn')) {
      document.querySelector('#css-btn').addEventListener('click', () => {
        console.warn('filterHTML', e.target.id);
        filterCSS(user.uid).then(showVocabs);
      });
    }

    if (e.target.id.includes('java-btn')) {
      document.querySelector('#java-btn').addEventListener('click', () => {
        console.warn('filterHTML', e.target.id);
        filterJAVA(user.uid).then(showVocabs);
      });
    }
  });
};

export default domEvents;
