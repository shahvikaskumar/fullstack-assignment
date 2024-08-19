## Backend Part

The following step to run the backend part:-

    1. Goto the backend folder using "cd backend" command.
    2. Run the command "npm install".
    3. The default database connection is "mongodb://  localhost:27017/helpcenter". If your mongodb server connection is different then goto the .env file and  change in "MONGODB_URL" path.
    4. The default server is running on 5000 port. If your system 5000 port is busy then you can goto the .env file and change in PORT value.
    5. Finally run the command "npm run dev" to  start backend part locally.

## Frontend Part

The following step to run the backend part:-

    1. Goto the backend folder using "cd frontend" command.
    2. Run the command "npm install".
    3. If any change in backend port then goto the .env file and change in REACT_APP_API_URL port value.
    4. Finally run the command "npm start" to run the frontend part.
