<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Dell
  Date: 3/18/2022
  Time: 4:16 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Customer List</title>

</head>
<body>
<center>
    <h1>Customer Management</h1>
    <h2>
        <a href="/customers?action=create">Add New Customer</a>
    </h2>
    <h2>
        <a href="/customers?action=sort">Sort by name</a>
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
        <caption><h2>List of Customers</h2></caption>
        <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Customer Birthday</th>
            <th>Customer Gender</th>
            <th>Customer ID Card</th>
            <th>Customer Phone</th>
            <th>Customer Email</th>
            <th>Customer Address</th>
            <th>Customer Type Name</th>
            <th>Edit</th>
            <th>Remove</th>
        </tr>
        <c:forEach var="customer" items="${customerList}">
            <tr>
                <td><c:out value="${customer.getCustomerId()}"/></td>
                <td><c:out value="${customer.getCustomerName()}"/></td>
                <td><c:out value="${customer.getCustomerBirthday()}"/></td>
                <td><c:out value="${customer.getCustomerGender()}"/></td>
                <td><c:out value="${customer.getCustomerIdCard()}"/></td>
                <td><c:out value="${customer.getCustomerPhone()}"/></td>
                <td><c:out value="${customer.getCustomerEmail()}"/></td>
                <td><c:out value="${customer.getCustomerAddress()}"/></td>
                <td><c:out value="${customer.customerTypeId.getCustomerTypeName()}"/></td>

                <td>
                    <a href="/customers?action=edit&id=${customer.getCustomerId()}">Edit</a>

                </td>
                <td>
                    <a href="/customers?action=delete&id=${customer.getCustomerId()}">Delete</a>
                </td>
            </tr>
        </c:forEach>


    </table>
</div>


</body>
</html>
