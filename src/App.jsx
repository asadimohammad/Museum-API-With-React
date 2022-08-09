import React, { useEffect, useState } from "react";
import axios from "axios";
import Departments from "./Components/Departments/Departments";
import './App.css'
import Navigation from "./Components/Layout/Navigation/Navigation";
import Header from "./Components/Layout/Header/Header";

const App = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        async function getUrl() {
            let depsUrl =
                "https://collectionapi.metmuseum.org/public/collection/v1/departments";
            await axios(depsUrl).then((res) => {
                setDepartments(res.data.departments);
            });
        }
        getUrl();
    }, []);

    return (
        <div className="app">
            <Navigation/>
            <Header/>
            {departments.map((dep) => {
                return (
                    <div className="main-dep-info">
                        <h3 className="dep-display-name">{dep.displayName}</h3>
                        <Departments depId={dep.departmentId} />
                    </div>
                );
            })}
        </div>
    );
};

export default App;
