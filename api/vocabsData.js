import client from '../utils/client';

const endpoint = client.databaseURL;

// FIXME:  GET ALL VOCABLARY
const getVocabs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// FIXME: CREATE Vocabs
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: DELETE VOCAB
const deleteSingleVocb = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: UPDATE VOCAB
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
// TODO: FILTER Language Tech
const filterHTML = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filterLanguage = Object.values(data).filter((item) => item.languageTech.toLowerCase() === 'html');
      resolve(filterLanguage);
    })
    .catch(reject);
});

const filterCSS = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filterLanguage = Object.values(data).filter((item) => item.languageTech.toLowerCase() === 'css');
      resolve(filterLanguage);
    })
    .catch(reject);
});

const filterJAVA = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filterLanguage = Object.values(data).filter((item) => item.languageTech.toLowerCase() === 'javascript');
      resolve(filterLanguage);
    })
    .catch(reject);
});

export {
  getVocabs,
  getSingleVocab,
  createVocab,
  deleteSingleVocb,
  updateVocab,
  filterCSS,
  filterHTML,
  filterJAVA
};
