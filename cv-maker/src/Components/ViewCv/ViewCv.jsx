import Education from './Education.jsx';
import Exprienceview from "./Exprienceview.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
const ViewCv = ({ data }) => {
    if (!data) {
        return <span className="loading loading-bars loading-lg text-center mt-15"></span>;
    }
    const { personalInfo, experiences, educations } = data;

    return (
        <div className="w-1/2 mx-auto p-4">
            <PersonalInfo personalInfo={personalInfo}></PersonalInfo>
            <Education educations={educations} />
            <Exprienceview experiences={experiences} />
        </div>
    );
};

export default ViewCv;
