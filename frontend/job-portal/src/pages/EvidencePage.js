import { useEffect, useState } from 'react'

import EvidenceDetails from '../component/EvidenceDetails'
import EvidenceForm from '../component/EvidenceForm'
import JobContext from '../context/context'
const EvidencePage = () => {
    
    const [job,setjobs]=useState()
    const [c,setc]=useState([])
    useEffect(() => {
        const fetchApplications=async()=>{
       const token=JSON.parse(localStorage.getItem('token'))
            console.log(token)
            const response = await fetch('/applications/jobApplications/employer',{
                headers:{'token':token},
                method:'GET'
            }
            )
            const json = await response.json()
            if (response.ok) {
                setjobs([...json])
            }else{
                alert('Unsuccessful')
            }
        }
        fetchApplications()
    },[c])

    return (
        <JobContext.Provider value={{c,setc}}>
        <div className="home">
            <div className='buyer'>
                {job && job.map((job) => (
                    <EvidenceDetails key={job._id} job={job} />
                ))}
            </div>
            <EvidenceForm />
        </div>
        </JobContext.Provider>
    )
}

export default EvidencePage