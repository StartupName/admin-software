import TableComponent, { StatusBadge } from "./TableComponent";

const transactionTypeVariant = {
  Ingreso: "success",
  "Pago recibido": "info",
  Gasto: "danger",
  Salida: "warning",
};

const transactionRecords = [
  {
    id: 1,
    date: "23/08/2024",
    description: "Recibo de administración Agosto",
    type: "Ingreso",
    amount: "$ 350.000",
  },
  {
    id: 2,
    date: "23/08/2024",
    description: "Pago de arriendo zona social",
    type: "Pago recibido",
    amount: "$ 1.200.000",
  },
  {
    id: 3,
    date: "22/08/2024",
    description: "Mantenimiento de ascensor",
    type: "Gasto",
    amount: "$ 480.000",
  },
  {
    id: 4,
    date: "22/08/2024",
    description: "Transferencia a fondos de reserva",
    type: "Salida",
    amount: "$ 900.000",
  },
  {
    id: 5,
    date: "21/08/2024",
    description: "Recibo de administración Agosto",
    type: "Ingreso",
    amount: "$ 350.000",
  },
];

const transactionColumns = [
  { key: "date", header: "Fecha" },
  { key: "description", header: "Descripción" },
  {
    key: "type",
    header: "Tipo",
    render: (value) => (
      <StatusBadge
        label={value}
        variant={transactionTypeVariant[value] || "neutral"}
      />
    ),
  },
  {
    key: "amount",
    header: "Valor",
    render: (value) => (
      <span
        style={{ display: "block", textAlign: "right", fontWeight: 600 }}
      >
        {value}
      </span>
    ),
  },
];

export default function TransactionsTableExample() {
  return (
    <TableComponent
      title="Transacciones recientes"
      columns={transactionColumns}
      data={transactionRecords}
    />
  );
}