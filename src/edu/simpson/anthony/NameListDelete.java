package edu.simpson.anthony;

import javax.servlet.http.HttpServlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by Anthony on 3/2/2017.
 */
public class NameListDelete extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        out.println("Delete Name List Delete");

        // Grab the data we got via a parameter
        String id = request.getParameter("id");


        // Just print the data out to confirm we got it.
        out.println("id='" + id);


        PersonDAO.deletePerson(id);
    }
}
