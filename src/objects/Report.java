package objects;


import java.util.Date;

/**
 * Created by Nikolay on 21.05.2015.
 */
public class Report {
    private int id;
    private Date startDate;
    private Date endDate;
    private String Performer;
    private String Activity;


    public Report(int id, Date startDate, Date endDate, String performer, String activity) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        Performer = performer;
        Activity = activity;
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
        return Performer;
    }

    public String getActivity() {
        return Activity;
    }
}
