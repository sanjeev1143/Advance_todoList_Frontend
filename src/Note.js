import React, { useState } from 'react'
import './App.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';
function Note(props) {
    const [updateNote, setUpdateNote] = useState(false);
    const [change, setChange] = useState({
        taskName: props.title,
        comment: props.content
    })
    function addNote(e) {
        const { name, value } = e.target;
        console.log(value);
        setChange((prv) => {
            return {
                ...prv, [name]: value,
            };
        })

    }
    const Update = () => {

        setUpdateNote(true);

    }
    const save = async () => {
        console.log(props.id);
        await axios.put(`http://localhost:8000/${props.id}`, change).then(response => {
            console.log(response);
            props.reload()
        })
            .catch(err => {
                console.log(err);
            });
        setUpdateNote(false);
    }
    const deleteNote = async () => {
        await axios.delete(`http://localhost:8000/${props.id}`)
    }

    return (
        <div className='notes'>

            {(updateNote ?
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="note_inputs">
                    <input value={change.taskName} onChange={addNote} name="taskName" /><textarea value={change.comment} onChange={addNote} name="comment" />
                    <div className='updateIcons'><Button onClick={save}><SaveIcon fontSize='large' /></Button></div>
                </div> :
                (<div >
                    <div className='cardHead'>
                        <h2>{props.title}</h2>
                        <h6>{props.date}</h6>
                    </div>
                    <p>{props.content}</p>
                    <div className='updateIcons'><Button onClick={deleteNote}>
                        <DeleteForeverIcon fontSize='large' /></Button>
                        <Button onClick={Update}><EditIcon fontSize='large' /></Button>
                    </div>
                </div>))
            }

        </div>
    )
}

export default Note
