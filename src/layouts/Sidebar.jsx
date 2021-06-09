import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default function SideBar() {
  return (
    <div>
     <Menu inverted icon="labeled" vertical>
        <Menu.Item 
          name="bullhorn"
        >
          <Icon color="orange" name="bullhorn" />
          Job Title
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon color="orange" name="user" />
          Candidate
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon color="orange" name="user" />
          Employer
        </Menu.Item>
      </Menu>
      
    </div>
  )
}
