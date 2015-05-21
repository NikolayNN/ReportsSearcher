package objects;


import conection.ConnectionConfiguration;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by Nikolay on 21.05.2015.
 */
public class Report {
    private int id;
    private Date startDate;
    private Date endDate;
    private String performer;
    private String activity;
    private Set<String> performersSet;

    public Report() {
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public void setPerformer(String performer) {
        this.performer = performer;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public Report(int id, Date startDate, Date endDate, String performer, String activity) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.performer = performer;
        this.activity = activity;
    }

    public void setPerformersSet(){
        try {

            Connection conn = ConnectionConfiguration.getConnection();
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("select performer as performer from reports order by performer");
            performersSet = new HashSet<String>();
            while (rs.next()){
                performersSet.add(rs.getString("performer"));
            }
        }catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Set<String> getPerformerSet(){
       if (performersSet==null) setPerformersSet();
       return performersSet;
    }

    public int getId() {
        return id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public String getPerformer() {
        return performer;
    }

    public String getActivity() {
        return activity;
    }
}
