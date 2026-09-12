import { Building2, LayoutDashboard, Users, CreditCard, Wallet, ChartNoAxesCombined, MessageCircle, Settings, Bell, FileText } from 'lucide-react'
import './DashboardPreview.css'

const navigation = [
  [LayoutDashboard, 'Dashboard'], [Building2, 'Apartamentos'], [Users, 'Residentes'],
  [CreditCard, 'Pagos'], [Wallet, 'Gastos'], [ChartNoAxesCombined, 'Reportes'],
  [MessageCircle, 'Comunicaciones'], [Settings, 'Configuración'],
]

export default function DashboardPreview() {
  return (
    <div className="landing-preview" aria-label="Vista ilustrativa del panel de administración de Enjadmin">
      <div className="landing-preview-header">
        <strong><Building2 size={23} /> Enjadmin</strong>
        <div className="landing-preview-user"><Bell size={15} /><Bell size={15} /><span className="landing-preview-avatar">MG</span><span><b>María González</b><small>Administradora</small></span></div>
      </div>
      <div className="landing-preview-body">
        <div className="landing-preview-sidebar">
          {navigation.map(([Icon, label], index) => <div key={label} className={index === 0 ? 'is-selected' : ''}><Icon size={12} />{label}</div>)}
        </div>
        <div className="landing-preview-content">
          <h3>Hola, María</h3><p>Resumen de tu edificio</p>
          <div className="landing-preview-stats">
            <div><small>Recaudo del mes</small><b>$ 48,320,000</b><small>↑ 12%</small></div>
            <div><small>Cartera vencida</small><b>$ 6,240,000</b><small>↑ 8%</small></div>
            <div><small>Gastos del mes</small><b>$ 15,300,000</b><small>↓ 5%</small></div>
          </div>
          <div className="landing-preview-bottom">
            <div className="landing-preview-chart"><h4>Recaudo últimos 6 meses</h4><div className="landing-preview-bars">{[40, 38, 52, 55, 63, 74].map((height, index) => <div key={index}><span style={{ height }}><i /><i /></span><small>{['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'][index]}</small></div>)}</div></div>
            <div className="landing-preview-actions"><h4>Acciones rápidas</h4>{['Registrar pago', 'Nuevo gasto', 'Generar reporte', 'Enviar comunicado'].map(label => <div key={label}><FileText size={12} />{label}</div>)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
