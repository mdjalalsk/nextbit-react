import PersonalInformations from "./PersonalInformations.jsx";
import EducationsInformations from "./EducationsInformations.jsx";
import Experience from "./Experience.jsx";

const MainForm = () => {
    return (
        <div>
            <form className="p-5">

                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <aside className="">
                        <PersonalInformations></PersonalInformations>
                    </aside>
                    <aside className="">
                        <EducationsInformations></EducationsInformations>
                        <Experience></Experience>
                    </aside>

                </div>
                <div className="text-center my-5">
                    <div className="flex justify-center my-6">
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="checkbox checkbox-accent"/>
                            <span className="label-text ml-2">We will store you information upto 2 years. Are you agree with this condition?
</span>
                        </label>

                    </div>
                    <button className="btn btn-outline btn-accent">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default MainForm;