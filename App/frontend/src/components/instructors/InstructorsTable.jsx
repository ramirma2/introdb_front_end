import InstructorSingle from "./InstructorSingle";


function InstructorsTable({ instructors }) {

    const myInstructors = [
        { instructor_id: 23, first_name: 'John', last_name: 'Doe', preferred_name: 'Johnny', email: 'johndoe@gmail.com', phone_number: '614-092-3432', classes: ['Strength 1', 'Strength', 'Strength Advanced'] },
        { instructor_id: 12, first_name: 'Lucas', last_name: 'Johnson', preferred_name: 'Lucas', email: 'lucas@yahoo.com', phone_number: '839-293-4938', classes: ['Recovery'] }
    ]

    return (

        <table className="instructors-list">
            <thead>
                <tr>
                    <th>Preferred Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Classes</th>
                    <th>Edit </th>
                    <th>Delete </th>

                </tr>

            </thead>
            <tbody>
                {instructors.map((inst, i) => <InstructorSingle instructor={inst} key={i} />)}
            </tbody>

        </table>
    )

}

export default InstructorsTable;