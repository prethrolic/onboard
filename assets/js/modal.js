var main = function()
{
  var x = window.matchMedia("(min-width: 750px)")
  var cstwidth = "80%";
  if(x.matches){
    cstwidth = "80%";
    phwidth = "30%";
  } else {
    cstwidth = "65%";
    phwidth = "80%";
  }

  $("#modal-owlery-01").iziModal({
    width: phwidth,
    title: "Owlery's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "owlery",
    loop: true,
  });

  $("#modal-owlery-02").iziModal({
    width: phwidth,
    title: "Owlery's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "owlery",
    loop: true,
  });

  $("#modal-owlery-03").iziModal({
    width: phwidth,
    title: "Owlery's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "owlery",
    loop: true,
  });

  $("#modal-pma-01").iziModal({
    width: cstwidth,
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

  $("#modal-owlery-02").iziModal({
    width: cstwidth,
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

  $("#modal-owlery-03").iziModal({
    width: cstwidth,
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

  $('#owlery-gal-button').on('click', function() {
    console.log("open modal");
    event.preventDefault();
    // $('#modal').iziModal('setZindex', 99999);
    // $('#modal').iziModal('open', { zindex: 99999 });
    $('#modal-owlery-01').iziModal('open');
  });

  $("#modal-pma-04").iziModal({
    width: cstwidth,
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
    width: cstwidth,
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


  $("#modal-witstory-01").iziModal({
    width: cstwidth,
    title: "witstory's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "witstory",
    loop: true,
  });
  $("#modal-witstory-02").iziModal({
    width: cstwidth,
    title: "witstory's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "witstory",
    loop: true,
  });

  $("#modal-witstory-03").iziModal({
    width: cstwidth,
    title: "witstory's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "witstory",
    loop: true,
  });

  $("#modal-witstory-04").iziModal({
    width: cstwidth,
    title: "witstory's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "witstory",
    loop: true,
  });

  $("#modal-witstory-05").iziModal({
    width: cstwidth,
    title: "witstory's Screenshots",
    position: "absolute",
    headerColor: "black",
    borderBottom: false,
    bodyOverflow: true,
    radius: 6,
    background: "black",
    group: "witstory",
    loop: true,
  });

  $('#witstory-gal-button').on('click', function() {
    console.log("open modal");
    event.preventDefault();
    // $('#modal').iziModal('setZindex', 99999);
    // $('#modal').iziModal('open', { zindex: 99999 });
    $('#modal-witstory-01').iziModal('open');
  });
}

$(document).ready(main);
