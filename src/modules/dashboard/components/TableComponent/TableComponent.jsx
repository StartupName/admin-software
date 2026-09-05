import "./TableComponent.css";
import defaultData from "./data/data_table.json";
import NavigationComponent from "../../../../common/components/NavigationComponent/NavigationComponent";

export function StatusBadge({ label, variant = "neutral" }) {
  return (
    <span className={`status-badge status-badge--${variant}`}>
      {label}
    </span>
  );
}

function buildDefaultColumnsFromData(data) {
  if (!data || data.length === 0) return [];
  const first = data[0];
  return Object.keys(first).map((key) => ({
    key,
    header: key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  }));
}

export default function TableComponent({
  icon,
  title,
  columns = [],
  data = null,
  emptyMessage = "No hay registros para mostrar",
  showNavigation = true
}) {
  const finalData = Array.isArray(data) && data.length > 0 ? data : defaultData;
  const finalColumns = (columns && columns.length > 0) ? columns : buildDefaultColumnsFromData(finalData);

  return (
    <div className="table-component">
      <div className="table-component__header">
        <h2 className="table-component__title">{icon} {title}</h2>
      </div>

      <div className="table-component__scroll-container">
        <table className="table-component__table">
          <thead>
            <tr>
              {finalColumns.map((column) => (
                <th key={column.key} className="table-component__header-cell">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {finalData.length === 0 ? (
              <tr>
                <td
                  className="table-component__empty-message"
                  colSpan={finalColumns.length || 1}
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              finalData.map((row, rowIndex) => (
                <tr
                  key={row.id ?? rowIndex}
                  className="table-component__body-row"
                >
                  {finalColumns.map((column) => {
                    const cellValue = row?.[column.key];
                    const headerLabel = column.header || column.key;
                    return (
                      <td
                        key={column.key}
                        className="table-component__body-cell"
                        data-label={headerLabel}
                      >
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
      <NavigationComponent showComponent = {showNavigation}/>
    </div>
  );
}