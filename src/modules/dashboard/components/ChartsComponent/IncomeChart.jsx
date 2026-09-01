import { ComposedChart, Line, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

// Recharts is used for declarative chart composition with responsive containers
export default function IncomeChart({ data, style }) {
  return (
    <div className="chartCard" style={style}>
      <div className="chartHeader">
        <h3>Ingreso vs. Gastos</h3>
        <select>
          <option>Este mes</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <ComposedChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />

          <Area
            dataKey="ing"
            stroke="#22c55e"
            fill="#22c55e20"
            strokeWidth={2}
          />

          <Area
            dataKey="gas"
            stroke="#2563eb"
            fill="#2563eb20"
            strokeWidth={2}
          />

          <Line
            dataKey="ing"
            dot={false}
            stroke="#22c55e"
            strokeWidth={2}
          />

          <Line
            dataKey="gas"
            dot={false}
            stroke="#2563eb"
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>

      <div className="legend">
        <span>
          <i className="dot green" />
          Ingresos acumulados
        </span>

        <span>
          <i className="dot blue" />
          Gastos acumulados
        </span>
      </div>
    </div>
  )
}
