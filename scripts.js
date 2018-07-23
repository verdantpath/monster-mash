$(document).ready(function() {
  var headclix = 0;
  $('#head').click(function() {
    if (headclix < 9) {
      headclix += 1;
    } else {
      headclix = 0;
    }
  });
});
