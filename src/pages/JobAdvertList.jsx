import React, { useState, useEffect } from "react";
import JobAdvertService from "../services/jobAdvertService";
import { Header, Table, Icon } from "semantic-ui-react";

export default function JobAdvertList() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setAdverts(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2" color="orange">
        <Icon name="folder open" />
        <Header.Content>Job Advert List</Header.Content>
      </Header>
      <Table color="orange" key="orange"></Table>


      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {adverts.map((advert) => {
            <Table.Row  key={advert.id}>
              <Table.Cell>{advert.title}</Table.Cell>
              <Table.Cell>{advert.companyName}</Table.Cell>
              <Table.Cell>{advert.city}</Table.Cell>
              <Table.Cell>{advert.openPositionCount}</Table.Cell>
            </Table.Row>;
          })}
        </Table.Body>
      </Table>
      
    </div>
  );
}
