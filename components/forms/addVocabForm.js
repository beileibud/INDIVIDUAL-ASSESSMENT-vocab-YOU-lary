import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (user, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocabForm'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Last Name</label>
        <input type="text" class="form-control" id="definition" placeholder="definition" value="${obj.difinition || ''}" required>
      </div>
      <div class="mb-3">
      <label for="language-select-input" class="form-label">Select language</label>
      <select id="language-select-input" class="form-select" aria-label="language select">
        <option selected>Select a language</option>
        <option value="JavaScript"}">JavaScript</option>
        <option value="HTML"}">HTML</option>
        <option value="CSS"}">CSS</option>
      </select>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
