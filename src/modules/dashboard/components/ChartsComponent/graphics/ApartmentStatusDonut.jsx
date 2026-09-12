import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// Donut chart is reusable: data and legend position are received via props
// Legend position controls layout through CSS class legend-${legendPosition}
// NOTE (reuse): centerValue, centerLabel and formatValue are optional props
// added so other modules (e.g. expenses) can reuse this donut with their own
// center text and money formatting. Defaults keep the dashboard unchanged.
export default function ApartmentStatusDonut({ data, legendPosition = "right", title = "Estado de apartamentos", style, centerValue = "120", centerLabel = "Apartamentos", formatValue = (value) => value }) {
  const total = data.reduce((acc, cur) => acc + cur.value, 0)

  return (
    <div className={`chartCard donutCard legend-${legendPosition}`} style={style}>
      <h3 className="donutTitle">{title}</h3>

      <div className={`donutWrapper legend-${legendPosition}`}>
        <div className="chartContainer">
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={55}
                outerRadius={82}
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="centerLabel">
            <span>{centerValue}</span>
            <small>{centerLabel}</small>
          </div>
        </div>

        <ul className="pieLegend">
          {data.map((item) => {
            const pct = Math.round((item.value / total) * 100)
            return (
              <li key={item.name}>
                <i className="dot" style={{ background: item.color }} />
                <div className="pieLegendText">
                  <strong>{item.name}</strong>
                  <span>
                    {formatValue(item.value)} ({pct}%)
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

    </div>
  )
}
