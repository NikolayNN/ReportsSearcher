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



var daysInMonth = function(date) {
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    return 32 - new Date(year, month, 32).getDate();
};



var  dateAutocompletion = function () {



    var requestStr = document.getElementById("date-select"); // Получаем наш список
    var requestStrValue = requestStr.options[requestStr.selectedIndex].text; // Получаем значение выделенного элемента (в нашем случае fruit2).
    if(requestStrValue=="Last Month"){lastMonth();}
    if(requestStrValue=="Last Calendar Year"){lastCalendarYear();}

}

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


var lastMonth = function() {
        console.log("last month");
       var currentDate = new Date();
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
        console.log(currentDate);
    delete currentDate;
    delete startDate;
    }


var lastCalendarYear = function(){
    console.log("last calendar year");
    var currentDate = new Date();
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
    console.log(currentDate);
    delete currentDate;
    delete startDate;

}




    //if (requestStrValue.localeCompare("current month to date")){
    //    startDate.setMonth(currentDate.getMonth());
    //
    //    var sMonth = months[startDate.getMonth()+1];
    //    var sYear = startDate.getYear()+1900;
    //    var sDay =1;
    //    var sDateStr = sMonth+" "+sDay+","+sYear;
    //
    //    var eMonth = months[currentDate.getMonth()];
    //    var eDay = currentDate.getDate();
    //    var eYear = currentDate.getYear()+1900;
    //    var eDateStr = eMonth+" "+eDay+","+eYear;
    //
    //    document.getElementById('startDate').value = sDateStr;
    //    document.getElementById('endDate').value = eDateStr;
    //}




