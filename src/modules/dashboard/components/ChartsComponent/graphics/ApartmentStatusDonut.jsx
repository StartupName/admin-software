import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// Donut chart is reusable: data and legend position are received via props
// Legend position controls layout through CSS class legend-${legendPosition}
export default function ApartmentStatusDonut({ data, legendPosition = "right", style }) {
  return (
    <div className={`chartCard donutWrapper legend-${legendPosition}`} style={style}>
      <div className="chartContainer">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={62}
              outerRadius={82}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="centerLabel">
          <span>120</span>
          <small>Unidades</small>
        </div>
      </div>

      <ul className="pieLegend">
        {data.map((item) => (
          <li key={item.name}>
            <i className="dot" style={{ background: item.color }} />
            {item.name}
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
