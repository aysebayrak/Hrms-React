import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

export default function SideBar() {
  return (
    <div>
     <Menu inverted icon="labeled" vertical>
        {/* <Menu.Item 
          name="bullhorn"
        >
          <Icon color="orange" name="bullhorn" />
          Job Title
        </Menu.Item> */}

        <Menu.Item as={Link} to={"/candidate"}
          name="user"
        >
          <Icon color="orange" name="user" />
          Aday
        </Menu.Item>

        <Menu.Item as={Link} to={"/employer"}
          name="user"
        >
          <Icon color="orange" name="user" />
          İş Veren
        </Menu.Item>


        <Menu.Item as={Link} to={"/employee"}
          name="user"
        >
          <Icon color="orange" name="user" />
          Çalışan
        </Menu.Item>
      </Menu>
      
    </div>
  )
}
