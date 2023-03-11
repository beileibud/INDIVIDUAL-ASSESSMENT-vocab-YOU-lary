import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocabForm'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="text">definition</label>
        <input type="text" class="form-control" id="definition" placeholder="definition" value="${obj.difinition || ''}" required>
      </div>
      <div class="form-group">
      <label for="languageTech">Language/Tech</label>
      <input type="text" class="form-control" id="languageTech" placeholder="Language/Tech" value="${obj.languageTech || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
