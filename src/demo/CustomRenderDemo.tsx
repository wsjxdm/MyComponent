import React from 'react';
import { Table } from '../table-self';

interface DataType {
  key: string;
  name: string;
  age: number;
  tags: string[];
}

const columns = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    width: 150,
    render: (text: string) => <a style={{ color: '#1890ff', cursor: 'pointer' }}>{text}</a>,
  },
  {
    key: 'age',
    title: 'Age',
    dataIndex: 'age',
    width: 100,
  },
  {
    key: 'tags',
    title: 'Tags',
    dataIndex: 'tags',
    width: 200,
    render: (tags: string[]) => (
      <span>
        {tags.map(tag => (
          <span 
            key={tag} 
            style={{ 
              marginRight: 8, 
              padding: '2px 8px', 
              background: '#f0f0f0', 
              border: '1px solid #d9d9d9', 
              borderRadius: 4,
              fontSize: '12px'
            }}
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </span>
    ),
  },
  {
    key: 'action',
    title: 'Action',
    dataIndex: 'action',
    width: 150,
    render: (_: any, record: DataType) => (
      <button 
        onClick={() => alert(`Delete ${record.name}`)}
        style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}
      >
        Delete
      </button>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
  },
];

const CustomRenderDemo: React.FC = () => {
  return (
    <div>
      <h3>自定义渲染 (Custom Render)</h3>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default CustomRenderDemo;
