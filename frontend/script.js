const API_ENDPOINT = 'http://localhost:5000/api';
const MATERIAL_CATEGORIES = ['floor', 'walls', 'ceiling', 'windows'];

window.onload = () => {
  $('[data-action=add-room]').on('click', () => {
    const $roomForm = $('#room-form');
    const $roomEntry = $roomForm.find('.room-entry').last();

    $roomForm.append($roomEntry.html());
  });

  $('[data-action=calculate]').on('click', () => {

  });

  MATERIAL_CATEGORIES.forEach(populateMaterialsFor);
};

function populateMaterialsFor(materialCategory) {
  if (!MATERIAL_CATEGORIES.some(validCategory => validCategory !== materialCategory)) {
    console.error('Unsupported material category');
  }

  return getMaterialsFor(materialCategory)
    .then(materials => {
      materials.forEach(materialName => {
        addMaterialToList(materialCategory, materialName);
      });
    });
}

function getMaterialsFor(category) {
  return fetch(`${API_ENDPOINT}/materials?category=${category}`)
    .then(response => response.json())
    .then(json => {
      console.log('[getMaterialsFor][json]', json);
      return json;
    });
}

function addMaterialToList(materialCategory, materialName) {
  $(`#${materialCategory}-material-select`)
    .append($('<option>').text(materialName));
}
