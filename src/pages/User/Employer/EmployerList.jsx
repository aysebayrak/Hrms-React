import React ,{useState , useEffect} from 'react'
import EmployerService from '../../../services/employerService';
import { Table ,Header,  Icon  , Button } from 'semantic-ui-react'

export default function EmployerList() {

    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService();
        employerService
          .getEmployers()
          .then((result) => setEmployers(result.data.data));
      }, []);


    return (
        <div>
             <Header as="h2" color="orange">
        <Icon name="folder open" />
        <Header.Content>Employer List</Header.Content>
      </Header>
      <Table color="orange" key="orange"></Table>


      <Table singleLine>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => {
            <Table.Row  key={employer.id}>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.website}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
            </Table.Row>;
          })}
        </Table.Body>
      </Table>
      
        </div>
    )
}
