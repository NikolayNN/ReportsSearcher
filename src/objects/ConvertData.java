package objects;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * Created by Nikolay on 21.05.2015.
 */
public class ConvertData {
     public static String parseDate(String inputDate){
        //Sep 1,2005
        SimpleDateFormat format = new SimpleDateFormat("MMM d,YYYY", Locale.US);
        Date date = null;
        try {
            date = format.parse(inputDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return date.getYear()+"-"+date.getMonth()+"-"+date.getDay();
    }

}
