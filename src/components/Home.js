import React, { useEffect } from 'react';
import Flights from './Flights';
import './Home.css'; // Import custom CSS file

function Home() {
    useEffect(() => {
        const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
            interval: 5000,
            ride: 'carousel'
        });
    }, []);

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/11644229/pexels-photo-11644229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="Slide 3" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="Slide 4" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="Slide 5" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <ul className="nav nav-pills nav-justified mt-4">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="Flights.js">Flights</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Cars</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Hotels</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Trains</a>
                </li>
            </ul>
        </>
    );
}

export default Home;
