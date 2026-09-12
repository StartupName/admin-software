import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
// Required when this donut is used outside ChartsComponent (e.g. Expenses/Payments):
// donutCard / centerLabel styles live in ChartsComponent.css.
import '../ChartsComponent.css'

// Donut chart is reusable: data, title, legend position and center labels
// are received via props. centerValue/centerLabel are a minimal addition so
// Expenses (and other modules) can show custom center text; defaults preserve
// Dashboard behavior (computed total + "Apartments"). Align with payments #100
// so the merge conflict on this file is trivial/identical.
export default function ApartmentStatusDonut({
  data,
  legendPosition = "right",
  title = "Apartment status",
  style,
  centerValue,
  centerLabel = "Apartments",
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
