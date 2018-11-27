$(function() {

  // var headclix = 0;
  // var eyeclix = 0;
  // var noseclix = 0;
  // var mouthclix = 0;

  lightning_one();
  lightning_two();
  lightning_three();

  var clix = [0,0,0,0]; // head, eyes, nose, mouth

  $('#head').click( function() {
    moveMe(0, this);
    console.log(clix);
  });

  $('#eyes').click( function() {
    moveMe(1, this);
    console.log(clix);
  });

  $('#nose').click( function() {
    moveMe(2, this);
    console.log(clix);
  });

  $('#mouth').click( function() {
    moveMe(3, this);
    console.log(clix);
    console.log(this);
  });

  function moveMe(i, obj) {
    if(clix[i] < 9) {
      $(obj).animate({left:"-=367px"}, 500);
      clix[i] += 1;
    } else {
      clix[i] = 0;
      $(obj).animate({left:"0px"}, 500);
    }
  }

  // $('#head').click(function() {
  //   if (headclix < 9) {
  //     $(this).animate({left: "-=367px"}, 500),
  //     headclix += 1;
  //   } else {
  //     $(this).animate({left: "0px"}, 500)
  //     headclix = 0;
  //   }
  // });
  //
  // $("#eyes").click(function() {
  //   if (eyeclix < 9) {
  //     $(this).animate({left: "-=367px"}, 500);
  //     eyeclix += 1;
  //   } else {
  //     $(this).animate({left: "0px"}, 500);
  //     eyeclix = 0;
  //   }
  // });
  //
  // $("#nose").click(function() {
  //   if (noseclix < 9) {
  //     $(this).animate({left: "-=367px"}, 500);
  //     noseclix += 1;
  //   } else {
  //     $(this).animate({left: "0px"}, 500);
  //     noseclix = 0;
  //   }
  // });
  //
  // $("#mouth").click(function() {
  //   if (mouthclix < 9) {
  //     $(this).animate({left: "-=367px"}, 500);
  //     mouthclix += 1;
  //   } else {
  //     $(this).animate({left: "0px"}, 500);
  //     mouthclix = 0;
  //   }
  // });

});

function lightning_one() {
  $('#container #lightning1').fadeIn(250).fadeOut(250);
  // setTimeout('lightning_one()', 4000);
};

function lightning_two() {
  $('#container #lightning2').fadeIn(250).fadeOut(250);
  // setTimeout('lightning_two()', 5000);
};

function lightning_three() {
  $('#container #lightning3').fadeIn(250).fadeOut(250);
  // setTimeout('lightning_three()', 8000);
};

goLightning();

window.onblur = stopLightning;
window.onfocus = goLightning;

function stopLightning() {
  window.clearInterval(int1);
  window.clearInterval(int2);
  window.clearInterval(int3);
};



function goLightning() {
  int1 = setInterval( function() {
    lightning_one();
    }, 4000
  );
  int2 = setInterval( function() {
    lightning_two();
    }, 5000
  );
  int3 = setInterval( function() {
    lightning_three();
    }, 7000
  );
};
