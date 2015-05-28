package objects;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * Created by Nikolay on 21.05.2015.
 */
public class ConvertData {
    private static final DateFormat
            DATE_FORMAT_DASH_SEPARATED = new SimpleDateFormat("yyyy-MM-dd");
    private static final DateFormat
            DATE_FORMAT_STRING_COMMA_SEPARATED = new SimpleDateFormat("MMM d,yyyy", Locale.US);

    //Input Example - Sep 1,2005 output 2005-09-01
    public static String parseDate(String inputDate){
        Date date = null;
        try {
            date = DATE_FORMAT_STRING_COMMA_SEPARATED.parse(inputDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return DATE_FORMAT_DASH_SEPARATED.format(date);
    }

    public static String DateConvert (Date date){
        return DATE_FORMAT_STRING_COMMA_SEPARATED.format(date);
    }


}
