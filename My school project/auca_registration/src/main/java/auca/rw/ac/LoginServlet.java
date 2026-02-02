package auca.rw.ac;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        String u = req.getParameter("username");
        String p = req.getParameter("password");
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        if (p != null && p.length() < 8) out.print("Hello " + u + ", your password is weak. Try a strong one.");
        else out.print("Welcome " + u);
    }
}