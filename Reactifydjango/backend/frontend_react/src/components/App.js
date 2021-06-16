import React,{useEffect, useState} from 'react'
import {render} from 'react-dom'
import axios from 'axios'

const App = () => {

    // const [toggle, setToggle] = useState(true)

    // const handleClick = () => {
    //     setToggle(!toggle)
    // }

    //     const hook = () => {
    //         axios
    //         .get('http://127.0.0.1:8000/verified/generic/list/')
    //         .then(response => {
    //         setStudent(response.data)
    //         })
    //     }

    //     useEffect(hook, [])
    //     return (
    //         <div>
    //             <p>Hello</p>
    //             {student.map(students =>    
    //              <p>Name : {students.name}</p>
    //               )}
            
    //         </div>
    //     )
    // }

    // const ToShow = () => {
    //     if (toggle){
    //         return <Home />
    //     }
    //     else{
    //         return (<Redirect to = 'http://127.0.0.1:8000/superuser/update/' />)
    //     }
    // }

    const Home = () => {
        const [student, setStudent] = useState([])

        const [searchStudent, setSearchStudent] = useState('')

        const hook = () => {
            axios
            .get('http://127.0.0.1:8000/verified/generic/list/')
            .then(response => {
            setStudent(response.data)
            console.log(response.data)
            })
        }

        useEffect(hook, [])

        const studentToShow = student.filter(stud => (stud.name.toUpperCase()===(searchStudent.toUpperCase())))

        const handleChange = (event) =>{
            setSearchStudent(event.target.value)
        }
        return(
            <div>
            <link rel="stylesheet" href='https://unpkg.com/@webpixels/css@1.0/dist/index.css'></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <div class="input-group mb-3" style = {{padding:"20px"}}>
                <input type="text" class="form-control" placeholder="Search Student" aria-label="Search Student" aria-describedby="basic-addon2" onChange = {handleChange} value = {searchStudent} />
                <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Search</button>
                </div>
                </div>
            <h6>Searching Clearance table of {searchStudent} </h6>   
            <div class="p-10 bg-surface-secondary">
                    <div class="container">

                <div class="card">
                    <div class="table-responsive">
                        <table class="table table-hover table-nowrap">
                            <thead class="thead-light">
                                <tr>
                                    <th scope='col'>Student ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Amount Left</th>
                                    <th scope="col">Clear</th>
                                    <th scope="col">DateCleared</th>
                                     <th data-label='update'>
                                                            <a class="btn btn-primary text-light" href='http://127.0.0.1:8000/superuser/update/'>Update</a>
                                                        </th>
                                    <th></th>
                                </tr>
                            </thead>  
                            {studentToShow.map((students,i) => 
                                            <tbody>
                                                    <tr>
                                                        <td data-label="id">
                                                            <span>{students.student}</span>
                                                        </td>
                                                        <td data-label="Department">
                                                            <span key = {i}>{students.name}</span>
                                                        </td>
                                                        <td data-label="Department">
                                                            <span>{students.Department}</span>
                                                        </td>
                                                        <td data-label="Email">
                                                            <span>{students.Email}</span>
                                                        </td>
                                                        <td data-label="Amount Left">
                                                        <p>Null</p>
                                                        </td>
                                                            <td data-label="DateCleared">
                                                                <span class="badge bg-info text-primary">{students.Clear}</span>
                                                            </td>
                                                        <td data-label="">
                                                            <a class="text-current" href="#">{students.DateCleared}</a>
                                                        </td>
                                                       
                                                    </tr>

                                            </tbody>)}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return( 
    <Home />
    )
}

export default App;



const container = document.getElementById("app");
render(<App />, container);