
const Banner = () => {
    return (
        <div className="flex-col md:flex-row lg:flex-row flex justify-between items-center max-w-screen-xl mx-auto">
            <div className=" p-5 md:p-2 lg:p-0 ">
                <h1 className="text-5xl font-medium mb-4">
                One Step <br /> Closer To Your <br /> <span className="text-blue-300">Dream Job</span>
                </h1>
                <p className="mb-4">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="btn btn-primary">Get Started</button>

            </div>
            <div>
                <img src="/Images/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;