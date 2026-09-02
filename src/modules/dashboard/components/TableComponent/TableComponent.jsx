import "./TableComponent.css";

export function StatusBadge({ label, variant = "neutral" }) {
  return (
    <span className={`status-badge status-badge--${variant}`}>
      {label}
    </span>
  );
}

export default function TableComponent({
  title,
  columns = [],
  data = [],
  emptyMessage = "No hay registros para mostrar",
}) {
  return (
    <div className="table-component">
      <div className="table-component__header">
        <h2 className="table-component__title">{title}</h2>
      </div>

      <div className="table-component__scroll-container">
        <table className="table-component__table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="table-component__header-cell">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  className="table-component__empty-message"
                  colSpan={columns.length || 1}
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={row.id ?? rowIndex}
                  className="table-component__body-row"
                >
                  {columns.map((column) => {
                    const cellValue = row?.[column.key];
                    return (
                      <td key={column.key} className="table-component__body-cell">
                        {column.render
                          ? column.render(cellValue, row, rowIndex)
                          : cellValue}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}