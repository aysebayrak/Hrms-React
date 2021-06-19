import React ,{ useState, useEffect }  from 'react'
import { Header, Table, Icon } from "semantic-ui-react";
import JobTitleService from "../services/jobTitleService";


export default function JobTitleList() {
    const [titles, setTitles] = useState([]);

    useEffect(() =>{
        let jobTitleService = new JobTitleService();
        jobTitleService.getJobTitles().then((result) => setTitles(result.data.data));
    },[])



    return (
        <div>
             <Header as="h2" color="orange">
        <Icon name="folder open" />
        <Header.Content>Job Title List</Header.Content>
      </Header>
      <Table color="orange" key="orange"></Table>


      <Table singleLine>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>Job Title</Table.HeaderCell>
           
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {titles.map((title) => (
            <Table.Row  key={title.id}>
              <Table.Cell>{title.jobTitle}</Table.Cell>
             
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
            
        </div>
    )
}
