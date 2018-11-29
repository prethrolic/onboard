var main = function()
{
  $("#modal-pma-01").iziModal({
    width: "80%",
    title: "Parkloei's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "PMA",
    loop: true,
  });

  $("#modal-pma-02").iziModal({
    width: "80%",
    title: "Parkloei's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "PMA",
    loop: true,
  });

  $("#modal-pma-03").iziModal({
    width: "80%",
    title: "Parkloei's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "PMA",
    loop: true,
  });

  $("#modal-pma-04").iziModal({
    width: "80%",
    title: "Parkloei's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "PMA",
    loop: true,
  });

  $("#modal-pma-05").iziModal({
    width: "80%",
    title: "Parkloei's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "PMA",
    loop: true,
  });

  $('#pma-gal-button').on('click', function() {
    console.log("open modal");
    event.preventDefault();
    // $('#modal').iziModal('setZindex', 99999);
    // $('#modal').iziModal('open', { zindex: 99999 });
    $('#modal-pma-01').iziModal('open');
  });
}

$(document).ready(main);
