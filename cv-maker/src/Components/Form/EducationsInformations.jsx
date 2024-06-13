
const EducationsInformations = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-y-3">
                <label>Last Educational Informations</label>
                <input type="text" placeholder="Enter Instatution Name" name="instatution_name"
                       className="input input-bordered input-primary w-full max-w-xs"/>
                <input type="text" placeholder="Enter exam Name" name="exam_name"
                       className="input input-bordered input-primary w-full max-w-xs"/>
                <input type="text" placeholder="Enter Instatution Name" name="passing_year"
                       className="input input-bordered input-primary w-full max-w-xs"/>
                <input type="text" placeholder="Enter Instatution Name" name="result"
                       className="input input-bordered input-primary w-full max-w-xs"/>
            </div>
        </>
    );
};

export default EducationsInformations;