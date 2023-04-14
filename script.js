var saveBtns = $('button.btn');
var nineAM = $('button#9am');
var tenAM = $('button#10am');
var elevenAM = $('button#11am');
var TwelveNoon = $('button#12pm');
var onePM = $('button#1pm');
var twoPM = $('button#2pm');
var threePM = $('button#3pm');
var fourPM = $('button#4pm');
var fivePM = $('button#5pm');
var StorageData = [nineAM, tenAM, elevenAM, TwelveNoon, onePM, twoPM, threePM, fourPM, fivePM];
var timeSpot = $('#currentDay')
var timeDisplay = '';
function timeUpdate() {
  var timeDisplay = dayjs().format('ddd, MMM D, YYYY h:mm A');
  timeSpot.text(timeDisplay);
}
timeUpdate();
setInterval(timeUpdate, 60000)




//to get hour format 
var thisHour = dayjs().format('H')

//if (thisHour = 

//function styleCheck() {
///  if ( == thisHour) {
//    console.log(thisHour)
///  } else if ($9 > thisHour) {
//    this.attr()
// }
//}


//var numbr9 = $('#9')


//var numbr10 = $('#10')

//var numbr11 = $('#11')

//var numbr12 = $('#12')

//var numbr13 = $('#13')

//var numbr14 = $('#14')

//var numbr15 = $('#15')

//var numbr16 = $('#16')

//var numbr17 = $('#17')

////timeCheckArry = {[numbr9, numbr10, numbr11, numbr12, numbr13, numbr14, numbr15, numbr16, numbr17,]}
//console.log($9)
// for (let j = 0; j < timeCheckArry.length, j++; ) {
//timeCheckArry[j].number(j + 8)

var numbr9 = $('#9').data('number', 9);
var numbr10 = $('#10').data('number', 10);
var numbr11 = $('#11').data('number', 11);
var numbr12 = $('#12').data('number', 12);
var numbr13 = $('#13').data('number', 13);
var numbr14 = $('#14').data('number', 14);
var numbr15 = $('#15').data('number', 15);
var numbr16 = $('#16').data('number', 16);
var numbr17 = $('#17').data('number', 17);

var timeCheckArry = [numbr9, numbr10, numbr11, numbr12, numbr13, numbr14, numbr15, numbr16, numbr17];




console.log(timeCheckArry[4].data('number'))


$('button').on('click', function () {
  localStorage.setItem('9am', $('#9').val())
  localStorage.setItem('10am', $('#10').val())
  localStorage.setItem('11am',$('#11').val())
  localStorage.setItem('12am', $('#12').val())
  localStorage.setItem('13am', $('#13').val())
  localStorage.setItem('14am', $('#14').val())
  localStorage.setItem('15am', $('#15').val())
  localStorage.setItem('16am', $('#16').val())
  localStorage.setItem('17am', $('#17').val())
})
$(document).ready(function () {
  $('#9').val(localStorage.getItem('9am'));
  $('#10').val(localStorage.getItem('10am'));
  $('#11').val(localStorage.getItem('11am'));
  $('#12').val(localStorage.getItem('12am'));
  $('#13').val(localStorage.getItem('13am'));
  $('#14').val(localStorage.getItem('14am'));
  $('#15').val(localStorage.getItem('15am'));
  $('#16').val(localStorage.getItem('16am'));
  $('#17').val(localStorage.getItem('17am'));
});

//function colorCheck(param) {
//for (var i = 0; i < timeCheckArry.length; i++) {
//colorCheck(timeCheckArry[i]);
//console.log("its gettin checked")
//if (param.attr('') == thisHour) {
// param.addClass('present')
//} else if (param.attr('') > thisHour) {
//param.addClass('future');
//} else {
//param.addClass('past')
//}

// }

//}



function colorCheck() {
  for (var i = 0; i < timeCheckArry.length; i++) {
    var timeVal = timeCheckArry[i].data('number');
    console.log('timeVal:', timeVal);
    console.log(thisHour)

    if (parseInt(timeVal) === parseInt(thisHour)) {
      timeCheckArry[i].parent().css('background-color', 'ff6961');
      console.log('blue:', timeCheckArry[i]);
    } else if (parseInt(timeVal) > parseInt(thisHour)) {
      timeCheckArry[i].parent().css('background-color', '#77dd77');
      console.log('grey:', timeCheckArry[i]);
    } else {
      timeCheckArry[i].parent().css('background-color', '#d3d3d3');
      console.log('red:', timeCheckArry[i]);
    }
  }
}

colorCheck();
setInterval(colorCheck, 600000);

