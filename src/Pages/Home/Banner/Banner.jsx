import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import shanghai from '../../../Images/shanghai.jpg'

const Banner = () =>{
    return (
        <div>
            <Carousel>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={shanghai} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};
export default Banner;