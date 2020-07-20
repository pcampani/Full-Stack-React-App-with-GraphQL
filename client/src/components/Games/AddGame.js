import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/client';

import * as Yup from 'yup';
import  * as query from '../queries'

const useStyles = makeStyles((theme) => ({
  form: {
    display: "grid"
  },
  formField: {
    width: "250px",
    display: "inline-block"
  },
  button: {
    width: "250px",
    padding: "none"
  }
}));

export default function AddGame() {
  const classes = useStyles();
  const [addGame] = useMutation(query.ADD_GAME, {
    refetchQueries:[{query:query.FETCH_GAMES}]
  });

  const initialValues = {
    title: "",
    rating: "",
    genre: "",
    publisher: "",
  }
  
  const validationSchema = Yup.object({
    title: Yup.string().required('Please enter game title'),
    rating: Yup.number(). required('Rating cant be 0'),
    genre: Yup.string().required('Please choose game genre'),
    publisher: Yup.string().required('Please indicate game publisher')
  })
  
  const handleSubmit = function (values, {resetForm}) {
    const {title, rating, genre, publisher} = values
    addGame({variables: {
      title,
      genre, 
      rating, 
      publisher
    }
  }
  )
  resetForm({values: ""})
}

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={classes.form}>
        <Field name="title" as={TextField} label='Title' className={classes.formField} />
        <ErrorMessage name="title"/>
        <Field name="genre" as={TextField} label='Genre' className={classes.formField}/>
        <ErrorMessage name="genre"/>
        <Field name="rating" as={TextField} type="number" label='Rating' className={classes.formField} />
        <ErrorMessage name="rating"/>
        <Field name="publisher" as={TextField} label='publisher' className={classes.formField} />
        <ErrorMessage name="publisher"/>
        <Button variant="contained" color="primary" type="submit" className={classes.button}>Submit</Button>
      </Form>
    </Formik>
  )
}
