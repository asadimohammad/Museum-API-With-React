import React, { useEffect, useState } from "react";
import axios from "axios";
import Department from "../Department/Department";

const Departments = (props) => {
    const [image, setImage] = useState([]);

    let arrayUrl = [];
    let urlObjects =
        "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

    useEffect(() => {
        async function getUrl() {
            let depsUrl =
                `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${props.depId}&q=cat`;
            await axios(depsUrl).then((response) => {
                for (let i = 0; i < 20; i++) {
                    let newArrayUrl = urlObjects + response.data.objectIDs[i];
                    arrayUrl.push(newArrayUrl);
                }
            });

            const results = await Promise.all(
                arrayUrl.map((url) => fetch(url).then((r) => r.json()))
            );
            setImage(results);
        }

        getUrl();
    }, []);

    return (
        <div>
            <Department images={image} />
        </div>
    );
};

export default Departments;
