import React from 'react'
import { Menu, Icon, Divider } from 'antd';

const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <Menu
          className="navbar"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}>
          <Menu.Item key="1">
            <a href="#supply-chart-1">
              <Icon type="edit" />
              Pencils
            </a>
          </Menu.Item>
          <Menu.Item key="2" disabled>
            <a href="#supply-chart-2">
              <Icon type="scissor" />
              Scissors
            </a>
          </Menu.Item>
          <Menu.Item key="3" disabled>
            <a href="#supply-chart-3">
              <Icon type="pushpin" />
              Thumbtacks
            </a>
          </Menu.Item>
          {/* <Menu.Item key="4">
            <a href="#supply-chart-4">
              <Icon type="pushpin" />
              Thumbtacks
            </a>
          </Menu.Item>
          <Menu.Item key="5">
            <a href="#supply-chart-5">
              <Icon type="usb" />
              USB Drives
            </a>
          </Menu.Item> */}
        </Menu>
      </div>
    );
  }
}

export default Navbar;