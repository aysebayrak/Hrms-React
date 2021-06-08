import React from 'react'
import { Grid, Sidebar  } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
           <Grid>
               <Grid.Row>
                   <Grid.Column width={2}>
                       <Sidebar/>

                    </Grid.Column   >
                   <Grid.Column width={14}>
                     <Sidebar/>
    
                   </Grid.Column   >
               </Grid.Row>
           </Grid>
            
        </div>
    )
}
