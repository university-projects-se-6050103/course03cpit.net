const API_ENDPOINT = `http://${document.location.host}/api`;
const MATERIAL_CATEGORIES = ['floor', 'walls', 'ceiling', 'windows'];

window.onload = () => {
  $('[data-action=add-room]').on('click', onAddRoom);
  $('[data-action=calculate]').on('click', onCalculate);

  initializeMaterialsSelectors();
};

function onAddRoom(event) {
  event.preventDefault();
  const $roomForm = $('#room-form');
  const $roomEntry = $roomForm.find('.room-entry:last');

  $roomForm.append($roomEntry.prop('outerHTML'));
}

function onCalculate() {
  const userInput = readUserInput();
  console.log('[user-input]', userInput);

  getRenovationPrice(userInput).then(json => {
    console.log('[price-response]', json);

    $('[data-role=results]').text(`Price: ${json}$`);
  });
}

function getRenovationPrice(userInput) {
  return fetch(`${API_ENDPOINT}/price`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInput)
    })
    .then(response => response.json());
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
