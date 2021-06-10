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
        <Header.Content>Employee List</Header.Content>
      </Header>

      <Table color="orange" key="orange"></Table>

<Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Registration Date</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>

        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>

        

      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie Harington</Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill Lewis</Table.Cell>
        <Table.Cell>May 11, 2014</Table.Cell>
        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>

        
      </Table.Row>
    </Table.Body>
  </Table>
            
        </div>
    )
}



