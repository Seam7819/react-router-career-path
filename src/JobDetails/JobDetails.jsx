import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

    const jobs = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)
    const job = jobs.find(job => job.id === intId)
    console.log(job);

    return (
        <div className='max-w-screen-xl mx-auto'>
            <h1 className='text-2xl font-bold text-center mt-10 mb-24'>Job Details</h1>

            <div className='flex flex-col md:flex-col lg:flex-row p-6 md-p-2 lg:p-0 justify-between'>
                <div className='w-2/3 mb-5'>
                <p className='mb-7'><span className='text-lg font-bold'>Job Description :</span> {job.job_description}</p>
                <p className='mb-7'><span className='text-lg font-bold'>Job Responsibility :</span> {job.job_responsibility}</p>
                <p className='text-lg font-bold mb-7'>Educational Requirements:</p>
                <span className='mb-7'>{job.educational_requirements
                }</span>
                <p className='text-lg font-bold mb-7'>Experiences:</p>
                <span>{job.experiences}</span>
                </div>
                <div className=' w-full md:w-full lg:w-1/3'>
                    <div className='p-5 border rounded-lg'>
                    <h4 className='tex-xl font-bold text-left mb-5'>Job Details</h4>
                    <div className='flex mb-1'>
                    <span className='font-bold text-sm'>Salary:</span><img src={"/Images/icons/money.png"} alt="" /> <span>{job.salary} (per month)</span>
                    </div>
                    <div className='mb-4'>
                    <span className='font-bold text-sm'>Job Title:</span>  <span>{job.job_title}</span>
                    </div>
                    <p className='font-bold text-sm mb-5'>Contact Information:</p>
                    <span className='font-bold text-sm'>Phone:</span><span>{job.contact_information
.phone                    }</span> <br />
                    <span className='font-bold text-sm'>Email:</span><span>{job.contact_information
.email                    }</span> <br />
                    <span className='font-bold text-sm'>Address:</span><span>{job.contact_information
.address                    }</span>
                    </div>
                    <button className='w-full btn btn-primary my-5'>Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;