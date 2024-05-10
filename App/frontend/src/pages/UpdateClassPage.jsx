import {useState} from 'react';

function UpdateClassPage(){
    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [capacity, setCapacity] = useState("");
    const [description, setDescription] = useState("");

    return (
        <form className='update-class'>

            <label>Class Name:</label>
            <input type="text" value={name} 
            onChange={e=> setName(e.target.value)} />
            <label>Duration in minutes:</label>
            <input type="text" value={duration} 
            onChange={e=> setDuration(e.target.value)} />
            <label>Capacity:</label>
            <input type="text" value={capacity} 
            onChange={e=> setCapacity(e.target.value)} />
            <label>Description:</label>
            <input type="textarea" value={description} 
            onChange={e=> setDescription(e.target.value)} />
            <button
                onClick={e=>{
                    e.preventDefault();
                }}
            >Update Class</button>
        </form>
    )


}

export default UpdateClassPage;