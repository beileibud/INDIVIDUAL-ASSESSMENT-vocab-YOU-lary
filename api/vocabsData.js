import client from '../utils/client';

const endpoint = client.databaseURL;

// FIXME:  GET ALL VOCABLARY
const getVocabs = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json`, {
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

const getSingleVocab = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json`, {
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
const filterHTML = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json?orderBy="sale"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const filterCSS = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json?orderBy="sale"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const filterJAVA = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json?orderBy="sale"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
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
