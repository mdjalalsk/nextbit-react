const PersonalInformations = () => {
    return (<>
        <div className="flex flex-col items-center gap-y-3">
            <label className="text-lg">Personal Informations</label>
            <input type="text" placeholder="Enter your name" name="name"
                   className="input input-bordered input-primary w-full max-w-xs"/>
            <input type="email" placeholder="Enter your email" name="email"
                   className="input input-bordered input-primary w-full max-w-xs"/>
            <input type="text" placeholder="Enter your Phone" name="age"
                   className="input input-bordered input-primary w-full max-w-xs"/>
            <input type="number" placeholder="Enter your age" name="phone"
                   className="input input-bordered input-primary w-full max-w-xs"/>
            <input type="occupation" placeholder="Enter your Occupation" name="occupation"
                   className="input input-bordered input-primary w-full max-w-xs"/>

                <textarea className="textarea textarea-primary w-full max-w-xs" name="currebt_address"
                          placeholder="Enter your current address"></textarea>


                <textarea className="textarea textarea-primary w-full max-w-xs" name="permanent_address"
                          placeholder="Enter your Permanent address"></textarea>


            <div className="flex items-center justify-start gap-x-2 max-w-xs">
                <label>Gander:</label>
                <label htmlFor="male">Male</label>
                <input type="radio" id="male" name="gender" value="male" className="radio radio-primary" checked/>

                <label htmlFor="female">Female</label>
                <input type="radio" id="female" name="gender" value="female" className="radio radio-primary"/>

                <label htmlFor="other">Other</label>
                <input type="radio" id="other" name="gender" value="other" className="radio radio-primary"/>
            </div>
            <div className="flex items-center justify-start gap-x-2 max-w-xs">
                <label>Marital Status:</label>
                <label htmlFor="married"> Married</label>
                <input type="radio" id="married" name="marital_status" value="married" className="radio radio-primary"
                       checked/>

                <label htmlFor="unmarried">Female</label>
                <input type="radio" id="unmarried" name="marital_status" value="unmarried"
                       className="radio radio-primary"/>

            </div>


        </div>
    </>);
};

export default PersonalInformations;