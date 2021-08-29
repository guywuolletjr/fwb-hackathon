import React from 'react';
import { Table } from 'react-bootstrap';
import './FollowingList.css'
function memberContents(members) {
    if (members.length) {
        return members.map(member => (
            <tr className="nothing">
                <td>{member}</td>
            </tr>
        ));
    }
    return (
        <tr className="nothing">
            <td />
        </tr>
    );
}

function FollowingList(props) {
    const { members } = props;
    if (members.length > 0) {
        return (
            <Table  variant="dark" className="tableWidth">
                <thead>
                <tr>
                    <th>FWB Member</th>
                </tr>
                </thead>
                <tbody>{memberContents(members)}</tbody>
            </Table>
        );
    }
    return (<></>);
}

export default FollowingList;