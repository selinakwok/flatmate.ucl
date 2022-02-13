# Flatmate.UCL
- Flatmate.UCL is the first flatmate finder designed specifically for UCL students
- Uses matching algorithms to find the best flatmates for a student based on their input preferences 


## 1. Database and UI (MySQL, javascript, html etc.)
- Creates an aesthetic UI (react app) for users to enter their personal details and flatmate/accommodation preferences
- Stores data in a database (MySQL)

### How to use:
- Run App.js (app) and index.js (backend)
- Enter required information in the app
- Data is stored in specified database with MySQL


## 2. Backend: Google Colab
- Takes data from google sheets
- Runs matching algorithm on google colab using Python and pandas
- Sends email to users with a list of other potential users with a high compatibility score 

### How to use:
- Navigate to google form through the wix website (https://ngkawaialicea.wixsite.com/flatmate)
- Input required information on google form
- Code generates a list of users based on results of the matching algorithm
- An email containing the list will be sent to the user.
