import React from 'react'

import SideBar from "./SideBar";
import { Grid } from "semantic-ui-react";
import { Route } from 'react-router-dom';
import JobPostingAdd from '../pages/JobPostingAdd';
import CandidateList from '../pages/User/Candidate/CandidateList';
import EmployeeList from '../pages/User/Employee/EmployeeList';
import EmployerList from '../pages/User/Employer/EmployerList';
import JobPostingList from '../pages/JobPostingList';


export default function Dashboard() {
    return (
        <div>  
        <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <SideBar/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/jobPostingAdd" component={JobPostingAdd}/>
            <Route exact path="/jobPostingList" component={JobPostingList}/>
            <Route exact path="/candidate" component={CandidateList}/>
            <Route exact path="/employee" component={EmployeeList}/>
            <Route exact path="/employer" component={EmployerList}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
            
       </div>
    )
}
