<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Dell
  Date: 3/22/2022
  Time: 9:38 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<center>
    <h1>Employee Management</h1>
    <h2>
        <a href="/employee?action=create">Add New Employee</a>
    </h2>
    <h2>
        <a href="/employee?action=sort">Sort by name</a>
    </h2>
</center>
<%--<div align="right">--%>
<%--    <table >--%>
<%--        <form method="post" action="users?action=search">--%>
<%--            <label>Search</label>--%>
<%--            <input type="text" name="search">--%>
<%--            <input type="submit" value="search">--%>
<%--        </form>--%>
<%--    </table>--%>
<%--</div>--%>

<div align="center" style="text-align: center">
    <table border="1" cellpadding="5">
        <caption><h2>List Of Employee</h2></caption>
        <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Birthday</th>
            <th>Employee ID Card</th>
            <th>Employee Salary</th>
            <th>Employee Phone</th>
            <th>Employee Email</th>
            <th>Employee Address</th>
            <th>Position Id</th>
            <th>Education Degree Id</th>
            <th>Division Id</th>
            <th>Edit</th>
            <th>Remove</th>
        </tr>
        <c:forEach var="employee" items="${employeeList}">
            <tr>
                <td><c:out value="${employee.getEmployeeId()}"/></td>
                <td><c:out value="${employee.getEmployeeName()}"/></td>
                <td><c:out value="${employee.getEmployeeBirthday()}"/></td>
                <td><c:out value="${employee.getEmployeeIdCard()}"/></td>
                <td><c:out value="${employee.getEmployeeSalary()}"/></td>
                <td><c:out value="${employee.getEmployeePhone()}"/></td>
                <td><c:out value="${employee.getEmployeeEmail()}"/></td>
                <td><c:out value="${employee.getEmployeeAddress()}"/></td>
                <td><c:out value="${employee.getPositionId().getPositionName()}"/></td>
                <td><c:out value="${employee.getEducationDegreeId().getEducationDegreeName()}"/></td>
                <td><c:out value="${employee.getDivisionId().getDivisionName()}"/></td>
                <td>
                    <a href="/employee?action=edit&id=${employee.getEmployeeId()}">Edit</a>
                </td>
                <td>
                    <a href="/employee?action=delete&id=${employee.getEmployeeId()}">Delete</a>
                </td>
            </tr>
        </c:forEach>
    </table>
</div>
</body>
</html>
