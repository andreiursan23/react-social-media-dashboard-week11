import React, { useEffect, useState } from 'react';
import './App.css';
import data from "./sampleData";
import AddNewCard from "./components/addNewCard";
import Header from "./components/Header";
import Cards from './components/Cards';

function App() {
    const [database, setDatabase] = useState(data.users);
    const [totalFollowers, setTotalFollowers] = useState(0);
    let icon = data.icon;

    const updateData = (database) => {
        setDatabase([...database]);
    }

    useEffect(() => {
        let followersSum = 0;

        database.map((user) => (
            followersSum += user.followers
        ));

        setTotalFollowers(followersSum);
    }, [database]);

    return (
        <div className="root">
            <Header totalFollowers={totalFollowers} />

            <Cards data={database} icon={icon} updateData={updateData} />

            <AddNewCard data={database} updateData={updateData}></AddNewCard>
        </div>
    );
}

export default App;
