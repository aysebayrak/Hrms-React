import React from "react";
import { Link } from "react-router-dom";
import {Container,Menu,Icon,Button } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
        <Menu.Item name="building outline" >
        <Icon name="bullseye" size="large" color="orange"    />
            AYŞE BAYRAK
          </Menu.Item>
          <Menu.Item name="home" />
          <Menu.Item  as={Link} to={"/jobPostingAdd"} name="İş İlanı Ekle" />
          <Menu.Item name="friends" />



          <Menu.Item position="right">
              <Button circular color='facebook' icon='facebook' />
              <Button circular color='twitter' icon='twitter' />
              <Button circular color='linkedin' icon='linkedin' />
               <Button circular color='google plus' icon='google plus' />
          </Menu.Item>
          

          <Menu.Item position="right">
              <Button.Group>
                <Button  color='orange'>Sign In</Button>
                {/* <Button.Or/> */}
                <Button color='teal' style={{marginLeft:'0.4em'}} >Sign Up</Button>
              </Button.Group>
            </Menu.Item>

           


        </Container>
      </Menu>
    </div>
  );
}
