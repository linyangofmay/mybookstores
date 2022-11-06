# iBook
iBook is a web-application clone inspired by [Yelp](https://www.yelp.com/), that
allows users to discover and review local bookstores. It also provides a platform for
bookstore owners to advertise their business.

* [iBook](https://ibooklyn.herokuapp.com/)







### Please see below links to Project Wiki:
##### [API Documentation](https://github.com/linyangofmay/mybookstores/wiki/API-Routes)

##### [DataBase Schema](https://github.com/linyangofmay/mybookstores/wiki/DataBase-Schema)

##### [Feature List](https://github.com/linyangofmay/mybookstores/wiki/Feature-List)

##### [Redux State](https://github.com/linyangofmay/mybookstores/wiki/Redux-State-Shape)

##### [User Story](https://github.com/linyangofmay/mybookstores/wiki/User-Story)







### This project is built with :


![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/-SQLAlchemy-orange?style=for-the-badge)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)








# Run Locally

  1) Clone this repository
  2) Frontend instructions: cd into react-app directory:  cd react-app
     and run command : npm install
  3) Make an .env file under the root directory and copy the content of
     .env.example to the .env file.

  4) Backend instructions : open another terminal at the same time and run the
     following command in order :
     pipenv install -r requirements.txt
     In the following order:
     pipenv shell ; flask db upgrade ; flask seed all; flask run.
  5) With the second terminal, run npm start in the react-app directory.







# Features Direction

  HomePage
  <img src ='./react-app/public/FeatureImages/Homepage1.png>

  <img src ='./react-app/public/FeatureImages/Hompage2.png>






  Login
  <img src="./react-app/public/FeatureImages/Login.png>





  Sign up
  <img src="./react-app/public/FeatureImages/sing_up.png>




  BookstoreDetail Page
  <img src = './react-app/public/FeatuerImages/bookstore details.png>




  My Bookstores Listings
  <img src="./react-app/public/FeatureImages/Listcurrentuserbookstore.png>





  List a bookstore
  <img src="./react-app/public/FeatureImages/list_a_Bookstore.png>





  My reviews
  <img src="./react-app/public/FeatureImages/Listcurrentuserreviews.png>





  Create a review
  <img src="./react-app/public/FeatureImages/craete_a_review.png>













# Future Focus
1. Category and search features.

2. Sorting feature.

3. Location feature.

4. AWS uploading images.
