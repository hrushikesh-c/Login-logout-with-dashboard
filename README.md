# Login-logout-with-dashboard

The following webapplication containes the login/register page with passport authentication. Further more on login it shows the dashboard and can compare user language proficiency with other users. The data for the following application is stored in MongoDB Atlas cloud platform.

Technologies/language/software/framework used -
- 1- Node.js
- 2- HTML, CSS, Javascript, Bootstrap
- 3- Express, Mongoose, Passport, ejs, bcrypt, coonect-flash.
- 4- MongoDB, MongoDB Atlas
- 5- git
- 6- herouku - for deployment

Work flow

- Get the server started on local port with the help of nodejs, add the required dependencies as mentioned above and connect the project with mongoDB Atlas cloud platform.
- The web-application is built using the bootstap, also the 'flatly' - theme is used from bootswatch.com for this application.
- First the front end part is done for the "Welcome/Starter page", then the "Register page" and finaly for the "Login page".
- Then the validation part for login and register page is done.
- finally the data is stored in db with register page, the validation code is further improved to prevent same user login.
- After the whole process for security reasons the password for user is encripted with the help of bcrypt.
- Further the "Dashboard page" is added to the project and it is authenticated such that it cannot be accessed without the user login.
- Finally the data is collected for used language proficiency and the percentile result is calculated for the current user, the percentile score is in comparison with other users present in db.

Future work/ Improvement
- Improving the UI for dashboard and adding more points for effective skill analysis.
- Adding graphical representation of the user results such as bar graphs, pie charts, histograms, line graphs, etc
- User can choose the grahical representation as per his choice.
