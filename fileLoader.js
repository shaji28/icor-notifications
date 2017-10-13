var lineReader = require('line-reader');

var d = new Date();
//d.setDate(d.getDate()-12) //manual date change for testing purpose
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

const yyyy = d.getFullYear();
const DD = d.getDate();
const MM = d.getMonth() + 1;

var inputBasePath = 'C:/Users/DCS/Desktop';
var inputFile = inputBasePath + '/' + yyyy + '/' + month[d.getMonth()] + '.csv';

function getSalahTimes(inputFile, date, month){
  console.log('Reading file .. '+inputFile);
  console.log('Date:'+date);
  console.log('Month:'+month);
  lineReader.eachLine(inputFile, function(line, last) {
    //console.log(line.split(','));
    var array = line.split(',');
    if (array[0]==month & array[1]==date){
      console.log(array[0]+'/'+array[1]);

      var timings = {
        Fajr : array[3],
        Zuhr : array[6],
        Asr : array[9],
        Magrib : array[11],
        Esha : array[13]
      }
      console.log(timings);
      return timings;

    }

  });
}

  var todayTimings = getSalahTimes(inputFile, DD, MM);
  d.setDate(d.getDate()-1);

  //console.log(inputBasePath+'/'+d.getFullYear()+'/'+month[d.getMonth()]+'.csv');
  var ydayTimings = getSalahTimes(inputBasePath+'/'+d.getFullYear()+'/'+month[d.getMonth()]+'.csv', d.getDate(), d.getMonth()+1);
// }
