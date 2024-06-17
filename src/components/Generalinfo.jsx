import { useState } from "react";

function Generalinfo() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNum: '', 
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
            <h2>General Information</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    name: {''}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name..."
                        disabled={isEditing}
                    />
                </label>
                <label htmlFor="email">
                    email: {''}
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email..."
                        disabled={isEditing}
                    />
                </label>
                <label htmlFor="phone number">
                    phone number: {''}
                    <input
                        type="text"
                        id="phoneNum"
                        name="phoneNum"
                        value={formData.phoneNum}
                        onChange={handleChange}
                        placeholder="Phone number..."
                        disabled={isEditing}
                    />
                </label>
                <button type="submit">{isEditing ? 'Edit' : 'Submit'}</button>
            </form>
        </>
    )
}

export default Generalinfo;