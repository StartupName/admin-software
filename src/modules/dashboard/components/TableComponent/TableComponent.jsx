import React from "react";
import "./TableComponent.css";


export function Badge({ text, color = "gray" }) {
  return (
    <span className={`tc-badge tc-badge--${color}`}>
      {text}
    </span>
  );
}

function DefaultHeaderIcon() {
  return (
    <svg
      className="tc-header-icon"
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
 * Componente de tabla 100% genérico y reutilizable.
 *
 * No contiene:
 *  - Títulos "quemados" (hardcoded) en el código.
 *  - Registros de ejemplo de ningún módulo específico.
 *  - Conocimiento sobre el dominio de los datos que recibe.
 *
 * Props:
 * @param {string} title
 *    Título que se muestra en el encabezado de la tabla.
 *    Totalmente dinámico: cambia sin tocar el componente.
 *
 * @param {React.ReactNode} [icon]
 *    Ícono opcional para el encabezado. Si no se pasa, se usa un
 *    ícono por defecto.
 *
 * @param {string} [actionLabel="Ver todos"]
 *    Texto del enlace/acción de la esquina superior derecha.
 *    Se puede omitir pasando actionLabel={null}.
 *
 * @param {() => void} [onActionClick]
 *    Callback que se ejecuta al hacer click en la acción del
 *    encabezado (ej: "Ver todos").
 *
 * @param {Array<{
 *    key: string,
 *    header: string,
 *    align?: "left" | "center" | "right",
 *    render?: (value: any, row: object, rowIndex: number) => React.ReactNode
 * }>} columns
 *    Define las columnas de la tabla de forma totalmente dinámica.
 *    - `key`: propiedad del objeto de datos que se debe leer.
 *    - `header`: texto que se muestra en el encabezado de columna.
 *    - `render` (opcional): permite personalizar cómo se pinta el
 *       valor de esa celda (ej: como Badge, como link, como botón).
 *       Si no se define, se muestra el valor "tal cual".
 *
 * @param {Array<object>} data
 *    Lista de objetos que representan las filas de la tabla.
 *    Cada objeto puede tener una forma completamente distinta según
 *    la implementación; el componente no asume ninguna estructura
 *    fija más allá de lo declarado en `columns`.
 *
 * @param {string|function} [rowKey="id"]
 *    Propiedad (o función) usada para obtener una key única por fila.
 *
 * @param {string} [emptyMessage="No hay registros para mostrar"]
 *    Mensaje mostrado cuando `data` está vacío.
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
  const getRowKey = (row, index) => {
    if (typeof rowKey === "function") return rowKey(row, index);
    return row?.[rowKey] ?? index;
  };

  return (
    <div className="tc-card">
      <div className="tc-header">
        <div className="tc-header-title">
          <span className="tc-header-icon-wrapper">
            {icon || <DefaultHeaderIcon />}
          </span>
          <h2 className="tc-title">{title}</h2>
        </div>

        {actionLabel && (
          <button
            type="button"
            className="tc-action-link"
            onClick={onActionClick}
          >
            {actionLabel}
          </button>
        )}
      </div>

      <div className="tc-table-scroll">
        <table className="tc-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`tc-th tc-align-${col.align || "left"}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td className="tc-empty" colSpan={columns.length || 1}>
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr key={getRowKey(row, rowIndex)} className="tc-tr">
                  {columns.map((col) => {
                    const value = row?.[col.key];
                    return (
                      <td
                        key={col.key}
                        className={`tc-td tc-align-${col.align || "left"}`}
                      >
                        {col.render
                          ? col.render(value, row, rowIndex)
                          : value}
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
