$(document).ready(function () {
  const song = [
    3, 2, 1, 2, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 2, 1, 2, 3, 3, 3, 3, 2, 2, 3, 2, 1,
  ];
  var noteIndex;

  $("#playBtn").click(function () {
    noteIndex = 0;
    playSong();
  });

  function playSong() {
    if (noteIndex < song.length) {
      var note = song[noteIndex];
      var key = $("#key" + note);
      key.addClass("piano__key--active");
      setTimeout(function () {
        key.removeClass("piano__key--active");
        noteIndex++;
        setTimeout(playSong, 100);
      }, 1000);
    }
  }
});
