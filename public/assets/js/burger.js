$(function () {
  //Sends POST request
  $('.create-form').on('submit', function (event) {
    event.preventDefault();
    const newBurger = {
      burger_name: $('#newburger').val().trim(),
      devoured: 0,
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(function () {
      console.log('Added new burger');
      location.reload();
    });
  });

  // Button to send PUT request
  $('.devourburger').on('click', function (event) {
    event.preventDefault();
    const id = $(this).data('id');
    const devouredState = {
      devoured: 1,
    };
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: devouredState,
    }).then(function () {
      console.log('Burger devoured');
      location.reload();
    });
  });

  // Button to send Delete request
  $('.deleteburger').on('click', function (event) {
    event.preventDefault();
    const id = $(this).data('id');
    $.ajax({
      type: 'DELETE',
      url: '/api/burgers/' + id,
    }).then(location.reload());
  });
});
