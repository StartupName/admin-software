import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import '../ChartsComponent.css'

// Donut chart is reusable: data, title, legend position and center labels
// are received via props. Center defaults keep Dashboard behavior (total + "Apartamentos").
export default function ApartmentStatusDonut({
  data,
  legendPosition = "right",
  title = "Estado de apartamentos",
  style,
  centerValue,
  centerLabel = "Apartamentos",
}) {
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
            <span>{centerValue ?? total}</span>
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
