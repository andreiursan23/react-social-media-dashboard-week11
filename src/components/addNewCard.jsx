import React, { useState } from "react";

const AddNewCard = ( {data, updateData} ) => {
    const [name, setName] = useState("");
    const [followers, setFollowers] = useState("");
    const [difference, setDifference] = useState("");

    const addNewUser = () => {
        if (!isNaN(followers) && !isNaN(difference) && name !== '') {
            let newUser = { name: name, followers: Number(followers), difference: Number(difference) };
        
            data.push(newUser);
    
            updateData(data);
    
            setName('');
            setFollowers('');
            setDifference('');
        } else {
            setName('');
            setFollowers('');
            setDifference('');
        }
    }

    return (
        <div className="add-card">
            <input
                type='text' 
                value={name} 
                placeholder="name" 
                onChange={e => setName(e.target.value)}>
            </input>

            <input
                type='text' 
                value={followers} 
                placeholder="followers" 
                onChange={e => setFollowers(e.target.value)}>
            </input>

            <input
                type='text' 
                value={difference} 
                placeholder="difference" 
                onChange={e => setDifference(e.target.value)}>
            </input>
            
            <button className="add-user-button" onClick={addNewUser}>Create New Card</button>
        </div>
    )
}

export default AddNewCard;