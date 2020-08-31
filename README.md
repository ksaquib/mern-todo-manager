# Todo List Manager

A Full Stack web application built with MERN Stack.

With this application you can keep track of your daily task by managing todo and exporting them as PDF.

This application uses ExpressJS framework for the backend REST APIs (authenticated) and ReactJS for front-end views. The Data is stored with NoSQL database using MongoDB/mongoose.

## Glimpse of UI

**Login:**
![Screenshot](../master/screenshots/Signin.png)

**Register:**
![Screenshot](../master/screenshots/Signup.png)

**Home Page:**
![Screenshot](../master/screenshots/Home.png)

**Add Task:**
![Screenshot](../master/screenshots/Addtask.png)

**Prioritize Task:**
![Screenshot](../master/screenshots/Priority.png)

**Edit Task:**
![Screenshot](../master/screenshots/Updatetask.png)

**Active Task:**
![Screenshot](../master/screenshots/Activetask.png)

**Active Task:**
![Screenshot](../master/screenshots/Archivetask.png)

**Export As PDF:**
![Screenshot](../master/screenshots/ExportasPDF.png)

**PDF:**
![Screenshot](../master/screenshots/activelistPDF.png)

## Installation

Use npm to install todo-manager.

**Installing dependencies:**

    npm install && npm client-install

**Running both server and client concurrently:**

    npm run dev

**Running the server:**

    npm run server

**Running the client:**

    npm run client

**Other Environment Variables:**

MONGO_URI : Url to connect with MongoDB (default value: mongodb://localhost:27017/todo)

SECRET : Secret key to sign authentication tokens. ( default value: 'mern_todo_saquib')

PORT : port to run the server (default value: 5000 )

## Folder Structure

```

    |-- server.js (Server Code - mongoConn, routes desc)
    |-- routes (Handling routes)
    |-- models (Models for collection documents)
    |-- middleware (Authenticate private routes)
    |-- controllers (Business Logic for API routes)
    |-- config (Setting env variables)
    |-- package.json
    |-- client (React-Redux App)
        |-- package.json
        |-- public
        |-- src
            |-- package.json
            |-- public
            |-- common
                |-- components (Used by all features)
                |-- constants (apiRoutes, appRoutes)
            |-- components
                |-- PDF (PDFComponent, PDFDownload)
                |-- All(other reusable components)
            |-- pages
                |-- sigin(for signin component)
                |-- sigup(for signup component)
                |-- home(main home component)
            |-- redux
                |--actions(all the actions including action type)
                |--reducers(all the reducer)
            |-- utilities
```

## Design Decisions

```bash

Pages: Login, Register, Home

Login Page - Enter email, password. Hit Login

Register Page - Enter name, email, password. Hit Register

Home Page:

- Home is where you can apply CRUD operations on the tasks.

- Page displays the active as well as archived tasks with a button to export the tasks as PDF.

- User can add, delete and update task.
  - To add task, click Add task button, it will open a
    form field - Enter the task and select the priority and hit submit Button.
  - There are 4 priorities available.
    Priority 1 (Top) ------ Priority 4 (Default)
  - Every row item in active tasks has actions like archive, edit and delete button.
  - When you click on the archive then it goes to archive tasks column and on clicking on
    the edit a modal will appear with the current value and you can change the value as per your choice.
  - When you delete the task it will go red and the disappear and when you click on archive it will go
    green and disappear.
  - With active and archived buttons there is a export as PDF button
    If on the active tab button will take the active task and create the PDF
    If on the archive tab button will take the archive task and create the PDF

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
