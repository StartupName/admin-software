import {
  DollarSign,
  Wallet,
  AlertTriangle,
  ShoppingCart,
  BarChart3
} from "lucide-react";

export default [
    {
      "id": "recaudo",
      "icon": DollarSign,
      "title": "Recaudo del mes",
      "value": "$ 24.350.000",
      "circleColor": "#10B981",
    },
    {
      "id": "cartera-pendiente",
      "icon": Wallet,
      "title": "Cartera pendiente",
      "value": "$ 8.650.000",
      "circleColor": "#F59E0B",
    },
    {
      "id": "cartera-vencida",
      "icon": AlertTriangle,
      "title": "Cartera vencida",
      "value": "$ 3.250.000",
      "circleColor": "#EF4444",
    },
    {
      "id": "gastos",
      "icon": ShoppingCart,
      "title": "Gastos del mes",
      "value": "$ 18.240.000",
      "circleColor": "#3B82F6",
    },
    {
      "id": "balance",
      "icon": BarChart3,
      "title": "Balance del mes",
      "value": "$ 6.110.000",
      "circleColor": "#8B5CF6",
    }
]
