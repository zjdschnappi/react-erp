const { Layout, Menu, Icon, Dropdown, Table, Popconfirm} = antd;
const { Header, Sider, Content } = Layout;
import Mockdata from './module/data.js';

// const _data = [];
// for (let i = 0; i < 46; i++) {
//   _data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }

class Mtable extends React.Component {

    columns = [{
      title: 'ID',
      dataIndex: 'id',
    }, {
      title: '用户名',
      dataIndex: 'username',
    }, {
      title: '手机号',
      dataIndex: 'cell',
    },
    {
      title: 'QQ',
      dataIndex: 'qq',
    },
    {
      title: '账户余额',
      dataIndex: 'account',
    },
    {
      title: '注册时间',
      dataIndex: 'time',
    },
    {
      title: '所属销售',
      dataIndex: 'belong',
    },
    {
      title: '备注',
      dataIndex: 'memo',
    },
    {
      title: '状态',
      dataIndex: 'status',
    }, {
        title: '操作',
        dataIndex: 'action',
        render: (text, record) => {
            return (
                this.state.dataSource.length > 1 ?
                (
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                    <a href="#">Delete</a>
                  </Popconfirm>
                ) : null
              );
         },
    }];
    onDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    dataSource: [],
    pagination: {},
    loading: false,
  };
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch();
  }
  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    let self = this;
    let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://mockjs');
        xhr.responseType = 'json';

        xhr.onload = function() {
          console.log(typeof JSON.parse(xhr.response));

             self.setState({
               loading: false,
               dataSource: JSON.parse(xhr.response)
             });
        };

        xhr.onerror = function() {
          console.log("Oops, error");
        };

        xhr.send();
    // fetch("http://mockjs",{
    //     method: "GET",
    //     body: {
    //         userName:'',
    //         cell1:'',
    //         staffLoginName:'admin',
    //         qq:'',
    //         gmtFirstUserRegistStart:'',
    //         gmtFirstUserRegistEnd:'',
    //         customerRegisterStatus:'ALL',
    //         currentPage:params.page||1,
    //         labelIds:''
    //
    //     }
    // }).then(response => response.json())
    //   .then(data => {
    //       console.log(data)
    //   })
    //   .catch(e => console.log("Oops, error", e))
      }
  componentWillMount() {
      Mock.mock('http://mockjs',Mockdata);
  }
  componentDidMount() {

      this.fetch();
  }
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      // selectedRowKeys,
      // onChange: this.onSelectChange,
      // hideDefaultSelections: true,
      // selections: [{
      //   key: 'all-data',
      //   text: 'Select All Data',
      //   onSelect: () => {
      //     this.setState({
      //       selectedRowKeys: [...Array(46).keys()], // 0...45
      //     });
      //   },
      // }, {
      //   key: 'odd',
      //   text: 'Select Odd Row',
      //   onSelect: (changableRowKeys) => {
      //     let newSelectedRowKeys = [];
      //     newSelectedRowKeys = changableRowKeys.filter((key, index) => {
      //       if (index % 2 !== 0) {
      //         return false;
      //       }
      //       return true;
      //     });
      //     this.setState({ selectedRowKeys: newSelectedRowKeys });
      //   },
      // }, {
      //   key: 'even',
      //   text: 'Select Even Row',
      //   onSelect: (changableRowKeys) => {
      //     let newSelectedRowKeys = [];
      //     newSelectedRowKeys = changableRowKeys.filter((key, index) => {
      //       if (index % 2 !== 0) {
      //         return true;
      //       }
      //       return false;
      //     });
      //     this.setState({ selectedRowKeys: newSelectedRowKeys });
      //   },
      // }],
      // onSelection: this.onSelection,
    };
    return (
      <Table
        rowSelection={rowSelection}
        columns={this.columns}
        rowKey={record => record.registered}
        dataSource={this.state.dataSource}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
        />
    );
  }
}

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    let dropMenu = (
        <Menu>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="myInfo.html">个人中心</a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="">退出</a>
            </Menu.Item>
      </Menu>
  );
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span className="user-logo">admin</span>
            <Dropdown overlay={dropMenu}>
                <a className="ant-dropdown-link" href="#">
                    <Icon type="down" />
                </a>
             </Dropdown>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 880 }}>
            <Mtable />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));
