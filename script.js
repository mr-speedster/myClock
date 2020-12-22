//nammakk aa clockinte ella pointum set akkan ulla code aan thazhe koduthekkunne
var diallines =document.getElementsByClassName('diallines');
var clockE1 = document.getElementsByClassName('clock')[0];

for(var i=1;i<60;i++)
{
    clockE1.innerHTML+="<div class='diallines'></div>";
    diallines[i].style.transform="rotate("+6*i+"deg)";
}
// grab a reference of every hands

// hour hand
let hourHand = document.querySelector('.hour-hand');
// minute hand 
let minuteHand = document.querySelector('.minute-hand');
// second hand
let secondHand = document.querySelector('.second-hand');

// function that rotates the hands
function rotate() {
  // get the current Date object from which we can obtain the current hour, minute and second
  const currentDate = new Date();

  // get the hours, minutes and seconds
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // rotating fraction --> how many fraction to rotate for each hand.
  const secondsFraction = seconds / 60;
  const minutesFraction = (secondsFraction + minutes) / 60;
  const hoursFraction = (minutesFraction + hours) / 12;

  // actual deg to rotate
  const secondsRotate = secondsFraction * 360;
  const minutesRotate = minutesFraction * 360;
  const hoursRotate = hoursFraction * 360;

  // apply the rotate style to each element
  // use backtick `` instead of single quotes ''
  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;
}

// for every 1000 milliseconds(ie, 1 second) interval, activate the rotate() function.
setInterval(rotate, 1000);