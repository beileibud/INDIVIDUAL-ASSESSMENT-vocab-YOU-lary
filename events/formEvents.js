import { createVocab, getVocabs, updateVocab } from '../api/vocabsData';
import { showVocabs } from '../pages/Vocabs';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING vocab
    if (e.target.id.includes('submit-vocabForm')) {
      console.warn('CLICKED SUBMIT VOCAB', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        languageTech: document.querySelector('#languageTech').value,
        TimeSubmitted: document.querySelector('#TimeSubmitted').value,
        definition: document.querySelector('#definition').value,
        uid: user.uid,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        console.warn(patchPayload);

        updateVocab(patchPayload).then(() => {
          getVocabs().then(showVocabs);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE VOCAB', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        languageTech: document.querySelector('#languageTech').value,
        TimeSubmitted: document.querySelector('#TimeSubmitted').value,
        definition: document.querySelector('#definition').value,
        firebaseKey,
      };
      updateVocab(payload).then(() => {
        getVocabs().then(showVocabs);
      });
    }
  });
};

export default formEvents;
