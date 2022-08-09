import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "../Card/Card";
import './Department.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 6 },
];
const Department = ({images}) => {
    return (
        <div className="App">
            <Carousel breakPoints={breakPoints}>
                {images.map((image) => (
                    <div className="cards-info" key={image.title}>
                        <Card
                            key={image.title}
                            title={image.title}
                            image={image.primaryImageSmall}
                            department={image.department}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Department;
