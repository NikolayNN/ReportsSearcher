var formValidate = function (){

    //Read value from fileds "startDate" and "End Date"
    var startDate = document.getElementById('startDate');
    var startDateValue = startDate.value;
    var endDate = document.getElementById('endDate');
    var endDateValue = endDate.value;

    // regular expresion for date
    var re = /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)+ \d{1,2},\d\d\d\d/i;

    //if field "startDate" has incorect date format, then error message is displayed and form don't send
    if (!re.test(startDateValue)){
        document.getElementById('start-date').innerHTML='*check data format. Example DEC 29,1989';
        return false;
    } else{
                document.getElementById('start-date').innerHTML='OK!';
                document.getElementById('start-date').style.color="green"}

    //if field "endDate" has incorect date format, then error message is displayed and form don't send
    if (!re.test(endDateValue)){
        document.getElementById('end-date').innerHTML='*check data format. Example DEC 29,1989';
        return false;}
         else{ document.getElementById('end-date').innerHTML='OK!'; document.getElementById('end-date').style.color="green"}
}






// this function choose function by select menu
var  dateAutocompletion = function () {

    var requestStr = document.getElementById("date-select"); // Получаем наш список
    var requestStrValue = requestStr.options[requestStr.selectedIndex].text; // Получаем значение выделенного элемента (в нашем случае fruit2).
    if(requestStrValue=="Last Month"){lastMonth();}
    if(requestStrValue=="Last Calendar Year"){lastCalendarYear();}
    if(requestStrValue=="Current Year to Date"){currenYearToDate();}
    if(requestStrValue=="Current Month to Date"){currentMonthToDate();}
    if(requestStrValue=="---"){allDate();}
    if(requestStrValue=="Last Qtr"){lastQtr();}

}

// calulate amount days in the month
var daysInMonth = function(date) {
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    return 32 - new Date(year, month, 32).getDate();
};

// return string value of month
var chooseMonth = function(date) {

    var months = new Array(13);
    months[1] = "Jan";
    months[2] = "Feb";
    months[3] = "Mar";
    months[4] = "Apr";
    months[5] = "May";
    months[6] = "Jun";
    months[7] = "Jul";
    months[8] = "Aug";
    months[9] = "Sen";
    months[10] = "Oct";
    months[11] = "Nov";
    months[12] = "Dec";

    return months[date.getMonth()+1];
}

// menu /lastMonth/
var lastMonth = function() {

       var startDate = new Date();

        startDate.setMonth(currentDate.getMonth() - 1);

         var sMonth = chooseMonth(startDate);
         var sYear = startDate.getYear() + 1900;
         var sDay = 1;
         var sDateStr = sMonth + " " + sDay + "," + sYear;

         var eMonth = sMonth;
         var eDay = daysInMonth(currentDate);
         var eYear = currentDate.getYear() + 1900;
         var eDateStr = eMonth + " " + eDay + "," + eYear;

        document.getElementById('startDate').value = sDateStr;
        document.getElementById('endDate').value = eDateStr;

}

//menu /lastCalendarYear/
var lastCalendarYear = function(){

    //var currentDate = new Date();
    var startDate = new Date();
    startDate.setFullYear(currentDate.getFullYear()-1);

    var sMonth = "Jan";
    var sYear = startDate.getYear()+1900;
    var sDay =1;
    var sDateStr = sMonth+" "+sDay+","+sYear;

    var eMonth = "Dec";
    var eDay = 31;
    var eYear = startDate.getYear()+1900;
    var eDateStr = eMonth+" "+eDay+","+eYear;

    document.getElementById('startDate').value = sDateStr;
    document.getElementById('endDate').value = eDateStr;

}

// menu /currentYearToDate/
var currenYearToDate = function(){
    //var currentDate = new Date();

    var sMonth = "Jan";
    var sYear = currentDate.getYear()+1900;
    var sDay =1;
    var sDateStr = sMonth+" "+sDay+","+sYear;

    var eMonth = chooseMonth(currentDate);
    var eDay = currentDate.getDate();
    var eYear = currentDate.getYear()+1900;
    var eDateStr = eMonth+" "+eDay+","+eYear;

    document.getElementById('startDate').value = sDateStr;
    document.getElementById('endDate').value = eDateStr;
}

var currentMonthToDate = function(){
    //var currentDate = new Date();


    var sMonth = chooseMonth(currentDate);
    var sYear = currentDate.getYear() + 1900;
    var sDay = 1;
    var sDateStr = sMonth + " " + sDay + "," + sYear;

    var eMonth = chooseMonth(currentDate);
    var eDay = currentDate.getDate();
    var eYear = currentDate.getYear()+1900;
    var eDateStr = eMonth+" "+eDay+","+eYear;

    document.getElementById('startDate').value = sDateStr;
    document.getElementById('endDate').value = eDateStr;

}

var allDate = function(){
    document.getElementById('startDate').value = "";
    document.getElementById('endDate').value = "";
}


//!!!Next functions use for define and autocompletion /Last Qtr/ and /Current Month to Date/

var currentDate = new Date();
var YEAR = currentDate.getFullYear();
var QTR_1_BEGIN = new Date (YEAR,0,1);
var QTR_1_END = new Date (YEAR,2,31);
var QTR_2_BEGIN = new Date (YEAR,3,1);
var QTR_2_END = new Date (YEAR,5,30);
var QTR_3_BEGIN = new  Date (YEAR,6,1);
var QTR_3_END = new Date (YEAR,8,30);
var QTR_4_BEGIN = new Date (YEAR,9,1);
var QTR_4_END = new Date (YEAR,11,31);
var QTR_0_BEGIN = new Date(YEAR-1,9,1);
var QTR_0_END = new Date(YEAR-1,11,31);

var qtrBeginDate;
var qtrEndDate;

var defineNumberCurrentQtr =    function(){
    if((currentDate>QTR_1_BEGIN)&&(currentDate<QTR_1_END)){return 1;}
    if((currentDate>QTR_2_BEGIN)&&(currentDate<QTR_2_END)){return 2;}
    if((currentDate>QTR_3_BEGIN)&&(currentDate<QTR_3_END)){return 3;}
    if((currentDate>QTR_4_BEGIN)&&(currentDate<QTR_4_END)){return 4;}
}

var setQtrDate = function(qtr){
    switch (qtr) {
        case 1:
            qtrBeginDate = QTR_1_BEGIN;
            qtrEndDate = QTR_1_END;
            break;
        case 2:
            qtrBeginDate = QTR_2_BEGIN;
            qtrEndDate = QTR_2_END;
            break;
        case 3:
            qtrBeginDate = QTR_3_BEGIN;
            qtrEndDate = QTR_3_END;
            break;
        case 4:
            qtrBeginDate = QTR_4_BEGIN;
            qtrEndDate = QTR_4_END;
            break;
        case 0:
            qtrBeginDate = QTR_0_BEGIN;
            qtrEndDate = QTR_0_END;
            break;
    }
}

var dateToSting = function(date)
{
    var month = chooseMonth(date);
    var day = date.getDate();
    var year = date.getYear() + 1900;
    return month + " " + day + "," + year;
}
// for menu /Last Qtr/
var lastQtr = function(){
    var lastQtrNumb = defineNumberCurrentQtr()-1;
    setQtrDate(lastQtrNumb);
    document.getElementById('startDate').value = dateToSting(qtrBeginDate);
    document.getElementById('endDate').value = dateToSting(qtrEndDate);
}
// for menu /Current Monyh to Date/
var currentMonthToDate = function(){
    var currentQtr = defineNumberCurrentQtr();
    document.getElementById('startDate').value = dateToSting(qtrBeginDate);
    document.getElementById('endDate').value = dateToSting(currentDate);
}













