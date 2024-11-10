
const CategoryList = () => {
    return (
        <div className="p-4 md:p-2 lg:p-0">
            <div className="mt-20 mb-10">
            <h2 className="text-3xl text-center mb-3">Job Category List</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row gap-4 justify-around mb-20 items-center">
            <div className="shadow-md w-48 h-36 border p-4 rounded-lg">
                <img src="/Images/icons/accounts.png" alt="" />
                <h5 className="text-xl">Account & Finance</h5>
                <small>300 Jobs Available</small>
            </div>
            <div className="shadow-md w-48 h-36 border p-4 rounded-lg">
                <img src="/Images/icons/creative.png" alt="" />
                <h5 className="text-xl">Creative Design</h5>
                <small>100+ Jobs Available</small>
            </div>
            <div className="shadow-md w-48 h-36 border p-4 rounded-lg">
                <img src="/Images/icons/marketing.png" alt="" />
                <h5 className="text-xl">Marketing & Sales</h5>
                <small>150 Jobs Available</small>
            </div>
            <div className="shadow-md w-48 h-36 border p-4 rounded-lg">
                <img src="/Images/icons/chip.png" alt="" />
                <h5 className="text-xl">Engineering Job</h5>
                <small>224 Jobs Available</small>
            </div>
        </div>
        </div>
    );
};

export default CategoryList;