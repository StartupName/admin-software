import {
  House,
  Building2,
  CreditCard,
  Wallet,
  ShoppingBag,
  BarChart3,
  MessageCircle,
  Users,
} from 'lucide-react'

export const navItems = [
  { to: '/dashboard', label: 'Panel principal', icon: House },
  { to: '/apartments', label: 'Apartamentos', icon: Building2 },
  { to: '/payments', label: 'Pagos', icon: CreditCard },
  { to: '/wallet', label: 'Cartera', icon: Wallet },
  { to: '/expenses', label: 'Gastos', icon: ShoppingBag },
  { to: '/reports', label: 'Reportes', icon: BarChart3 },
  { to: '/communications', label: 'Comunicaciones', icon: MessageCircle },
  { to: '/users', label: 'Usuarios y roles', icon: Users },
]
