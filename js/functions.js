/* проверка длины строки */

const detLengthString = (string, maxLength) => string.length <= maxLength;

detLengthString('aaa', 5);


/* проверка  является ли строка палиндромом */

const isPalindrome = (value) => {
  const normalized = value.replaceAll(' ', '') .toLowerCase();
  let inverse = '';
  for(let i = normalized.length - 1; i >= 0; i--) {
    inverse += normalized[i] ;
  }
  return inverse === normalized;
};
isPalindrome('топот');


/* дополнительное задание */

const getNumbers = (value) => {
  const preparedValue = String(value);
  let result = '';
  for (let i = 0; i < preparedValue.length; i++) {
    if(!Number.isNaN(Number.parseInt(preparedValue[i], 10))) {
      result += preparedValue[i];
    }
  }
  return Number.parseInt(result, 10);
};
getNumbers();


/* Дополнительное задание 5.16 */
const MINUTES_IN_HOUR = 60;

const getTimePoint = (time) => {
  const [hour, min] = time.split(':');
  return hour * MINUTES_IN_HOUR + Number(min);
};

const checkMeeting = (start, end, startMeet, duringMeet) => {
  const startPoint = getTimePoint(start);
  const endPoint = getTimePoint(end);
  const startMeetPoint = getTimePoint(startMeet);
  const endtMeetPoint = startMeetPoint + duringMeet;
  return startMeetPoint >= startPoint && startMeetPoint <= endPoint && endtMeetPoint >= startPoint && endtMeetPoint <= endPoint;
};

console.log(checkMeeting('08:00', '18:00', '08:00', 90));
