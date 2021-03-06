package objects;

import conection.ConnectionConfiguration;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;


/**
 * Created by Nikolay on 21.05.2015.
 */
public class ReportList {
    private ArrayList<Report> reportList = new ArrayList<Report>();
    public void setReportList(){
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
    }

    public ArrayList<Report> getReportList(){

        return reportList;
    }
//todo
    public ArrayList<Report> setReportListByDateAndPerformer(String startDate, String endDate, String performer) {

        String sqlReport;
        try {
            Connection conn = ConnectionConfiguration.getConnection();
            Statement stmt = conn.createStatement();
            if (performer.equalsIgnoreCase("all")) {
                sqlReport = "SELECT *FROM reports WHERE  DATE_FORMAT(start_date,'%Y-%m-%d')>'" + ConvertData.parseDate(startDate) + "' and DATE_FORMAT(end_date,'%Y-%m-%d')<'" + ConvertData.parseDate(endDate) + "' ORDER by id";
            }else sqlReport="SELECT *FROM reports WHERE  DATE_FORMAT(start_date,'%Y-%m-%d')>'" + ConvertData.parseDate(startDate) + "' and DATE_FORMAT(end_date,'%Y-%m-%d')<'" + ConvertData.parseDate(endDate) +"' and performer = '" + performer + "' ORDER by id";

            ResultSet rs = stmt.executeQuery(sqlReport);
            reportList = new ArrayList<>();
            while (rs.next()) {
                Report report = new Report(rs.getInt("id"), rs.getDate("start_date"), rs.getDate("end_date"), rs.getString("performer"), rs.getString("activity"));
                reportList.add(report);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void main(String[] args) {
        ReportList reportList = new ReportList();
        reportList.setReportListByDateAndPerformer("jan 1,2015", "dec 1,2015", "Dmitriy");
        System.out.println(reportList.getReportList().size());
        for (Report report :reportList.getReportList() ) {
            System.out.println(report.getStartDate());
            System.out.println(report.getEndDate());
            System.out.println(report.getPerformer());
            System.out.println(report.getActivity());
            System.out.println("--------------------------------");
        }


    }

}
