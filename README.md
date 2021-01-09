# React_todo_app
Todo app using React and Django
Tech Stack: Django, React
To run the project following dependencies should be installed.
1: pip install pipenv
2: pipenv install django
3: pipenv install djangorestframework django-cors-headers
4: npm install -g create-react-app
5: yarn add bootstrap reactstrap

The backend server will run on: http://127.0.0.1:8000
The Frontend server will run on: http://localhost:3000/

To start the frontend server use command: yarn start
To start the backend server use command: python manage.py runserver

The app will have three features listed as follows:
1: the task can be added having three fields: title, description and category field(i.e label)
2: the labels(buckets) can be created.
3: all the created tasks will be displayed with a checkbox and a delete button.
