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
        return false;}
        else{ document.getElementById('start-date').innerHTML='OK!'; document.getElementById('start-date').style.color="green"}

    //if field "endDate" has incorect date format, then error message is displayed and form don't send
    if (!re.test(endDateValue)){
        document.getElementById('end-date').innerHTML='*check data format. Example DEC 29,1989';
        return false;}
         else{ document.getElementById('end-date').innerHTML='OK!'; document.getElementById('end-date').style.color="green"}
}

 // todo onchange='formValidate()'


