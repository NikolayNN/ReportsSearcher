var formValidate = function (){

var startDate = document.getElementById('startDate');
var startDateValue = startDate.value;
var re=/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)+ \d{1,2},\d\d\d\d/i;
    if(re.test(startDateValue)){alert('ok!!!')}else{alert('herhya')}
}

