import './App.css';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import React, { useState, useEffect } from 'react';
import { JsonForms } from '@jsonforms/react';
import Axios from 'axios'



// setting up the JsonForms
const schema = {
                  "type": "object",
                  "properties": {
                    "email": {
                      "type": "string",
                      "minLength": 3,
                      "description": "Please enter your email"
                    },
                    "name": {
                      "type": "string",
                      "minLength": 3,
                      "description": "Please enter your name"
                    },
                    "year": {
                      "type": "string",
                      "enum": ["year1", "year2", "year3", "year4", "year5", "year6", "postgrad"],
                      "description": "Please enter your current year of study"
                    },
                    "gender": {
                      "type": "string",
                      "enum": ["Male", "Female", "Others"],
                      "description": "Please enter your gender"
                    },
                    "language": {
                      "type": "string",
                      "enum": ["English", "Mandarin", "Cantonese", "French", "Spanish"],
                      "description": "Please enter your preferred language"
                    },
                    "do you smoke": {
                      "type": "string",
                      "enum": ["Yes", "No"],
                    },
                    "are you fine with a smoking roommate": {
                      "type": "string",
                      "enum": ["Yes", "No"],
                    }
                  }
                }

const uischema = {
                      "type": "VerticalLayout",
                      "elements": [
                          {
                              "type": "HorizontalLayout",
                              "elements": [
                                  {
                                      "type": "Control",
                                      "scope": "#/properties/email"
                                  }
                              ]
                          },
                          {
                              "type": "HorizontalLayout",
                              "elements": [
                                  {
                                      "type": "Control",
                                      "scope": "#/properties/name"
                                  },
                                  {
                                      "type": "Control",
                                      "scope": "#/properties/year"
                                  },
                                  {
                                      "type": "Control",
                                      "scope": "#/properties/gender"
                                  }
                              ],
                          },
                          {
                              "type": "HorizontalLayout",
                              "elements": [
                                  {
                                      "type": "Control",
                                      "scope": "#/properties/language"
                                  },
                                  {
                                      "type": "Control",
                                      "scope": "#/properties/do you smoke"
                                  },
                                  {
                                      "type": "Control",
                                      "scope": "#/properties/are you fine with a smoking roommate"
                                  }
                              ]
                          }
                      ]
                    }

const initialData = {
                      "email": "johndoe2003@gmail.com",
                      "name": "John Doe",
                      "year": "year1",
                      "gender": "Female",
                      "language": "English",
                      "do you smoke": "No",
                      "are you fine with a smoking roommate": "No"
                    }


function App() {
  const [data, setData] = useState(initialData);
  return (
    <div className='App'>
      <head>
          <title>Match!</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"></link>
      </head>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, _errors }) => setData(data)}
      />
      <button type="submit" class="btn btn-primary" onClick={ submit }>Submit</button>
    </div>
  );
  function submit() {
     const email = data.email;
     const name = data.name;
     const year = data.year;
     const gender = data.gender;
     const language = data.language;
     const doYouSmoke = data["do you smoke"];
     const smokingRoommate = data["are you fine with a smoking roommate"];
     console.log(gender);

     Axios.post('http://localhost:3001/api/insert', {
         detail_name: name,
         detail_email: email,
         detail_year: year,
         detail_gender: gender,
         detail_language: language,
         detail_doYouSmoke: doYouSmoke,
         detail_smokingRoommate: smokingRoommate
     }).then(() => {
        alert('successful insert!');
     });
  }
}

export default App;