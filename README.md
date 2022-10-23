# Tech Blog

## Description
## In this application, you will find a simple blog form built using an MCV model. When the user loads the application, a home page is displayed with current plog posts (if any). The user can then either sign up for an account, or log into an existing one. The email and password are validated, and the password are stored in the database as a hash value using bcrypt. Once the user login, the user can post blogs, update or delete their current posts, and comment on other blog posts. All posts and comments are stored and sent to the database.
----
## Installation

A user can clone the files found in this repo then install the required node packages by running `npm i` in the command-line application. Then the application can be either deployed to Heroku, or run on your local machine. To run on your local machine, first use the `schema.sql` file in the db folder to create the database using `MySQL` shell commands. Next, create and use a `.env` file to store the MySQL username and password. Refer to the file `.env.EXAMPLE` on how to store those sensitive data. Next, seed the database by running the command `node index.js` on the file located in the seeds folder, or by simplying running `node seeds/index.js` in the root directory. Finally, run the command `node server.js` in terminal and navigate to the live app on the port specified.

----
## [Link to Depolyed Application on Heroku](https://tech-blog-mvc-9.herokuapp.com/)
## [Link to Code on GitHub](https://github.com/momaki9/Tech_Blog)
----
## ![Screenshot of Homepage](/public/assets/img/homepage_ss.png)
----

## License

This application is unlicensed

## Contributing

Visit my GitHub or Send me an email

## Tests

There are no tests written at this time

---
## Questions

If you have any questions, please visit my GitHub or send me an email.

[GitHub Link](https://github.com/momaki9)

[Email Me!](mailto:mostafa_m9@yahoo.com)