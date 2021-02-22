# Notes-App-NoSQL
notes app using express as a framework for node, with a NoSQL database(MongoDB)
i REALLY REALLY wanted to host this on heroku but as it turns out you cant do it for free with mlab anymore..
after november 2020 you have to pay inorder to use the mongoDB database

anyways if you wanna use this just create your normal express framework, copy app.js or server.js
copy the script from /public/scripts same with the stylesheets, then go to views and copy all the files.
Procfile isnt necessary as it was for hosting it on heroku :(

after this just create a collection called notes in using mongoDB and have a field with the name note
start up your mongo community server.

npm start, open http://localhost:3000/index1(whatever port probably 3000)
and BOOM you have a website running with databases and everything!

tbh just create the framework and only download the useful files(app.js, package files, public files, routes files and views files)

# To-Do
<ul>
  <li>not use mongoDB and host it for free, that would be neat</li>
  <li>add a how to use page</li>
  <li>make it pretty</li>
  <li>RESTful</li>
</ul>

# References

html, css and the javascript used was pretty simple...
for integrating the database with my code https://tinyurl.com/792yd896
this was pretty simple to follow and acted as a basic backbone
