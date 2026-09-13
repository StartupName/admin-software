import { Building2, Receipt, CreditCard, Wallet } from 'lucide-react'

export default [
  {
    id: 'apartments',
    title: 'Informe de apartamentos',
    description: 'Consulta información general de los apartamentos.',
    icon: Building2,
    color: '#16a34a',
    circleColor: '#f0fdf4',
  },
  {
    id: 'expenses',
    title: 'Informe de gastos',
    description: 'Consulta los gastos registrados por apartamento.',
    icon: Receipt,
    color: '#dc2626',
    circleColor: '#fef2f2',
  },
  {
    id: 'payments',
    title: 'Informe de pagos',
    description: 'Consulta los pagos realizados y registrados.',
    icon: CreditCard,
    color: '#2563eb',
    circleColor: '#eff6ff',
  },
  {
    id: 'accounts-receivable',
    title: 'Informe de cuentas por cobrar',
    description: 'Consulta los valores pendientes de pago.',
    icon: Wallet,
    color: '#9333ea',
    circleColor: '#faf5ff',
  },
]
