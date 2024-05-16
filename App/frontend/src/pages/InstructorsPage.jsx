import { useState } from 'react';
import InstructorsTable from '../components/instructors/InstructorsTable';

function InstructorsPage({ instructors }) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [preferredName, setPreferredName] = useState("");



    return (
        <section>
            <div>
                <h2>Meet/Manage our Instructors:</h2>
                <InstructorsTable instructors={instructors} />
            </div>

            <form>
                <label>First Name:</label>
                <input type="text" value={firstName}
                    onChange={e => setFirstName(e.target.value)} />
                <label>Last Name:</label>
                <input type="text" value={lastName}
                    onChange={e => setLastName(e.target.value)} />
                <label>Preferred Name:</label>
                <input type="text" value={preferredName}
                    onChange={e => setPreferredName(e.target.value)} />
                <label>Email:</label>
                <input type="text" value={email}
                    onChange={e => setEmail(e.target.value)} />
                <label>Phone Number:</label>
                <input type="text" value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)} />


                <button
                    onClick={e => {
                        e.preventDefault();
                    }}
                >Add Instructor</button>
            </form>

        </section>
    )
}

export default InstructorsPage