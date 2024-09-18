# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




                                        SUPERHERO GRIEVANCE WEBSITE
                                        ---------------------------
          The superhero is GARUDA.This website will allow common people to log their complaints, which will be reviewed by the superhero. Additionally there is a seperate secure dashboard where the superhero can view all the grievances. The dashboard allow the superhero to filter search by users name, and date.

          Website Pages
          -------------
          - Home Page - introducing superhero (GARUDA)
            Path - http://localhost:5173/

          - About Page - mission and goal
            Path - http://localhost:5173/about

          - Grievance Form Page - form fields (name,email,contact,issue description)
                                  to register complaints with validation.
            Path - http://localhost:5173/grievanceForm

          - Contact page - contact details
            Path - http://localhost:5173/contact



          Superhero Dashboard
          -------------------

          Path - http://localhost:5173/herodashboard

           Superhero Dashboard with a login system jwt

          - superhero can view total number of grievances
          - superhero can view total number of users
          - superhero can view all grievances
          - superhero can view all users and contact details
          - superhero can Filter and search(by date and name) grievances



        1. Created React App using veet
           -installing vite globally - npm i -g create-vite
            -installing in project - npm create vite@latest react-app -- --template react

            React App File & Folder Structure
                    ------------
            package.json - npm configuaration file for the project
            package-lock.json - contains version history all packages installed in the project
            gitignore - contains files/folder name which is ingnored while adding to git
            index.html - entry page to react app
            src folder - define react app here
            asset folder - used to hold media files used in react app

            - to run react app - npm run dev

        2. Packages installed in project
           - React-Bootstrap - npm install react-bootstrap bootstrap
           - React router dom - npm i react-router-dom
           - React Toastify - npm i react-toastify
           - mdb-react-ui-kit - npm i mdb-react-ui-kit
           - axios - npm i axios - npm i axios
           - express - npm i express
           - cors - npm i cors
           - dotenv - npm i dotenv
           - node-modules - npm i node-modules
           - mongoose - npm i mongoose
           - jsonwebtoken - npm i jsonwebtoken

        3. Backend
           Backend (Node.js) and database (MongoDB)

             Api creation
             ------------
           - Register - http://localhost:3000/register
           - Login - http://localhost:3000/login
           - Post Grievances - http://localhost:3000/grievance/add
           - Get Grievances - http://localhost:3000/get-dashboard-grievance


        