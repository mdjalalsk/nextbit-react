
const Experience = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-y-3">
                <label>Experience</label>
                <input type="text" placeholder="Enter Company Name" name="company_name"
                       className="input input-bordered input-primary w-full max-w-xs"/>
                <input type="text" placeholder="Enter your position" name="position"
                       className="input input-bordered input-primary w-full max-w-xs"/>
                <input type="number" placeholder="Enter your Experience year" name="experience_year"
                       className="input input-bordered input-primary w-full max-w-xs"/>
                <div className="flex w-full max-w-xs ">
                    <label className="cursor-pointer label">
                        <input type="checkbox"  className="checkbox checkbox-accent"/>
                        <span className="label-text ml-2">Looking for new role ?</span>
                    </label>
                </div>


            </div>
        </div>
    );
};

export default Experience;