import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ContactPageIcon from '@mui/icons-material/ContactPage';
function SideBar() {


    const [mode, setmode] = useState(false);
    const nightMode = () => {
        setmode(true);
        console.log(document.body.className);
        document.body.classList.add("night_mode");
        console.log(document.body.className);
    }
    const dayMode = () => {
        setmode(false);
        document.body.classList.remove("night_mode");
        console.log(document.body)
    }

    return (




        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">{mode ? <Button onClick={dayMode} >LightMode<LightModeIcon fontSize='large' htmlColor='#6200EE' /></Button> : <Button onClick={nightMode}>DarkMode<DarkModeIcon fontSize='large' htmlColor='#6200EE' /></Button>}</a></li>
            <li><a class="dropdown-item" href="https://www.linkedin.com/in/sanjeev-reddy-b-695622229" target="_blank" rel="noreferrer noopener">Contacts<ContactPageIcon fontSize='large' htmlColor='#6200EE' /></a></li>
        </ul>


    )
}

export default SideBar
