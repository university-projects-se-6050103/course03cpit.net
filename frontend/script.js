const API_ENDPOINT = 'http://localhost:5000/api';
const MATERIAL_CATEGORIES = ['floor', 'walls', 'ceiling', 'windows'];

window.onload = () => {
  $('[data-action=add-room]').on('click', onAddRoom);
  $('[data-action=calculate]').on('click', onCalculate);

  initializeMaterialsSelectors();
};

function onAddRoom() {
  const $roomForm = $('#room-form');
  const $roomEntry = $roomForm.find('.room-entry:last');

  $roomForm.append($roomEntry.prop('outerHTML'));
}

function onCalculate() {
  const userInput = readUserInput();
  console.log('userInput', userInput);

  // fetch(`${API_ENDPOINT}/`)
}

function initializeMaterialsSelectors() {
  MATERIAL_CATEGORIES.forEach(populateMaterialsFor);
}

function populateMaterialsFor(materialCategory) {
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
  const userInput = readMaterialsInputs();
  userInput.rooms = readRoomsDimensions();

  return userInput;
}

function readMaterialsInputs() {
  return MATERIAL_CATEGORIES.reduce((memo, category) => {
    memo[category] = $(`#${category}-material-select`).val();
    return memo;
  }, {});
}

function readRoomsDimensions() {
  return $('.room-entry')
    .map((index, entry) => {
      const getDimension = (dimension) => {
        const $dimension = $(entry).find(`.room-dimension-${dimension}`);
        return Number($dimension.val());
      };

      return {
        x: getDimension('x'),
        y: getDimension('y'),
        z: getDimension('z')
      };
    })
    .toArray();
}
