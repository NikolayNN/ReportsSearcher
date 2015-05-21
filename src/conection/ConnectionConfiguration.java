package conection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by Nikolay on 20.05.2015.
 */
public class ConnectionConfiguration {
          public static Connection getConnection(){
            Connection connection=null;

            try {

                Class.forName("com.mysql.jdbc.Driver");
                connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/reportsBD", "root", "159357456");

            } catch (SQLException e) {
                e.printStackTrace();
            }
            catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
            return connection;
        }

    // ConvertData connection to data base
        public static void main(String[] args) {
            Connection connection = null;

            connection = ConnectionConfiguration.getConnection();
            if (connection != null) System.out.println("estabilished");

        }
    }


