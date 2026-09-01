import TableComponent, { Badge } from "./TableComponent";

/**
 * Este archivo es solo un EJEMPLO de consumo de <TableComponent />.
 * Aquí sí viven los datos de prueba y la lógica específica de este
 * módulo (pagos): colores de los badges, columnas a mostrar, etc.
 * Cuando exista backend real, `paymentsData` se reemplaza por la
 * respuesta de la API y el resto del código queda igual.
 */

const methodColor = {
  Transferencia: "green",
  PSE: "blue",
  Efectivo: "orange",
};

const paymentsData = [
  {
    id: 1,
    fecha: "23/08/2024",
    apartamento: "Apto 304",
    residente: "María Fernanda López",
    concepto: "Administración Agosto",
    valor: "$ 350.000",
    metodo: "Transferencia",
    comprobante: "C-12458",
  },
  {
    id: 2,
    fecha: "23/08/2024",
    apartamento: "Apto 201",
    residente: "Carlos Andrés Ruiz",
    concepto: "Administración Agosto",
    valor: "$ 350.000",
    metodo: "PSE",
    comprobante: "C-12457",
  },
  {
    id: 3,
    fecha: "22/08/2024",
    apartamento: "Apto 502",
    residente: "Juliana Torres",
    concepto: "Administración Agosto",
    valor: "$ 350.000",
    metodo: "Transferencia",
    comprobante: "C-12456",
  },
  {
    id: 4,
    fecha: "22/08/2024",
    apartamento: "Apto 101",
    residente: "Diego Alejandro Vargas",
    concepto: "Administración Agosto",
    valor: "$ 350.000",
    metodo: "Efectivo",
    comprobante: "C-12455",
  },
  {
    id: 5,
    fecha: "21/08/2024",
    apartamento: "Apto 403",
    residente: "Ana Sofía Gómez",
    concepto: "Administración Agosto",
    valor: "$ 350.000",
    metodo: "Transferencia",
    comprobante: "C-12454",
  },
];

const paymentsColumns = [
  { key: "fecha", header: "Fecha" },
  { key: "apartamento", header: "Apartamento" },
  { key: "residente", header: "Residente" },
  { key: "concepto", header: "Concepto" },
  { key: "valor", header: "Valor" },
  {
    key: "metodo",
    header: "Método",
    render: (value) => (
      <Badge text={value} color={methodColor[value] || "gray"} />
    ),
  },
  {
    key: "comprobante",
    header: "Comprobante",
    render: (value) => (
      <span className="tc-comprobante">
        {value}{" "}
        <button
          type="button"
          className="tc-download-btn"
          onClick={() => alert(`Descargando ${value}`)}
          aria-label={`Descargar comprobante ${value}`}
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
      onActionClick={() => console.log("Ver todos clickeado")}
      columns={paymentsColumns}
      data={paymentsData}
    />
  );
}

/**
 * Otro ejemplo, con datos y columnas COMPLETAMENTE distintas,
 * para demostrar que el mismo <TableComponent /> sirve para
 * cualquier módulo sin tocar su código interno.
 */
const usersData = [
  { id: 1, nombre: "Laura Ramírez", rol: "Administrador", estado: "Activo" },
  { id: 2, nombre: "Pedro Martínez", rol: "Vigilante", estado: "Inactivo" },
];

const usersColumns = [
  { key: "nombre", header: "Nombre" },
  { key: "rol", header: "Rol" },
  {
    key: "estado",
    header: "Estado",
    render: (value) => (
      <Badge text={value} color={value === "Activo" ? "green" : "red"} />
    ),
  },
];

export function UsersTableExample() {
  return (
    <TableComponent
      title="Usuarios del sistema"
      actionLabel={null}
      columns={usersColumns}
      data={usersData}
    />
  );
}
