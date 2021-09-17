import { render } from '@testing-library/react';
import React from 'react';
import Table from 'react-bootstrap/Table';
import './sample.css'

function Sample() {
render()
    return(
        <>
        <div className="text">Have you taken your Medication today?</div>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Medication</th>
      <th>Sunday</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
      <th>Saturday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Medication A: 3X</td>
      <td>taken</td>
      <td>taken</td>
      <td>taken</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Medication B: 2X</td>
      <td></td>
      <td>taken</td>
      <td></td>
      <td>taken</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Medication C: 1X</td>
      <td></td>
      <td>taken</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>
</>
    )

}
export default Sample;