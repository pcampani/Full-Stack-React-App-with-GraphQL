import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/client';
import * as Yup from 'yup';

import  * as query from '../queries'

export default function AddGame() {

  const [addGame] = useMutation(query.ADD_GAME, {
    refetchQueries:[{query:query.FETCH_GAMES}]
  });

  const initialValues = {
    title: "",
    rating: 0,
    genre: "",
    publisher: "",
  }
  
  const validationSchema = Yup.object({
    title: Yup.string().required('Please enter game title'),
    rating: Yup.number(). required('Rating cant be 0'),
    genre: Yup.string().required('Please choose game genre'),
    publisher: Yup.string().required('Please indicate game publisher')
  })
  
  const handleSubmit = function (values) {
    const {title, rating, genre, publisher} = values
    addGame({variables: {
      title,
      genre, 
      rating, 
      publisher
    }
  }
  )}

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <Field name="title" as={TextField} label='Title' />
        <ErrorMessage name="title"/>
        <Field name="genre" as={TextField} label='Genre' />
        <ErrorMessage name="genre"/>
        <Field name="rating" as={TextField} type="number" label='Rating' />
        <ErrorMessage name="rating"/>
        <Field name="publisher" as={TextField} label='publisher' />
        <ErrorMessage name="publisher"/>
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </Form>
    </Formik>
  )
}
