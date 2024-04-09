var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 0;

var qSet = document.querySelectorAll('.q_set');
var qAnsRow = document.querySelectorAll('.q_set .q_answer_row input');

skip.addEventListener('click', function(){
  step();
  duration = 10;
});

qAnsRow.forEach(function(qAnsRowSingle){
  qAnsRowSingle.addEventListener('click', function(){
    setTimeout(function(){
      step();
      duration = 10;
    }, 500)

    var valid = this.getAttribute("valid");
    if(valid == "valid"){
      scoreCount += 25;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
    }

  })
});

function step(){
  count += 1;
  for(var i = 0; i < qSet.length; i++){
    qSet[i].className = 'q_set';
  }
  qSet[count].className = 'q_set active';
  if(count == 4){
    skip.style.display = 'none';
    clearInterval(durationTime);
    countdown.innerHTML = 0;
  }
}

var durationTime = setInterval(function(){
  if(duration == 10){
    duration = 0;
  }
  duration += 1;
  countdown.innerHTML = duration;
  if(countdown.innerHTML == "10"){
    step();
  }
}, 1000)
