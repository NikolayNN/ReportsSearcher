var formValidate = function (){



    // regular expresion for date
    var re = /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)+ \d{1,2},\d\d\d\d/i;
//todo сделать отдельной функцией и переменными
    autocompletionIfNull();
    //Read value from fileds "startDate" and "End Date"
    var startDate = document.getElementById('startDate');
    var startDateValue = startDate.value;
    var endDate = document.getElementById('endDate');
    var endDateValue = endDate.value;


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

// autocompletion date fields if startDate="" or/and endDate =""
var autocompletionIfNull = function() {



    if ((document.getElementById('startDate').value == "") || (document.getElementById('endDate').value == "")) {
        if ((document.getElementById('startDate').value === "")) {
            document.getElementById('startDate').value = dateToSting(new Date(1900, 0, 1));
        }

        if ((document.getElementById('endDate').value === "")) {

            console.log("111111");
            document.getElementById('endDate').value = dateToSting(currentDate);
        }

        return true;
    }
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
    if(requestStrValue=="Current Qtr to Date"){currentQtrToDate();}

}

// calulate amount days in the month
var daysInMonth = function(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
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

var setValueForElements = function(startDate,endDate){
    document.getElementById('startDate').value = dateToSting(startDate);
    document.getElementById('endDate').value = dateToSting(endDate);
}

// menu /lastMonth/
var lastMonth = function() {
    if((CURRENT_MONTH-1)===-1){
        startDateL = new Date(CURRENT_YEAR-1,11,1);
        endDateL = new Date(startDateL,daysInMonth(startDateL));
        setValueForElements(startDateL, endDateL);
        return;
    }
    startDateL = new Date(CURRENT_YEAR, CURRENT_MONTH-1,1);
    endDateL = new Date(CURRENT_YEAR, CURRENT_MONTH-1, daysInMonth(startDateL));
    setValueForElements(startDateL, endDateL);
}

//menu /lastCalendarYear/
var lastCalendarYear = function(){
    setValueForElements( new Date(CURRENT_YEAR-1,0,1), new Date(CURRENT_YEAR-1,11,31));
}

// menu /currentYearToDate/
var currenYearToDate = function(){
    setValueForElements(new Date(CURRENT_YEAR,0,1),currentDate);
}

var currentMonthToDate = function(){

    setValueForElements(new Date (CURRENT_YEAR,CURRENT_MONTH,1),currentDate);


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
var startDateL;
var endDateL;
var CURRENT_MONTH = currentDate.getMonth();
var CURRENT_YEAR = currentDate.getFullYear();


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
    setValueForElements(qtrBeginDate,qtrEndDate);
}
// for menu /Current Month to Date/
var currentQtrToDate = function(){
    var currentQtr = defineNumberCurrentQtr();
    setQtrDate(currentQtr);
    setValueForElements(qtrBeginDate,currentDate)
}













