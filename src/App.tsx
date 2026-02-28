import { useState } from 'react'
import { Table } from './table-self'

interface User {
  key: string;
  id: number;
  name: string;
  age: number;
  email: string;
}

function App() {
  const [showFooter, setShowFooter] = useState(true);

  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      render: (value: any) => <strong>{value}</strong>
    },
    {
      key: 'age',
      title: 'Age',
      dataIndex: 'age',

    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: 'action',
      title: 'Action',
      dataIndex: 'action',
      render: (_: number, record: User) => (
        <button onClick={() => alert(`Clicked ${record.name}`)}>Edit</button>
      )
    }
  ];

  const data: User[] = [
    { key: 'John', id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { key: 'Jane', id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { key: 'Bob', id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' },
  ];

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>My Table Component</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={showFooter}
            onChange={(e) => setShowFooter(e.target.checked)}
          />
          Show Footer
        </label>
      </div>
      <Table
        data={data}
        columns={columns}
        showFooter={showFooter}
      />
    </div>
  )
}

export default App
