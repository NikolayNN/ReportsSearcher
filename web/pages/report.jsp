<%@ page import="objects.Report" %>
<%--
  Created by IntelliJ IDEA.
  User: Nikolay
  Date: 21.05.2015
  Time: 16:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>



<jsp:useBean id="reportList" class="objects.ReportList" scope="page"/>
  <%reportList.setReportListByDateAndPerformer(request.getParameter("start_date"), request.getParameter("end_date"), request.getParameter("performer"));
  for (Report report : reportList.getReportList()){%>
  <p><%= report.getStartDate()%></p>
    <p><%=report.getEndDate()%></p>
    <p><%=report.getPerformer()%></p>
    <p><%=report.getActivity()%></p>
    <hr />
  <%}%>




