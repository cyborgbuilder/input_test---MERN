import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import axios from 'axios';



function Notes() {

    const [input, setInput ] = useState({
        title: '',
        content: ''
    })


    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();

        const newNote = {
            title: input.title,
            content: input.content
        }
        
        axios.post("http://localhost:3001/create", newNote);
    }


  return (
    <div>
        <form>
            <Form.Group className='mb-3'>
                <Form.Control onChange={handleChange} value={input.title} placeholder='Title' name='title' />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Control onChange={handleChange} value={input.content} placeholder='Content' name='content' />
            </Form.Group>

            <Button onClick={handleClick} variant="primary" type="submit">
        Submit
      </Button>
        </form>
    </div>
  )
}

export default Notes