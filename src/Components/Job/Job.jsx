import React from 'react';
import { NavLink } from 'react-router-dom';

const Job = ({ job }) => {
    console.log(job);
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className='max-w-screen-xl mx-auto border p-4 m-3 rounded-lg'>
            <img className='mb-4' src={logo} alt="" />
            <h4 className='text-2xl mb-1'>{job_title}</h4>
            <p className='mb-2'>{company_name}</p>
            <div className='gap-4 flex mb-2'>
                <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                <button className="btn btn-outline btn-primary">{job_type}</button>
            </div>
            <div className='flex gap-2 mb-2'>
                <img src={"/Images/icons/Location.png"} alt="" /><span>{location}</span>
                <img src={"/Images/icons/money.png"} alt="" /><span>salary:{salary}</span>
            </div>
            <div className='mb-5'>
            <NavLink><button className='btn btn-primary'>View Details</button></NavLink>
            </div>
            
        </div>
    );
};

export default Job;