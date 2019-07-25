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
      <div style={{ width: 280 }}>
        <Menu
          className="navbar"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}>
          <Menu.Item key="1">
            <Icon type="edit" />
            <a href="#supply-chart-1">Pencils</a>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="scissor" />
            Scissors
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="delete" />
            Trash Cans
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="pushpin" />
            Pushpins
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="usb" />
            USB Drives
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;