import React from 'react';
import NavBar from '../components/nav-bar/NavBar';
import Card from '../components/card/Card';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Card vehicleNumber="ABC-1234" color="Black">
                <h5>Owner : John Doe</h5>
                <h5>Model : 2021</h5>
            </Card>
            <Card vehicleNumber="XYZ-5678" color="White">
                <h5>Owner : Jane Doe</h5>
                <h5>Model : 2020</h5>
                <button>Delete</button>
            </Card>
        </div>
    );
};

export default Home;