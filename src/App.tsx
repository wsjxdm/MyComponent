import { useState } from 'react'
import {
  BasicDemo,
  CustomRenderDemo,
  SelectionDemo,
  VirtualScrollDemo
} from './demo'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('basic');

  const renderContent = () => {
    switch (activeTab) {
      case 'basic':
        return <BasicDemo />;
      case 'custom':
        return <CustomRenderDemo />;
      case 'selection':
        return <SelectionDemo />;
      case 'virtual':
        return <VirtualScrollDemo />;
      default:
        return <BasicDemo />;
    }
  }

  return (
    <div className="App" style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Table Component Documentation</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          A high-performance, feature-rich table component with support for virtual scrolling, selection, and custom rendering.
        </p>
      </header>

      <div style={{ display: 'flex', gap: '40px' }}>
        <nav style={{ width: '200px', flexShrink: 0 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, position: 'sticky', top: '20px' }}>
            {[
              { id: 'basic', label: '基础表格' },
              { id: 'custom', label: '自定义渲染' },
              { id: 'selection', label: '行选择' },
              { id: 'virtual', label: '虚拟滚动' }
            ].map(item => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 15px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: activeTab === item.id ? '#e6f7ff' : 'transparent',
                    color: activeTab === item.id ? '#1890ff' : '#333',
                    cursor: 'pointer',
                    fontWeight: activeTab === item.id ? '600' : '400',
                    transition: 'all 0.3s'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main style={{ flexGrow: 1, minWidth: 0 }}>
          <section style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            {renderContent()}
          </section>

          <section style={{ marginTop: '40px' }}>
            <h2>API 概览</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #f0f0f0' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>属性</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>类型</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px' }}>data</td>
                  <td style={{ padding: '12px' }}><code>any[]</code></td>
                  <td style={{ padding: '12px' }}>表格数据源</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px' }}>columns</td>
                  <td style={{ padding: '12px' }}><code>Column[]</code></td>
                  <td style={{ padding: '12px' }}>列定义</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px' }}>virtual</td>
                  <td style={{ padding: '12px' }}><code>boolean</code></td>
                  <td style={{ padding: '12px' }}>是否开启虚拟滚动</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px' }}>rowSelection</td>
                  <td style={{ padding: '12px' }}><code>{`{ selectedRowKeys, onChange }`}</code></td>
                  <td style={{ padding: '12px' }}>行选择配置</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px' }}>height</td>
                  <td style={{ padding: '12px' }}><code>number</code></td>
                  <td style={{ padding: '12px' }}>表格高度（虚拟滚动必填）</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
