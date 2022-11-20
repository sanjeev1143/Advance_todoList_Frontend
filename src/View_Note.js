import React, { useEffect, useState } from 'react'
import Note from './Note';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { Refresh } from '@mui/icons-material';


function View_Note() {
    const [read, setRead] = useState([]);
    const [load, setLoad] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const url = "http://localhost:8000/getAllTodoCards";
    const usersPerPage = 6;
    const pageVisited = pageNumber * usersPerPage;
    const displayUsers = read.slice(pageVisited, pageVisited + usersPerPage).map((reads) => <Note key={reads._id} title={reads.taskName} content={reads.comment} date={reads.date} id={reads._id} reload={Refresh} />);
    const [count, setCount] = useState(0);
    function Refresh(a) {
        setCount(count + 1);
    }

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
        getNotes();
    })
    const pagesCount = Math.ceil(read.length / usersPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div>

            {/* {read.map((reads, index) => ())
            } */}

            {load ?
                <div>
                    <div class="alert alert-warning alert-dismissible fade show" style={{ textAlign: "center" }} role="alert">
                        <strong>TimeOut </strong>Please try after sometime
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div class="spinner-border" style={{ width: "3rem", height: "3rem", position: "absolute", top: "50vh", left: "50vw" }} role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div> :
                <div>
                    <div className='elements'>{displayUsers}</div>
                    {
                        read.length > 6 ? <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pagesCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttns"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}

                        /> : null}
                </div>}
        </div>
    )
}

export default View_Note
