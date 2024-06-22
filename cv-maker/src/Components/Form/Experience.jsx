
const Experience = ({index, experience, onChange}) => {

    const { companyName, position, experienceYear, lookingForRole } = experience;

    const handleInputChange = (e) => {
        onChange(index, e); // Call the onChange function passed from parent with index and event
    };

    const handleCheckboxChange = (e) => {
        onChange(index, {
            target: {
                name: 'lookingForRole',
                value: e.target.checked
            }
        });
    };
    return (
        <div className="flex flex-col items-center gap-y-3">
            <input
                type="text"
                placeholder="Enter Company Name"
                name="companyName"
                className="input input-bordered input-primary w-full max-w-xs"
                value={companyName}
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder="Enter your position"
                name="position"
                className="input input-bordered input-primary w-full max-w-xs"
                value={position}
                onChange={handleInputChange}
            />
            <input
                type="number"
                placeholder="Enter your Experience year"
                name="experienceYear"
                className="input input-bordered input-primary w-full max-w-xs"
                value={experienceYear}
                onChange={handleInputChange}
            />
            <div className="flex w-full max-w-xs">
                <label className="cursor-pointer label">
                    <input
                        type="checkbox"
                        name="lookingForRole"
                        checked={lookingForRole}
                        onChange={handleCheckboxChange}
                        className="checkbox checkbox-accent"
                    />
                    <span className="label-text ml-2">Looking for new role?</span>
                </label>
            </div>
        </div>
    );
};

export default Experience;