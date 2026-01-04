import { useState, useEffect } from "react";
import "./IdCardForm.css";

const IdCardForm = () => {
    const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem("employees")
        return savedEmployees ? JSON.parse(savedEmployees) : []
    });
    const [employee, setEmployee] = useState({

        id: "",
        name: "",
        department: "",
        designation: "",
        bloodGroup: "",
        joiningDate: ""
    });

    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);

    // Handle input Change
    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    // Add New User
    const handleAddUser = () => {
        if (!employee.name || !employee.designation)
            return;
        const newUser = { ...employee, id: Date.now() };
        setEmployees([...employees, newUser]);
        setEmployee({ id: "", name: "", department: "", designation: "", bloodGroup: "", joiningDate: "" });

    };
    return (
        <div className="id-card-form-container">
            <div className="form-card">
                <h2 className="form-title">Employee Portal</h2>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter employee's full name"
                        value={employee.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Department</label>
                    <input
                        type="text"
                        name="department"
                        placeholder="e.g. Graphic Design"
                        value={employee.department}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <input
                        type="text"
                        name="designation"
                        placeholder="e.g. Senior Designer"
                        value={employee.designation}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Blood Group</label>
                        <input
                            type="text"
                            name="bloodGroup"
                            placeholder="e.g. O+"
                            value={employee.bloodGroup}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Joining Date</label>
                        <input
                            type="date"
                            name="joiningDate"
                            value={employee.joiningDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button className="submit-btn" onClick={handleAddUser}>Add Employee</button>
            </div>

            <div className="list-card">
                <h3 className="list-title">Employee Registry</h3>
                <div className="employee-list-header">
                    <span>Name</span>
                    <span>Department</span>
                    <span>Designation</span>
                    <span>Blood</span>
                    <span>Joined</span>
                </div>
                <ul className="employee-list">
                    {employees.map((u) => (
                        <li key={u.id} className="employee-item">
                            <span className="emp-name">{u.name}</span>
                            <span className="emp-dept">{u.department}</span>
                            <span className="emp-desig">{u.designation}</span>
                            <span className="emp-blood">{u.bloodGroup}</span>
                            <span className="emp-date">{u.joiningDate}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default IdCardForm;