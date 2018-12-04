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


  var w = 367; // width of the face strip
  var m = 10; // number of the monster face strip we're on

  $('#btnRandom').click(randomize);
  $('#btnReset').click();

  function getRandom(num) {
    var my_random_num = Math.floor(Math.random() * num);
    return my_random_num;
  }

  function randomize() {
    $('.face').each(function(index) {
      var target_position = getRandom(m);
      var current_position = clix[index];
      clix[index] = target_position;
      var move_to = target_position * w;
      $(this).animate({left: "-=" + move_to + "px"}, 500);
    });
  }

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
