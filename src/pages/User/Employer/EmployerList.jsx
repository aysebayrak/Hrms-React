import React ,{useState , useEffect} from 'react'
import EmployerService from '../../../services/employerService';
import { Table ,Header,  Icon  } from 'semantic-ui-react'

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
        <Header.Content>Şirket Listesi</Header.Content>
      </Header>
      <Table color="orange" key="orange"></Table>


      <Table singleLine>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>İnternet Sitesi</Table.HeaderCell>
            {/* <Table.HeaderCell>Email</Table.HeaderCell> */}
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
            {/* <Table.HeaderCell>Detay</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row  key={employer.id}>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.webAddress}</Table.Cell>
              {/* <Table.Cell>{employer.email}</Table.Cell> */}
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
            </Table.Row>
      ))}
        </Table.Body>
      </Table>
      
        </div>
    )
}
