import React  ,{ useState, useEffect }  from 'react'
import JobPostingService from "../services/jobPostingService";
import { Header, Table, Icon, Button,Label} from "semantic-ui-react";
import { If, Then, ElseIf, Else } from "react-if-elseif-else-render";
import { useFormik } from "formik";
import { render } from '@testing-library/react';



export default function JobPostingList() {

    let jobPostingService = new JobPostingService();
    const [jobPostings, setJobPostings] = useState([]);

    useEffect(() => {
       
        jobPostingService.getJobPostings().then((result )=> setJobPostings(result.data.data));
        
      
    },[]) ;

    let jobPostingStatus;
    let jobPostingId;
    const formik = useFormik({
      onSubmit :(values)=>{
        alert(values);
      },
    });
   
    function changeState(id,status){
      jobPostingId=id;
      jobPostingStatus=status;
      jobPostingService.updateStatus(jobPostingId,jobPostingStatus);
     
   
      window.location.reload();  //Sayfayı yeniden yüklemek için
    }
   


  render()
  {
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
          <Table.HeaderCell>Onay Durumu</Table.HeaderCell>
          {/* <Table.HeaderCell>Açıklama</Table.HeaderCell> */}
          <Table.HeaderCell>Durum</Table.HeaderCell>
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
            <Table.Cell>
              {
                  <If condition ={jobPosting.status ===-1 }>
                    <Then>
                      <Label  color="yellow">
                        Onay Bekliyor
                      </Label>
                    </Then>
                    <ElseIf condition={jobPosting.status ===0}>
                      <Then>
                        <Label color="red">Reddedildi</Label>
                      </Then>
                    </ElseIf>
                    <Else>
                      <Then>
                        <Label color ="green">Onaylandı</Label>
                      </Then>
                    </Else>
                  </If>

              }
            </Table.Cell>
            {/* <Table.Cell>{jobPosting.jobDescription}</Table.Cell> */}
            <Table.Cell>
              <Button.Group>
              <Button
                  type ="submit"
                  color="orange"
                  onClick={() => changeState(jobPosting.id ,1)}
              
                >Onayla</Button>
                  <Button
                   type="submit"
                   onClick={() => changeState(jobPosting.id,0)}

                   style={{marginLeft:'0.4em'}}  
                  >Reddet</Button>
              </Button.Group>
         
             
            </Table.Cell>

            
            

          </Table.Row>
      ))}
      </Table.Body>
    </Table>
          
   </div>
   );

  }
  
   

}
