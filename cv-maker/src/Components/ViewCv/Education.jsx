
const Education = ({educations}) => {
    return (
        <div>
            <h2>Educations</h2>

                {educations.map(edu => (
                    <ul key={edu.id}>
                        <li >{edu.institutionName}</li>
                        <li >{edu.examName}</li>
                        <li >{edu.result}</li>
                        <li >{edu.passingYear}</li>

                    </ul>
                ))}

        </div>
    );
};

export default Education;