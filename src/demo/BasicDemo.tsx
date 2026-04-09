import React from 'react';
import { Table } from '../table-self';

const columns = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    key: 'age',
    title: 'Age',
    dataIndex: 'age',
    width: 100,
  },
  {
    key: 'address',
    title: 'Address',
    dataIndex: 'address',
    width: 250,
  },
];

const data = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park' },
];

const BasicDemo: React.FC = () => {
  return (
    <div>
      <h3>基础表格 (Basic Table)</h3>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default BasicDemo;
