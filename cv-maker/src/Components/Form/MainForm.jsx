import PersonalInformations from "./PersonalInformations.jsx";
import EducationsInformations from "./EducationsInformations.jsx";
import Experience from "./Experience.jsx";
import { useReducer } from 'react';


// Define action types for state updates
const actionTypes = {
    UPDATE_PERSONAL_INFO: 'UPDATE_PERSONAL_INFO',
    ADD_EDUCATION: 'ADD_EDUCATION',
    REMOVE_EDUCATION: 'REMOVE_EDUCATION',
    UPDATE_EDUCATION: 'UPDATE_EDUCATION',
    ADD_EXPERIENCE: 'ADD_EXPERIENCE',
    REMOVE_EXPERIENCE: 'REMOVE_EXPERIENCE',
    UPDATE_EXPERIENCE: 'UPDATE_EXPERIENCE',
    TOGGLE_TERMS_AGREED: 'TOGGLE_TERMS_AGREED'
};

// Reducer function to handle state updates
const formReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PERSONAL_INFO:
            return {
                ...state,
                personalInfo: {
                    ...state.personalInfo,
                    [action.payload.name]: action.payload.value
                }
            };
        case actionTypes.ADD_EDUCATION:
            return {
                ...state,
                educations: [
                    ...state.educations,
                    { id: Date.now(), institutionName: '', examName: '', passingYear: '', result: '' }
                ]
            };
        case actionTypes.REMOVE_EDUCATION:
            return {
                ...state,
                educations: state.educations.filter((edu, index) => index !== action.payload)
            };
        case actionTypes.UPDATE_EDUCATION:
            const updatedEducations = [...state.educations];
            updatedEducations[action.payload.index][action.payload.name] = action.payload.value;
            return {
                ...state,
                educations: updatedEducations
            };
        case actionTypes.ADD_EXPERIENCE:
            return {
                ...state,
                experiences: [
                    ...state.experiences,
                    { id: Date.now(), companyName: '', position: '', experienceYear: '', lookingForRole: false }
                ]
            };
        case actionTypes.REMOVE_EXPERIENCE:
            return {
                ...state,
                experiences: state.experiences.filter((exp, index) => index !== action.payload)
            };
        case actionTypes.UPDATE_EXPERIENCE:
            const updatedExperiences = [...state.experiences];
            updatedExperiences[action.payload.index][action.payload.name] = action.payload.value;
            return {
                ...state,
                experiences: updatedExperiences
            };
        case actionTypes.TOGGLE_TERMS_AGREED:
            return {
                ...state,
                termsAgreed: action.payload
            };
        default:
            return state;
    }
};
const MainForm = ({onSubmit}) => {
    const [formData, dispatch] = useReducer(formReducer, {
        personalInfo: {
            name: '',
            email: '',
            phone: '',
            age: '',
            occupation: '',
            currentAddress: '',
            permanentAddress: '',
            gender: '',
            maritalStatus: ''
        },
        educations: [
            { id: 1, institutionName: '', examName: '', passingYear: '', result: '' }
        ],
        experiences: [
            { id: 1, companyName: '', position: '', experienceYear: '', lookingForRole: false }
        ],
        termsAgreed: false
    });

    // Handle input change for personal information
    const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: actionTypes.UPDATE_PERSONAL_INFO,
            payload: { name, value }
        });
    };

    // Handle input change for educational information
    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        dispatch({
            type: actionTypes.UPDATE_EDUCATION,
            payload: { index, name, value }
        });
    };

    // Handle input change for experience information
    const handleExperienceChange = (index, e) => {
        const { name, value, type, checked } = e.target;
        dispatch({
            type: actionTypes.UPDATE_EXPERIENCE,
            payload: { index, name, value: type === 'checkbox' ? checked : value }
        });
    };

    // Handle checkbox change for terms agreement
    const handleCheckboxChange = (e) => {
        const { checked } = e.target;
        dispatch({
            type: actionTypes.TOGGLE_TERMS_AGREED,
            payload: checked
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onSubmit(formData);

    };

    return (
        <div>
            <form className="p-5" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <aside className="">
                        <PersonalInformations onChange={handlePersonalInfoChange} formData={formData} />
                    </aside>
                    <aside className="">
                        <div>
                            {formData.educations.map((edu, index) => (
                                <div key={edu.id}>
                                    <EducationsInformations
                                        index={index}
                                        education={edu}
                                        onChange={handleEducationChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => dispatch({ type: actionTypes.REMOVE_EDUCATION, payload: index })}
                                    >
                                        Remove Education
                                    </button>
                                </div>
                            ))}
                            <button type="button" onClick={() => dispatch({ type: actionTypes.ADD_EDUCATION })}>
                                Add Education
                            </button>
                        </div>
                        <div>
                            {formData.experiences.map((exp, index) => (
                                <div key={exp.id}>
                                    <Experience
                                        index={index}
                                        experience={exp}
                                        onChange={handleExperienceChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => dispatch({ type: actionTypes.REMOVE_EXPERIENCE, payload: index })}
                                    >
                                        Remove Experience
                                    </button>
                                </div>
                            ))}
                            <button type="button" onClick={() => dispatch({ type: actionTypes.ADD_EXPERIENCE })}>
                                Add Experience
                            </button>
                        </div>
                    </aside>

                </div>
                <div className="text-center my-5">
                    <div className="flex justify-center my-6">
                        <label className="cursor-pointer label">
                            <input type="checkbox" name="termsAgreed"
                                   checked={formData.termsAgreed}
                                   onChange={handleCheckboxChange} className="checkbox checkbox-accent"/>
                            <span className="label-text ml-2">We will store you information upto 2 years. Are you agree with this condition?
</span>
                        </label>

                    </div>
                    <button className="btn btn-outline btn-accent">Submit</button>
                </div>

            </form >
        </div>
    );
};

export default MainForm;