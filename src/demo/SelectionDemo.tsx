import React, { useState, useMemo } from 'react';
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
  { key: '4', name: 'Disabled User', age: 99, address: 'Sydney No. 1 Lake Park' },
];

const SelectionDemo: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>(['1']);

  const rowSelection = useMemo(() => ({
    selectedRowKeys,
    onChange: (keys: any) => {
      setSelectedRowKeys(keys);
      console.log('Selected Row Keys:', keys);
    },
  }), [selectedRowKeys]);

  return (
    <div>
      <h3>行选择功能 (Row Selection)</h3>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setSelectedRowKeys([])}>Clear Selection</button>
        <span style={{ marginLeft: 8 }}>
          {selectedRowKeys.length > 0 ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table columns={columns} data={data} rowSelection={rowSelection} />
    </div>
  );
};

export default SelectionDemo;
