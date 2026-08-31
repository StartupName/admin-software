import './ChartsComponent.css'
import { Line, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart } from 'recharts'

const incomeData = [
  {name:'1 Ago',ing:2,gas:1},{name:'8 Ago',ing:12,gas:8},{name:'15 Ago',ing:16,gas:12},{name:'22 Ago',ing:26,gas:18},{name:'31 Ago',ing:33,gas:25}
]
const statusData = [
  {name:'Al día',value:78,color:'#22c55e'},
  {name:'Pendientes',value:28,color:'#eab308'},
  {name:'En mora',value:14,color:'#ef4444'}
]

export default function ChartsComponent(){
  return <div className="chartsGrid">
    <div className="chartCard">
      <div className="chartHeader"><h3>Ingreso vs. Gastos</h3><select><option>Este mes</option></select></div>
      <ResponsiveContainer width="100%" height={220}>
        <ComposedChart data={incomeData}>
          <XAxis dataKey="name" tick={{fontSize:12}}/><YAxis tick={{fontSize:12}}/><Tooltip/>
          <Area dataKey="ing" stroke="#22c55e" fill="#22c55e20" strokeWidth={2}/>
          <Area dataKey="gas" stroke="#2563eb" fill="#2563eb20" strokeWidth={2}/>
          <Line dataKey="ing" dot={false} stroke="#22c55e" strokeWidth={2}/><Line dataKey="gas" dot={false} stroke="#2563eb" strokeWidth={2}/>
        </ComposedChart>
      </ResponsiveContainer>
      <div className="legend"><span><i className="dot green"/> Ingresos acumulados</span><span><i className="dot blue"/> Gastos acumulados</span></div>
    </div>
    <div className="chartCard">
      <h3>Estado de unidades</h3>
      <div className="pieRow">
        <ResponsiveContainer width={160} height={160}><PieChart><Pie data={statusData} dataKey="value" innerRadius={50} outerRadius={75}>{statusData.map((e,i)=><Cell key={i} fill={e.color}/>)}</Pie><text x="50%" y="50%" textAnchor="middle"><tspan x="50%" dy="-5" fontSize="18" fontWeight="700">120</tspan><tspan x="50%" dy="15" fontSize="12">Unidades</tspan></text></PieChart></ResponsiveContainer>
        <ul className="pieLegend">
          <li><i className="dot green"/> Al día <span>78 (65%)</span></li>
          <li><i className="dot yellow"/> Pendientes <span>28 (23%)</span></li>
          <li><i className="dot red"/> En mora <span>14 (12%)</span></li>
        </ul>
      </div>
    </div>
  </div>
}