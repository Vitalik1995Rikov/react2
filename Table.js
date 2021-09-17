import React, {Component} from 'react'

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Black</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Ann</td>
                        <td>White</td>
                        <td>30</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table