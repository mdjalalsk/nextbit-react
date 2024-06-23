
const PersonalInfo = ({personalInfo}) => {
    return (
        <div>
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> {personalInfo.name}</p>
            <p><strong>Email:</strong> {personalInfo.email}</p>
            <p><strong>Phone:</strong> {personalInfo.phone}</p>
            <p><strong>Age:</strong> {personalInfo.age}</p>
            <p><strong>Occupation:</strong> {personalInfo.occupation}</p>
            <p><strong>Occupation:</strong> {personalInfo.currentAddress}</p>
            <p><strong>Occupation:</strong> {personalInfo.permanentAddress}</p>
            <p><strong>Occupation:</strong> {personalInfo.maritalStatus}</p>
            <p><strong>Occupation:</strong> {personalInfo.gender}</p>
        </div>
    )
};

export default PersonalInfo;