import './QuickActionsComponent.css';
import { DollarSign, FileText, Building2 } from 'lucide-react';

// Reuse: icon map strictly necessary for reusable behavior with JSON test data
// (component receives icon as string from example_data.json and resolves it
// without requiring a redesign for future server data)
const iconMap = { DollarSign, FileText, Building2 }

export const defaultQuickActions = [
  { id: 1, title: 'Registrar pago', icon: DollarSign, color: '#22C55E' },
  { id: 2, title: 'Registrar gasto', icon: FileText, color: '#3B82F6' },
  { id: 3, title: 'Apartamentos', icon: Building2, color: '#8B5CF6' },
];

function QuickActionCard({ icon: Icon, title, color }) {
  return (
    <button
      type="button"
      className="quick-action-card"
      style={{
        backgroundColor: `${color}14`, // light tint of the color (square background)
      }}
    >
      <span
        className="quick-action-icon-circle"
        style={{
          backgroundColor: `${color}26`, // lighter circle behind the icon
        }}
      >
        {Icon && <Icon size={22} color={color} strokeWidth={2} />}
      </span>
      <span className="quick-action-title">{title}</span>
    </button>
  );
}


export default function QuickActionsComponent({ actions = defaultQuickActions }) {
  // Reuse: map icon strings from JSON to components, keep dynamic rendering
  // of N records without hardcoding
  const resolvedActions = actions.map((a) => ({
    ...a,
    icon: typeof a.icon === "string" ? iconMap[a.icon] || FileText : a.icon,
  }))
  const visibleActions = resolvedActions.slice(0, 6);

  return (
    <div className="quick-actions-container">
      <h2 className="quick-actions-title">
        <span className="quick-actions-bolt" aria-hidden="true">⚡</span>
        Acciones rápidas 
      </h2>

      <div className="quick-actions-grid">
        {visibleActions.map((action, index) => (
          <QuickActionCard
            key={action.id ?? index}
            icon={action.icon}
            title={action.title}
            color={action.color}
          />
        ))}
      </div>
    </div>
  );
}