
const Exprienceview = ({experiences}) => {

    return (
        <div>
            <h2>Experiences</h2>
                {experiences.map(exp => (
                    <ul key={exp.id}>
                    <li >{exp.position}</li>
                    <li >{exp.companyName}</li>
                    <li >{exp.experienceYear}</li>
                    <li >{exp.lookingForRole?"yes":"No"}</li>
                    </ul>
                ))}

        </div>
    );
};

export default Exprienceview;