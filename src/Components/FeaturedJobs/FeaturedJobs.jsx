import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs,setJobs] = useState([]);

    const [dataLLength, setDataLength] = useState(4)

    useEffect(()=> {
        fetch('/public/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div className='p-4 md:p-2 lg:p-0'>
            <div>
                <h3 className='text-3xl text-center mb-3'>
                Featured Jobs
                </h3>
                <p className='text-center mb-12'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                {
                    jobs.slice(0,dataLLength ).map(job => <Job key={job.id} job={job} ></Job>)
                }
            </div>
            <div className='flex justify-center my-5'>
                <button onClick={()=> setDataLength(jobs.length)} className='btn btn-outline btn-primary'>Show More</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;