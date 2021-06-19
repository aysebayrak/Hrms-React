import React, { useState, useEffect } from "react";
import EmployeeService from "../../../services/employeeService";

import { Table ,Header,  Icon  , Button } from 'semantic-ui-react'

export default function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        let employeeService = new EmployeeService();
        employeeService
          .getEmployees()
          .then((result) => setEmployees(result.data.data));
      }, []);



    return (
        <div>

  <Header as="h2"  color="orange">
        <Icon name="folder open" />
        <Header.Content>Çalışan Listesi</Header.Content>
      </Header>

      <Table color="orange" key="orange"></Table>

<Table singleLine>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Soy İsim</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>

        
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {employees.map((employee) =>(
        <Table.Row key={employee.id}>
        <Table.Cell>{employee.firstName}</Table.Cell>
        <Table.Cell>{employee.lastName}</Table.Cell>
        <Table.Cell>{employee.email}</Table.Cell>
        <Table.Cell>
          <Button>View</Button>
        </Table.Cell>
      </Table.Row>

    ))}
      
   
    </Table.Body>
  </Table>
            
   </div>
    )
}




