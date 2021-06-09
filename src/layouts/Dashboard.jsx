import React from 'react'
import Section from './Section';
import SideBar from "./SideBar";
import { Grid } from "semantic-ui-react";


export default function Dashboard() {
    return (
        <div>  
        <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <SideBar/>
          </Grid.Column>
          <Grid.Column width={12}>
              <Section/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
            
       </div>
    )
}
