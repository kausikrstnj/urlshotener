# urlshotener-frontend
## Project Details
- Designed a complete authentication system of Login, Registration, Forgot Password.
- The following user details collected and stored in the Database.
- The password encrypted.
- The two-step activation workflow is an implementation of a two-step registration.
- If a user not registered should not be allowed to login and a valid message should be displayed to the user.
  
### The following are the process flows in forgot password:
- The user clicks on a forgot password link that redirects the user to forgot my password page.
- On the page verify and validate the user’s email address then allow the user to click the forgot password button.
- Once the user email address is valid, then the system sends an email containing the randomly generated token encoded URL for the new password page and token URL is stored in a database for temporary use.
- The user clicks on the URL to reset his/her password.
- Once after the password is created, then the randomly generated token URL will be deactivated in the database and a new password will be updated to the database for the corresponding user’s email address.

## Installation Dependencies:
- npm install @emotion/react
- npm install @emotion/styled
- npm install @mui/material
- npm install @sendgrid/mail
- npm install axios
- npm install bcryptjs
- npm install body-parser
- npm install bootstrap-icons
- npm install crypto
- npm install dotenv
- npm install ejs
- npm install express
- npm install express-session
- npm install form-data
- npm install jsonwebtoken
- npm install mailgun.js
- npm install mongoose
- npm install nodemailer
- npm install nodemon

## Working Link:
  https://urlshortener-backend-k4tk.onrender.com
