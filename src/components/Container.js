import React from "react";

function Table(props) {
  return (<table className="table">
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Phone</th>
  </tr>
 <tr>
    <td> {props.firstName} </td>
    <td> {props.lastName} </td>
    <td> {props.email} </td>
    <td> {props.phone} </td>
 </tr>
</table>
);
}

export default Table;