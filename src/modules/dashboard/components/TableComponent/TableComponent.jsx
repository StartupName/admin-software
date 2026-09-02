import React from "react";
import "./TableComponent.css";

/**
 * StatusBadge
 * A small, generic supporting component. It has no knowledge of any
 * business domain (payments, users, etc). It simply renders a label
 * with a semantic visual variant (success, info, warning, danger, neutral).
 *
 * It is exported so that consumers of <TableComponent /> can use it
 * inside a column's `render` function, without TableComponent itself
 * having to know anything about "payment methods" or any other
 * domain-specific concept.
 */
export function StatusBadge({ label, variant = "neutral" }) {
  return (
    <span className={`status-badge status-badge--${variant}`}>
      {label}
    </span>
  );
}

/**
 * Default icon rendered in the table header when the consumer does
 * not provide a custom `icon` prop.
 */
function DefaultTableIcon() {
  return (
    <svg
      className="table-component__icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 3h12a1 1 0 0 1 1 1v16l-7-4-7 4V4a1 1 0 0 1 1-1z" />
    </svg>
  );
}

/**
 * TableComponent
 * ----------------------------------------------------------------
 * Fully generic and reusable table component.
 *
 * It does NOT contain:
 *  - Hardcoded titles.
 *  - Hardcoded records belonging to any specific module.
 *  - Any knowledge about the domain of the data it receives.
 *
 * All rendered content (title, columns, rows) is received via props.
 *
 * Props:
 * @param {string} title
 *    Title displayed in the table header. Fully dynamic.
 *
 * @param {React.ReactNode} [icon]
 *    Optional header icon. Falls back to a default icon when omitted.
 *
 * @param {string} [actionLabel="Ver todos"]
 *    Label for the action link in the top-right corner of the header.
 *    Pass actionLabel={null} to hide it.
 *
 * @param {() => void} [onActionClick]
 *    Callback fired when the header action is clicked.
 *
 * @param {Array<{
 *    key: string,
 *    header: string,
 *    align?: "left" | "center" | "right",
 *    render?: (value: any, row: object, rowIndex: number) => React.ReactNode
 * }>} columns
 *    Defines the table columns dynamically.
 *    - `key`: property read from each data object.
 *    - `header`: text shown in the column header.
 *    - `render` (optional): customizes how the cell value is displayed
 *       (e.g. as a StatusBadge, a link, a button). Defaults to the raw value.
 *
 * @param {Array<object>} data
 *    List of objects representing table rows. Each object may have a
 *    completely different shape depending on the implementation; the
 *    component makes no assumption about structure beyond `columns`.
 *
 * @param {string|function} [rowKey="id"]
 *    Property name (or function) used to compute a unique key per row.
 *
 * @param {string} [emptyMessage="No hay registros para mostrar"]
 *    Message shown when `data` is empty.
 */
export default function TableComponent({
  title,
  icon,
  actionLabel = "Ver todos",
  onActionClick,
  columns = [],
  data = [],
  rowKey = "id",
  emptyMessage = "No hay registros para mostrar",
}) {
  const resolveRowKey = (row, index) => {
    if (typeof rowKey === "function") return rowKey(row, index);
    return row?.[rowKey] ?? index;
  };

  return (
    <div className="table-component">
      <div className="table-component__header">
        <div className="table-component__heading-group">
          <span className="table-component__icon-wrapper">
            {icon || <DefaultTableIcon />}
          </span>
          <h2 className="table-component__title">{title}</h2>
        </div>

        {actionLabel && (
          <button
            type="button"
            className="table-component__action-button"
            onClick={onActionClick}
          >
            {actionLabel}
          </button>
        )}
      </div>

      <div className="table-component__scroll-container">
        <table className="table-component__table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`table-component__header-cell text-align-${column.align || "left"}`}
                >
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
                  key={resolveRowKey(row, rowIndex)}
                  className="table-component__body-row"
                >
                  {columns.map((column) => {
                    const cellValue = row?.[column.key];
                    return (
                      <td
                        key={column.key}
                        className={`table-component__body-cell text-align-${column.align || "left"}`}
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
    </div>
  );
}
