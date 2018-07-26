$(document).ready(function() {

  var headclix = 0;
  var eyeclix = 0;
  var noseclix = 0;
  var mouthclix = 0;

  lightning_one();
  lightning_two();
  lightning_three();

  $('#head').click(function() {
    if (headclix < 9) {
      headclix += 1;
    } else {
      headclix = 0;
    }
  });

  $('#eyes').click(function() {
    if (eyeclix < 9) {
      eyeclix += 1;
    } else {
      eyeclix = 0;
    }
  });

  $('#nose').click(function() {
    if (noseclix < 9) {
      noseclix += 1;
    } else {
      noseclix = 0;
    }
  });

  $('#mouth').click(function() {
    if (noseclix < 9) {
      noseclix += 1;
    } else {
      noseclix = 0;
    }
  });

});

function lightning_one() {
  $('#container #lightning1').fadeIn(250).fadeOut(250);
  setTimeout('lightning_one()', 4000);
};

function lightning_two() {
  $('#container #lightning2').fadeIn(250).fadeOut(250);
  setTimeout('lightning_two()', 5000);
};

function lightning_three() {
  $('#container #lightning3').fadeIn(250).fadeOut(250);
  setTimeout('lightning_three()', 7000);
};
