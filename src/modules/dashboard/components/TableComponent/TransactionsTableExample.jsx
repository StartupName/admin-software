import { Download } from "lucide-react";
import TableComponent, { StatusBadge } from "./TableComponent";

const methodVariant = {
  Transferencia: "success",
  PSE: "info",
  Efectivo: "warning",
};

const transactionRecords = [
  {
    id: 1,
    date: "23/08/2024",
    description: "Recaudo de administración",
    concept: "Administración Agosto",
    amount: "$ 350.000",
    method: "Transferencia",
    comprobante: "C-12458",
  },
  {
    id: 2,
    date: "23/08/2024",
    description: "Arriendo zona social",
    concept: "Arrendamiento",
    amount: "$ 1.200.000",
    method: "PSE",
    comprobante: "C-12457",
  },
  {
    id: 3,
    date: "22/08/2024",
    description: "Mantenimiento de ascensor",
    concept: "Gastos de mantenimiento",
    amount: "- $ 480.000",
    method: "Transferencia",
    comprobante: "C-12456",
  },
  {
    id: 4,
    date: "22/08/2024",
    description: "Movimiento a fondos de reserva",
    concept: "Salida de reserva",
    amount: "- $ 900.000",
    method: "Efectivo",
    comprobante: "C-12455",
  },
  {
    id: 5,
    date: "21/08/2024",
    description: "Recaudo de administración",
    concept: "Administración Agosto",
    amount: "$ 350.000",
    method: "Transferencia",
    comprobante: "C-12454",
  },
];

const transactionColumns = [
  { key: "date", header: "Fecha" },
  { key: "description", header: "Descripción" },
  { key: "concept", header: "Concepto" },
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
  {
    key: "method",
    header: "Método",
    render: (value) => (
      <StatusBadge
        label={value}
        variant={methodVariant[value] || "neutral"}
      />
    ),
  },
  {
    key: "comprobante",
    header: "Comprobante",
    render: (value) => (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        {value}
        <button
          type="button"
          onClick={() => alert(`Descargando ${value}`)}
          aria-label={`Descargar comprobante ${value}`}
          style={{
            background: "none",
            border: "none",
            color: "#2563eb",
            cursor: "pointer",
            padding: 0,
            lineHeight: 1,
          }}
        >
          <Download size={14} />
        </button>
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