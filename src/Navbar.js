import React, { useEffect, useState } from 'react'
//import DescriptionIcon from '@mui/icons-material/Description';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from '@mui/material/Button';
import SideBar from './SideBar';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
function Card(props) {
    useEffect(() => {
        setTimeout(() => {
            window.location.reload()
        }, 5000)

    })
    return (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

function Navbar() {
    const [read, setRead] = useState([]);
    const [load, setLoad] = useState(false);
    const url = "http://localhost:8000/getAllTodoCards";

    useEffect(() => {
        const getNotes = async () => {
            try {

                await axios.get(url).then(res => {
                    setRead(res.data);
                    setLoad(false);
                })
            } catch (e) {
                setLoad(true);
            }
        };
        setFound(read.filter((value) => value.taskName.toLowerCase() == search.toLocaleLowerCase()));
        getNotes();
    }, [read])
    const [search, setSearch] = useState("");
    const [found, setFound] = useState([]);
    function onSearch(e) {
        setSearch(e.target.value)
    }
    function searchData() {
        // // window.location.reload();
        // setFound(read.filter((value) => value.title.toLowerCase() == search.toLocaleLowerCase()));
        // setSearch("");

    }

    return (
        <div className='navBar'>

            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid column justify-content-start">
                    <div class="dropdown">
                        <Button class="btn  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <DehazeIcon htmlColor='#FFF' fontSize='large' />
                        </Button>
                        <SideBar />
                    </div>
                    <img src={require('./asserts/logo.png')} alt="LOGO" className='discIcon' />
                    {/* <DescriptionIcon htmlColor='#FFF' fontSize='large' className='discIcon' /> */}
                    <div className='headding'>Notes</div>
                    <input onChange={onSearch} placeholder="Enter the title you want to search..." className='searchIp'
                        value={search} /><Button onClick={searchData}>
                        <SearchIcon fontSize='large' htmlColor='white' />
                    </Button>
                </div>
            </nav>
            {<div>{found && found.map((value) =>
                <Card title={value.taskName} content={value.comment} />)}
            </div>}
        </div>
    )
}

export default Navbar
// found.length === 0 ? :