package objects;

import conection.ConnectionConfiguration;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

/**
 * Created by Nikolay on 21.05.2015.
 */
public class ReportList {

    private ArrayList<Report> reportList = new ArrayList<Report>();

    public ArrayList<Report> setReportList(){
        try {

            Connection conn = ConnectionConfiguration.getConnection();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("select * from reports order by id");
            reportList = new ArrayList<>();
            while (rs.next()){
                Report report =new Report(rs.getInt("id"),rs.getDate("start_date"),rs.getDate("end_date"), rs.getString("performer"),rs.getString("activity"));
                reportList.add(report);
            }
        }catch (Exception e) {
            e.printStackTrace();
        }
        return reportList;
    }
}
