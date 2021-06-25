import React  ,{ useState, useEffect }  from 'react'
import JobPostingService from "../services/jobPostingService";
import { Header, Table, Icon } from "semantic-ui-react";
import { useFormik } from "formik";

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([]);

    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService.getJobPostings().then((result )=> setJobPostings(result.data.data));
        
      
    },[]) 

    const formik = useFormik({
      onSubmit :(values)=>{
        alert(values);
      },
    })


    return (
        <div>
      <Header as="h2" color="orange">
        <Icon name="folder open" />
        <Header.Content>İş İlanları</Header.Content>
      </Header>
      <Table color="orange" key="orange"></Table>

      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Şirket</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Minumum Ücret</Table.HeaderCell>
            <Table.HeaderCell>Maksimum Ücret</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>


        <Table.Body>
        {jobPostings.map((jobPosting)  => (
            <Table.Row  key={jobPosting.id}>
              <Table.Cell>{jobPosting.jobTitle.title}</Table.Cell>
              <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
              <Table.Cell>{jobPosting.city.name}</Table.Cell>
              <Table.Cell>{jobPosting.minSalary}</Table.Cell>
              <Table.Cell>{jobPosting.maxSalary}</Table.Cell>
              <Table.Cell>{jobPosting.openPositionCount}</Table.Cell>
              <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
              
              

            </Table.Row>
        ))}
        </Table.Body>
      </Table>
            
     </div>
    );
}
