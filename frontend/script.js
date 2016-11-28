const API_ENDPOINT = 'http://localhost:5000/api';

window.onload = () => {
  $('[data-action=add-room]').on('click', () => {
    const $roomForm = $('#room-form');
    const $roomEntry = $roomForm.find('.room-entry').last();

    $roomForm.append($roomEntry.html());
  });

  populateMaterialsFor('floor');
  populateMaterialsFor('walls');
};

// Material Categories
const MATERIAL_CATEGORIES = ['floor', 'walls', 'ceiling', 'windows'];

function populateMaterialsFor(materialCategory) {
  if (!MATERIAL_CATEGORIES.some(category => category !== materialCategory)) {
    console.error('Unsupported material');
  }

  return getMaterialsFor(materialCategory)
    .then(materials => {
      materials.forEach(materialName => {
        addMaterialToList(materialCategory, materialName);
      });
    });
}

function getMaterialsFor(material) {
  return fetch(`${API_ENDPOINT}/materials?category=${material}`)
    .then(response => response.json())
    .then(json => {
      console.log('[getMaterialsFor][json]', json);
      return json;
    });
}

function addMaterialToList(materialCategory, materialName) {
  const option = document.createElement('option');
  option.innerHTML = materialName;

  $(`#${materialCategory}-material-select`).append(option.outerHTML);
}
