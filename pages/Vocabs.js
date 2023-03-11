import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabs = () => {
  const domString = '<h1>No Vocabulary</h1>';
  renderToDOM('#store', domString);
};

const showVocabs = (array) => {
  clearDom();

  const vocabFilter = `
  <div class="filter">
      <div class="filter-list">
        <button type="button" class="btn btn-outline-primary" id="html-btn">HTML</button>
        <button type="button" class="btn btn-outline-success" id="css-btn">CSS</button>
        <button type="button" class="btn btn-outline-warning" id="java-btn">JavaScript</button>
      </div>
  </div>`;
  renderToDOM('#add-button', vocabFilter);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <h5 class="card-header">${item.languageTech}</h5>
      <div class="card-body">
        <h5 class="card-title"> ${item.title}</h5>
        <p class="card-text">${item.TimeSubmitted}</p>
        <p class="card-text">${item.definition}</p>
        <hr>
        <i type="button" class="btn btn-outline-warning" id="update-vocab--${item.firebaseKey}">Edit</i>
        <i type="button" class="btn btn-outline-danger" id="delete-vocab-btn--${item.firebaseKey}">Delete</i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showVocabs, emptyVocabs };
