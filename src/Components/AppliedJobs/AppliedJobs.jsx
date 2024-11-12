import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getJobApplication } from '../Utility/localStorage';

const AppliedJobs = () => {

    const [appliedJob,setAppliedJob] = useState([])
    const jobs = useLoaderData();

    useEffect(()=> {
        const storedJobIds = getJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobs, storedJobIds, jobsApplied);
            jobsApplied.push(jobs)
            setAppliedJob(jobsApplied)
        }
        
    },[])

    return (
        <div>
            {
                appliedJob.map(applyJob => <div key={applyJob.id} applyJob={applyJob} className='max-w-screen-xl mx-auto my-10 p-5 md:-2 lg:p-0'>
                    <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                      <img className='w-20 h-20  rounded-full md:rounded-none lg:rounded-none md:h-full lg:h-full md:w-full lg:w-full '
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{applyJob.job_title}</h2>
                      <p>Click the button to watch on Jetflix app.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
                  )
            }
        </div>
    );
};

export default AppliedJobs;