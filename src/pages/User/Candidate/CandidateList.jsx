import React ,{useState ,useEffect} from 'react'
import CandidateService from '../../../services/candidateService';
import { Table ,Header,  Icon  , Button } from 'semantic-ui-react'

export default function CandidateList() {

    const [candidates, setCandidates] = useState([]);

    useEffect(() =>{
        let candidateService=  new CandidateService();
        candidateService.getCandidates().then((result) => setCandidates(result.data.data));
    } ,[]);

    return (
        <div>
              <Header as="h2" color="orange">
        <Icon name="folder open" />
        <Header.Content>Aday   Listesi</Header.Content>
      </Header>
      <Table color="orange" key="orange"></Table>


      <Table singleLine>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Soy İsim</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            {/* <Table.HeaderCell>Detay</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row  key={candidate.id}>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
            
        </div>
    )
}
