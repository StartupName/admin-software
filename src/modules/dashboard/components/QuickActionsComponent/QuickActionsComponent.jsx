import './QuickActionsComponent.css';

/**
 * QuickActionCard
 * Reusable single action button.
 * Fully driven by props: receives an icon component, a title and a color.
 *
 * Props:
 * - icon:  React component (icon) to render inside the card
 * - title: string, label shown below the icon
 * - color: string (hex/rgb), accent color for the icon and background tint
 */
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
        {Icon && <Icon size={20} color={color} strokeWidth={2} />}
      </span>
      <span className="quick-action-title">{title}</span>
    </button>
  );
}

/**
 * QuickActionsComponent
 * Renders a "Quick Actions" panel with 1 to 6 dynamic action cards.
 *
 * The "Quick Actions" title stays static, as allowed by the requirements.
 * All buttons are generated dynamically from the `actions` array, so adding,
 * removing or editing items does NOT require any change inside this component.
 *
 * Props:
 * - actions: array of objects, each shaped as:
 *     {
 *       id:    string | number (optional, used as React key),
 *       title: string,          -> descriptive title of the action
 *       icon:  React component, -> icon/logo passed via props
 *       color: string,          -> color used to style the square button
 *     }
 *   Only the first 6 items are rendered, per the acceptance criteria.
 */
export default function QuickActionsComponent({ actions = [] }) {
  const visibleActions = actions.slice(0, 6);

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