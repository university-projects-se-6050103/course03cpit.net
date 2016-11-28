const API_ENDPOINT = 'http://localhost:5000/api';
const MATERIAL_CATEGORIES = ['floor', 'walls', 'ceiling', 'windows'];

window.onload = () => {
  $('[data-action=add-room]').on('click', addRoomEntryInput);
  $('[data-action=calculate]').on('click', calculateRenovation);

  initializeMaterialsSelectors();
};

function addRoomEntryInput() {
  const $roomForm = $('#room-form');
  const $roomEntry = $roomForm.find('.room-entry:last');

  $roomForm.append($roomEntry.prop('outerHTML'));
}

function calculateRenovation() {
  const userInput = readUserInput();
  console.log('userInput', userInput);

  // fetch(`${API_ENDPOINT}/`)
}

function initializeMaterialsSelectors() {
  MATERIAL_CATEGORIES.forEach(populateMaterialsFor);
}

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

function readUserInput() {
  const inputs = {rooms: []};

  MATERIAL_CATEGORIES.forEach(category => {
    inputs[category] = $(`#${category}-material-select`).val();
  });

  inputs.rooms = $('.room-entry').map((index, entry) => {
    const x = Number($(entry).find('.room-dimension-x').val());
    const y = Number($(entry).find('.room-dimension-y').val());
    const z = Number($(entry).find('.room-dimension-z').val());

    return {x, y, z};
  }).toArray();

  return inputs;
}
