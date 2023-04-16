import 'material-symbols';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import 'material-symbols'
import '../index.css'

import JobContext from '../context/context'

import { useState,useEffect,useContext } from 'react'
const EvidenceDetails = ({  job }) => {
    const [status,setStatus]=useState('')
    const {setc}=useContext(JobContext)
  

    const updateInfo = async(e) => {
         
    
         
         const application ={
            status:status
         }
         const token = JSON.parse(localStorage.getItem('token'))
        const update = await fetch('/applications/jobApplications/' + job._id, {
            method: 'PUT',
            body: JSON.stringify(application),
            headers: {
                'Content-Type': 'application/json'
                ,'token':token
            }
        })

        if(!update.ok){
            alert('Authorize Yourself')
        }
        setc([1,2])
    }
     const handleOptionChange = (event) => {
     setStatus(event.target.value);
     };


    return (
        <div className="buyer-details">
            <p><strong>Resume: </strong>{job.resume}</p>
            <p><strong>covermessage: </strong>{job.coverMessage}</p>
            <p><strong>status: </strong>{job.status}</p>
           
        <label className="label1">Change Status</label>
        <select className="dropdown1" onChange={handleOptionChange}>
            <option value="">Select Option</option>
            <option value="accepted">accepted</option>
            <option value="rejected">rejected</option>
        </select>
        <button className='a' onClick={updateInfo} >Update</button>
      

        </div>
    )
}

export default EvidenceDetails