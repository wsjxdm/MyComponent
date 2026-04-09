import React from 'react';
import { Table } from '../table-self';

const columns = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id',
    width: 80,
  },
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    width: 250,
  },
  {
    key: 'age',
    title: 'Age',
    dataIndex: 'age',
    width: 80,
  },
];

const data = Array.from({ length: 1000 }, (_, i) => ({
  key: String(i),
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  age: 20 + (i % 50),
}));

const VirtualScrollDemo: React.FC = () => {
  return (
    <div>
      <h3>虚拟滚动 (Virtual Scroll) - 1000条数据</h3>
      <div style={{ height: '400px', border: '1px solid #eee' }}>
        <Table 
          columns={columns} 
          data={data} 
          virtual={true} 
          height={400} 
          rowHeight={40}
        />
      </div>
    </div>
  );
};

export default VirtualScrollDemo;
