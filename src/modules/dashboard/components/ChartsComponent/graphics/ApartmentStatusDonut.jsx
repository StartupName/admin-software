import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// Donut chart is reusable: data and legend position are received via props
// Legend position controls layout through CSS class legend-${legendPosition}
export default function ApartmentStatusDonut({ data, legendPosition = "right", title = "Estado de apartamentos", style }) {
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
            <span>{total}</span>
            <small>Apartamentos</small>
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
                    {item.value} ({pct}%)
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
