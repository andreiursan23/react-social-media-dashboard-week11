import React from "react";

function Cards( {data, icon, updateData} ) {
    const updateFollowers = (operation, index) => {
        if (operation === 'increase') {
            data[index].followers++;
        } else {
            data[index].followers--;
        }

        updateData(data);
    }

    return (
        <>
            {data.map((user, index) => (
                <section key={index} className="platform">
                    <div className="icon" >
                        <img src={icon} alt="facebook-logo"></img>
                        <p>{user.name}</p>
                    </div>

                    <div className="followers">
                        <button className="update-followers-button" onClick={() => updateFollowers('decrease', index)}>-</button>

                        {user.followers > 9999 ? `${user.followers}`.slice(0, 2) + 'k' : user.followers}

                        <button className="update-followers-button" onClick={() => updateFollowers('increase', index)}>+</button>
                    </div>

                    <div className="subscribers" style={user.difference > 0 ? {color:"#429189"} : {color:"#82455C"}}>
                        F O L O W E R S
                    </div>

                    <div>
                        {user.difference > 0 ? <span className='trend-ascend'>▲</span> : <span className='trend-descend'>▼</span>}

                        {Math.abs(user.difference)}
                    </div>
                </section>                
            ))}
        </>
    );
}

export default Cards;