import React, { Component } from 'react'

export default class MainTable extends Component {
    render() {
        return (
            <div>
                <div style={{overflowX:"auto"}}>
                        <table className="cust-table">
                           <thead> 
                            <tr>
                            <th>ID</th>
                            <th>Order</th>
                            <th>Cost</th>
                            <th>brand</th>
                            <th>profit</th>
                            <th>Status</th>        
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>1</td>
                            <td>50</td>
                            <td>25,000</td>
                            <td>golden cat</td>
                            <td>4,000</td>
                            <td>
                            <button className="btn2">processing</button> 
                                </td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>30</td>
                            <td>14,000</td>
                            <td>garric ltd</td>
                            <td>2,200</td>
                            <td><button className="btn1">delayed</button></td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>20</td>
                            <td>23,000</td>
                            <td>garric ltd</td>
                            <td>2,300</td>
                            <td><button className="btn">received</button></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
            </div>
        )
    }
}
