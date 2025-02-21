import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [redirectmsg, setRedirectmsg] = useState(false);
const navigate = useNavigate();


    const placeTheOrder = () => {
        setRedirectmsg(true);
        setTimeout(() => {
            navigate("order-summary")
        },2000)
    }


    return (
        <div className="row text-center">
            <div className="col">
                <h1 className='my-3'>Home page</h1>
                <h3 className='my-3'>Tshirt order</h3>
                <h3 className='my-3'>price- 800/-</h3>
                <button className='btn btn-success d-flex mx-auto mt-4' onClick={placeTheOrder}>Place Order
{
    redirectmsg && (
        
        <div class="spinner-border ms-3" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    )
}



                </button>
                {
                    redirectmsg && (<h6 className="text-warning">
                        Please wait until the order is placed
                    </h6>)
                }

            </div>

        </div>
    );
}

export default Home;