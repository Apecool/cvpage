import { useState } from "react";

function Practicalexp() {
    const [formData, setFormData] = useState({
        companyNam: '',
        positionTitle: '',
        jobResponsibilities: '',
        workDate: '',
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
            <h2>Practical Experience</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="company name">
                    company name: {''}
                    <input
                        type="text"
                        id="companyNam"
                        name="companyNam"
                        value={formData.companyNam}
                        onChange={handleChange}
                        placeholder="Company name..."
                        disabled={isEditing}
                    />
                </label>
                <label htmlFor="position title">
                    position title: {''}
                    <input
                        type="text"
                        id="positionTitle"
                        name="positionTitle"
                        value={formData.positionTitle}
                        onChange={handleChange}
                        placeholder="Position title..."
                        disabled={isEditing}
                    />
                </label>
                <label htmlFor="job responsibilities">
                    job responsibilities: {''}
                    <input
                        type="text"
                        id="jobResponsibilities"
                        name="jobResponsibilities"
                        value={formData.jobResponsibilities}
                        onChange={handleChange}
                        placeholder="Job responsibilities..."
                        disabled={isEditing}
                    />
                </label>
                <label htmlFor="work date">
                    work date: {''}
                    <input
                        type="text"
                        id="workDate"
                        name="workDate"
                        value={formData.workDate}
                        onChange={handleChange}
                        placeholder="Work date..."
                        disabled={isEditing}
                    />
                </label>
                <button type="submit">{isEditing ? 'Edit' : 'Submit'}</button>
            </form>
        </>
    )
}

export default Practicalexp;