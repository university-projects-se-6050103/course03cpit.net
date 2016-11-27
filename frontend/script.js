window.onload = () => {
  $('[data-action=add-room]').on('click', () => {
    const $roomForm = $('#room-form');
    const $roomEntry = $roomForm.find('.room-entry').last();

    $roomForm.append($roomEntry.html());
  });
};
