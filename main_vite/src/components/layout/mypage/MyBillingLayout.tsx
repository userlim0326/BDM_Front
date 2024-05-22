import "./MyBillingLayout.css"
import { Link } from "react-router-dom";
import React from 'react';


const MyBillingLayout = () => {
    return(
    <div>
        <h1 className="text-2xl font-bold  mb-6 text-gray-600">My Billing</h1>
    
    <div className="common billing1">
    <h3 className="font-bold">Thanks for being a Pro</h3>
    <ul>
        <li>Level up your Claude usage</li>
        <li>Access to Claude 3 Opus, our most intelligent model</li>
        <li>Priority access druing high-traffic periods</li>
        <li>Early access to newe features</li>
    </ul>

    </div>
    <div className="common billing2">
    <h3 className="font-bold">Payment</h3>
    <div className="flex items-center justify-between">
      <span className="mr-auto">link Link by Stripe</span>
      <Link
        to="somewhere"
        className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded"
      >
        결제하기
      </Link>
    </div></div>
    <div className="common billing3">
    <h3 className="font-bold">Invoices</h3>
        <table>
            <tr >
                <th className="border-b-2 border-gray-200">Date</th>
                <th className="border-b-2 border-gray-200">Total</th>
                <th className="border-b-2 border-gray-200">Status</th>
                <th className="border-b-2 border-gray-200">Action</th>
            </tr>
            <tr>
                <td>2024년 5월 6일</td>
                <td>US$22.00</td>
                <td>Paid</td>
                <td>View invoice</td>
            </tr>
            <tr>
                <td>2024년 5월 6일</td>
                <td>US$22.00</td>
                <td>Paid</td>
                <td>View invoice</td>
            </tr>
            <tr>
                <td>2024년 4월 6일</td>
                <td>US$22.00</td>
                <td>Paid</td>
                <td>View invoice</td>
            </tr>
            <tr>
                <td>2024년 3월 6일</td>
                <td>US$20.00</td>
                <td>Paid</td>
                <td>View invoice</td>
            </tr>
        </table>
    </div>
    <div className="common billing4">
    <h3 className="font-bold">Cancelation</h3>
    <div className="flex items-center justify-between">
      <span className="mr-auto">Cancel plan</span>
      <Link
        to="somewhere"
        className="bg-pink-300 hover:bg-pink-00 text-white font-bold py-2 px-4 rounded"
      >
        결제취소
      </Link>
    </div>
    </div>
    
    </div>
    );
};

export default MyBillingLayout;