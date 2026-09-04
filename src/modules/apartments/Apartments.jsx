import './Apartments.css';
import { Building2 } from 'lucide-react';

// Reuse: import Table and Charts from their existing dashboard location
// and test data from JSON files via props — no duplicate components
import TableComponent from '../dashboard/components/TableComponent/TableComponent';
import ChartsComponent from '../dashboard/components/ChartsComponent/ChartsComponent';

// Test data imported from JSON — editing these files updates the UI without touching JSX
// Table data from payments module as specified in the task
import paymentsTableData from '../payments/components/TableComponent/example_data.json';
// Chart data from payments/component/ChartComponent/example_data.json
import chartData from '../payments/components/ChartComponent/example_data.json';

function Apartments() {
  // Reuse: build columns dynamically from the first record of the JSON
  // so the table supports any number of fields without hardcoding
  const columns = paymentsTableData.length > 0
    ? Object.keys(paymentsTableData[0]).map((key) => ({
        key,
        header: key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      }))
    : [];

  // Reuse: augment estado column with pill render without modifying TableComponent internals
  columns.forEach((col) => {
    if (col.key === 'estado') {
      col.render = (value) => (
        <span
          className={`status-badge status-badge--${
            value === 'Al día'
              ? 'uptodate'
              : value === 'Pendiente'
                ? 'pending'
                : 'delay'
          }`}
        >
          {value}
        </span>
      );
    }
    // Format valor as currency if needed
    if (col.key === 'valor') {
      const originalRender = col.render;
      col.render = (value, row, idx) =>
        originalRender ? originalRender(value, row, idx) : `$ ${Number(value).toLocaleString('es-CO')}`;
    }
  });

  // Add Actions column dynamically as shown in the reference image
  const columnsWithActions = [
    ...columns,
    {
      key: 'acciones',
      header: 'Acciones',
      render: () => (
        <span style={{ display: 'flex', gap: '8px' }}>
          <button type="button" style={{ color: '#2563eb' }}>ver</button>
          <button type="button" style={{ color: '#6b7280' }}>…</button>
        </span>
      ),
    },
  ];

  return (
    <div className="apartments">
      <TableComponent
        icon={<Building2 size={18} />}
        title="Apartamentos"
        columns={columnsWithActions}
        data={paymentsTableData}
      />

      <ChartsComponent
        incomeData={chartData.incomeData}
        statusData={chartData.statusData}
        thirdData={chartData.thirdData}
      />
    </div>
  );
}

export default Apartments;
