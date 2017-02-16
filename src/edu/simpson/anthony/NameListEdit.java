package edu.simpson.anthony;


import com.google.gson.Gson;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

public class NameListEdit extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        out.println("Hello");

        // Grab the data we got via a parameter
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String phone_number = request.getParameter("phone_number");
        String birthday = request.getParameter("birthday");


        // Just print the data out to confirm we got it.
        out.println("First Name='" + firstName + "'");
        out.println("Last Name='" + lastName + "'");
        out.println("Email='" + email + "'");
        out.println("Phone Number='" + phone_number + "'");
        out.println("birthday='" + birthday + "'");

        Person person = new Person();
        person.setFirst(firstName);
        person.setLast(lastName);
        person.setEmail(email);
        person.setPhone(phone_number);
        person.setBirthday(birthday);


        PersonDAO.editPerson(person);

    }
}




