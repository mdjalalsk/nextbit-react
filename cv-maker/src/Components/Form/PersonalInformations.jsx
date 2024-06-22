const PersonalInformations = ({onChange,formData}) => {
    const handleInputChange = (e) => {
        onChange(e); // Call the onChange function passed from parent
    };
    return (<>
        <div className="flex flex-col items-center gap-y-3">
            <label className="text-lg">Personal Information</label>
            <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={handleInputChange}
            />
            <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder="Enter your Phone"
                name="phone"
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={handleInputChange}
            />
            <input
                type="number"
                placeholder="Enter your age"
                name="age"
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder="Enter your Occupation"
                name="occupation"
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={handleInputChange}
            />
            <textarea
                className="textarea textarea-primary w-full max-w-xs"
                name="currentAddress"
                placeholder="Enter your current address"
                onChange={handleInputChange}
            ></textarea>
            <textarea
                className="textarea textarea-primary w-full max-w-xs"
                name="permanentAddress"
                placeholder="Enter your Permanent address"
                onChange={handleInputChange}
            ></textarea>
            <div className="flex items-center justify-start gap-x-2 max-w-xs">
                <label>Gender:</label>
                <label htmlFor="male">Male</label>
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked
                    className="radio radio-primary"
                    onChange={handleInputChange}
                />
                <label htmlFor="female">Female</label>
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    className="radio radio-primary"
                    onChange={handleInputChange}
                />
                <label htmlFor="other">Other</label>
                <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    className="radio radio-primary"
                    onChange={handleInputChange}
                />
            </div>
            <div className="flex items-center justify-start gap-x-2 max-w-xs">
                <label>Marital Status:</label>
                <label htmlFor="married"> Married</label>
                <input
                    type="radio"
                    id="married"
                    name="maritalStatus"
                    value="married"
                    className="radio radio-primary"

                    onChange={handleInputChange}
                />
                <label htmlFor="unmarried">Unmarried</label>
                <input
                    type="radio"
                    id="unmarried"
                    name="maritalStatus"
                    value="unmarried"
                    className="radio radio-primary"
                    checked
                    onChange={handleInputChange}
                />
            </div>
        </div>
    </>);
};

export default PersonalInformations;