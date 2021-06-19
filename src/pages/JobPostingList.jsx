import React  ,{ useState, useEffect }  from 'react'
import JobPostingService from "../services/jobPostingService";
import { Header, Table, Icon } from "semantic-ui-react";

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([]);

    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService.getJobAdverts().then(result=> setJobPostings(result.data.data));
        
      
    },[]) 


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
        {jobPostings.map((jobPosting)  => (
            <Table.Row  key={jobPosting.id}>
              <Table.Cell>{jobPosting.jobTitle.title}</Table.Cell>
              <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
              <Table.Cell>{jobPosting.city.name}</Table.Cell>
              <Table.Cell>{jobPosting.openPositionCount}</Table.Cell>
            </Table.Row>
        ))}
        </Table.Body>
      </Table>
            
     </div>
    );
}
