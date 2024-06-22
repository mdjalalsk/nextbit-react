
const EducationsInformations = ({index, education, onChange}) => {
    const handleInputChange = (e) => {
        onChange(index, e); // Call the onChange function passed from parent with index and event
    };
    return (
        <>
            <div className="flex flex-col items-center gap-y-3">
                <input
                    type="text"
                    placeholder="Enter Institution Name"
                    name="institutionName"
                    className="input input-bordered input-primary w-full max-w-xs"
                    value={education.institutionName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Enter Exam Name"
                    name="examName"
                    className="input input-bordered input-primary w-full max-w-xs"
                    value={education.examName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Enter Passing Year"
                    name="passingYear"
                    className="input input-bordered input-primary w-full max-w-xs"
                    value={education.passingYear}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Enter Result"
                    name="result"
                    className="input input-bordered input-primary w-full max-w-xs"
                    value={education.result}
                    onChange={handleInputChange}
                />
            </div>
        </>
    );
};

export default EducationsInformations;