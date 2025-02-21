import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSummary() {
    const navigate = useNavigate();
    return (
        <>
        <div><h1>Order Summary</h1></div>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            GoBack
        </button>
        </>
    )

}
export default OrderSummary