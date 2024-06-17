import { useState } from "react";

function Educationexp() {
    const [formData, setFormData] = useState({
        schoolNam: '',
        studyTitle: '',
        studyDate: '',
    });
    const [isEditing, setIsEditing] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if(!isEditing) {
            console.log(formData);
            setIsEditing(true);
        }
        if(isEditing) {
            setIsEditing(false);
        }
    }

    function handleChange({target:{name, value}}) {
        setFormData((prevData => ({
            ...prevData,
            [name]: value,
        })));
    }

    return (
        <>
            <h2>Education Experience</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="school name">
                    school name: {''}
                    <input
                        type="text"
                        id="schoolNam"
                        name="schoolNam"
                        value={formData.schoolNam}
                        onChange={handleChange}
                        placeholder="School name..."
                        disabled={isEditing}
                    />
                </label>
                <label htmlFor="study title">
                    study title: {''}
                    <input
                        type="text"
                        id="studyTitle"
                        name="studyTitle"
                        value={formData.studyTitle}
                        onChange={handleChange}
                        placeholder="Study title..."
                        disabled={isEditing}
                    />
                </label>
                <label htmlFor="study date">
                    study date: {''}
                    <input
                        type="text"
                        id="studyDate"
                        name="studyDate"
                        value={formData.studyDate}
                        onChange={handleChange}
                        placeholder="Study date..."
                        disabled={isEditing}
                    />
                </label>
                <button type="submit">{isEditing ? 'Edit' : 'Submit'}</button>
            </form>
        </>
    )
}

export default Educationexp;