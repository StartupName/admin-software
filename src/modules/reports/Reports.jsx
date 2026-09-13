import { FileText, FileSpreadsheet } from "lucide-react";
import "./Reports.css";
import TableComponent from "../dashboard/components/TableComponent/TableComponent";
import ApartmentStatusDonut from "../dashboard/components/ChartsComponent/graphics/ApartmentStatusDonut";
import "../dashboard/components/ChartsComponent/ChartsComponent.css";
import tableData from "./components/TableComponent/data/example_data.json";
import chartData from "./components/ChartComponent/data/example_data.json";

const columns = Object.keys(tableData[0] || {}).map((key) => ({
  key,
  header: key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
}));

const formatColumn = columns.find((col) => col.key === "format");
if (formatColumn) {
  formatColumn.render = (value) => {
    if (value === "pdf") {
      return (
        <span className="reports-format reports-format--pdf">
          <FileText size={18} />
          PDF
        </span>
      );
    }
    if (value === "excel") {
      return (
        <span className="reports-format reports-format--excel">
          <FileSpreadsheet size={18} />
          Excel
        </span>
      );
    }
    return value;
  };
}

function Reports() {
  return (
    <div className="reports-container">
      <h1>Reportes</h1>

      <div className="reports-table">
        <TableComponent
          icon={<FileText />}
          title="Reportes generados"
          columns={columns}
          data={tableData}
        />

        <ApartmentStatusDonut
          data={chartData}
          title="Reportes por módulo"
          legendPosition="bottom"
        />
      </div>
    </div>
  );
}

export default Reports;
