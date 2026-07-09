import {useRef} from 'react';

function Form() {
    const nameRef = useRef();
    const genderRef = useRef();
    const roleRef = useRef();
    const maritialStatusRef = useRef();

    //Single onchange handler
    const handleChange = (e) => {
        console.log(`${e.target.name}:`,
            e.target.type === "checkbox" ? e.target.checked : e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: nameRef.current.value,
            gender: genderRef.current.value,
            role: roleRef.current.value,
            status: maritialStatusRef.current.checked,
        };

        console.log(formData);
        alert("Form Submitted!");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>User Information Form </h1>

                <label htmlFor="Name">Name: </label>
                <input type="text" id='name' ref={nameRef} onChange={handleChange} />
                <br />

                <label>Gender: </label>
                <select
                    name="gender"
                    ref={genderRef}
                    onChange={handleChange}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <br />

                <label htmlFor="role">Select for your role: </label>
                <select name="role" ref={roleRef} onChange={handleChange}>
                    <option value="">Select Option</option>
                    <option value="Student">Student</option>
                    <option value="Developer">Developer</option>
                    <option value="Admin">Admin</option>
                </select>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="maritialStatus"
                        ref={maritialStatusRef}
                        onChange={handleChange}
                    />
                    Married
                </label>
                <br />

                <input type="submit" />
            </form>
        </div >
    )
}
export default Form;