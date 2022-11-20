import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import moment from 'moment/moment';

function CreateNote() {
    const [lists, setlists] = useState({
        taskName: "",
        comment: "",
        date: ""
    })
    const url = "http://localhost:8000/addtodoCard";


    const [expand, setExpand] = useState(false);

    function addNote(e) {

        var { name, value } = e.target;
        console.log(value);


        setlists((p) => {
            return {
                ...p, [name]: value,
            };
        })

    }

    const addNotes = async () => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        lists.date = (today.toLocaleDateString());
        axios.post(url, lists);
        console.log(lists);
        setlists({
            taskName: "",
            comment: "",
            date: ""
        })

    }

    return (
        <div className='createNote'>
            <form className='noteBox' method='POST'>

                {expand ? <div> <input type='text' name='taskName' placeholder="Enter the task..." value={lists.taskName} onChange={addNote} required className='taskname' />
                </div>
                    : null}
                <textarea rows="" column="" name='comment' onChange={addNote} onClick={() => { setExpand(true) }} onDoubleClick={() => { setExpand(false) }} placeholder='Write a comment...' value={lists.comment}></textarea>
                {expand ? (lists.taskName && lists.comment) ? < Button className='addnote' onClick={() => { addNotes() }}><AddIcon fontSize='large' /></Button> : null : null}
            </form>
        </div >
    )
}

export default CreateNote
