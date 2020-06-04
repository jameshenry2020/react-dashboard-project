import React from 'react'

export default function AccountTable() {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Account</th>
                    <th>this month</th>
                    <th>YDP</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{color:"#2eb2f0", fontWeight:"bold"}}>Advertising</td>
                    <td>12,340.00</td>
                    <td>24,900.00</td>
                </tr>
                <tr>
                    <td style={{color:"#2eb2f0", fontWeight:"bold"}}>Raw materials</td>
                    <td>7,490.00</td>
                    <td>34,589.05</td>
                </tr>
                </tbody>
            </table>


        </div>
    )
}
