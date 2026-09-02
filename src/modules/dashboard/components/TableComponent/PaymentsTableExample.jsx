import TableComponent, { StatusBadge } from "./TableComponent";

/**
 * This file is only an EXAMPLE of how to consume <TableComponent />.
 * All domain-specific logic (mock data, badge variants per payment
 * method, column definitions) lives here — NOT inside TableComponent.
 * When a real backend is available, `paymentRecords` is simply
 * replaced by the API response and the rest of the code stays the same.
 */

const paymentMethodVariant = {
  Transferencia: "success",
  PSE: "info",
  Efectivo: "warning",
};

const paymentRecords = [
  {
    id: 1,
    date: "23/08/2024",
    apartment: "Apto 304",
    resident: "María Fernanda López",
    concept: "Administración Agosto",
    amount: "$ 350.000",
    method: "Transferencia",
    receiptNumber: "C-12458",
  },
  {
    id: 2,
    date: "23/08/2024",
    apartment: "Apto 201",
    resident: "Carlos Andrés Ruiz",
    concept: "Administración Agosto",
    amount: "$ 350.000",
    method: "PSE",
    receiptNumber: "C-12457",
  },
  {
    id: 3,
    date: "22/08/2024",
    apartment: "Apto 502",
    resident: "Juliana Torres",
    concept: "Administración Agosto",
    amount: "$ 350.000",
    method: "Transferencia",
    receiptNumber: "C-12456",
  },
  {
    id: 4,
    date: "22/08/2024",
    apartment: "Apto 101",
    resident: "Diego Alejandro Vargas",
    concept: "Administración Agosto",
    amount: "$ 350.000",
    method: "Efectivo",
    receiptNumber: "C-12455",
  },
  {
    id: 5,
    date: "21/08/2024",
    apartment: "Apto 403",
    resident: "Ana Sofía Gómez",
    concept: "Administración Agosto",
    amount: "$ 350.000",
    method: "Transferencia",
    receiptNumber: "C-12454",
  },
];

const paymentColumns = [
  { key: "date", header: "Fecha" },
  { key: "apartment", header: "Apartamento" },
  { key: "resident", header: "Residente" },
  { key: "concept", header: "Concepto" },
  { key: "amount", header: "Valor" },
  {
    key: "method",
    header: "Método",
    render: (value) => (
      <StatusBadge
        label={value}
        variant={paymentMethodVariant[value] || "neutral"}
      />
    ),
  },
  {
    key: "receiptNumber",
    header: "Comprobante",
    render: (value) => (
      <span className="table-component__cell-with-action">
        {value}{" "}
        <button
          type="button"
          className="table-component__cell-action-button"
          onClick={() => alert(`Downloading ${value}`)}
          aria-label={`Download receipt ${value}`}
        >
          ⬇
        </button>
      </span>
    ),
  },
];

export default function PaymentsTableExample() {
  return (
    <TableComponent
      title="Últimos pagos registrados"
      actionLabel="Ver todos"
      onActionClick={() => console.log("View all clicked")}
      columns={paymentColumns}
      data={paymentRecords}
    />
  );
}

/**
 * A second example with a completely different dataset and columns,
 * demonstrating that the same <TableComponent /> works for any module
 * without touching its internal code.
 */
const userRecords = [
  { id: 1, name: "Laura Ramírez", role: "Administrador", status: "Activo" },
  { id: 2, name: "Pedro Martínez", role: "Vigilante", status: "Inactivo" },
];

const userColumns = [
  { key: "name", header: "Nombre" },
  { key: "role", header: "Rol" },
  {
    key: "status",
    header: "Estado",
    render: (value) => (
      <StatusBadge
        label={value}
        variant={value === "Activo" ? "success" : "danger"}
      />
    ),
  },
];

export function UsersTableExample() {
  return (
    <TableComponent
      title="Usuarios del sistema"
      actionLabel={null}
      columns={userColumns}
      data={userRecords}
    />
  );
}
