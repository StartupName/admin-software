import { ChevronDown } from 'lucide-react'
import './FilterField.css'

export default function FilterField({ label, options = [], value, onChange }) {
  return (
    <label className="filter-field">
      <span className="filter-field__label">{label}</span>
      <span className="filter-field__select">
        <select value={value} onChange={(e) => onChange?.(e.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown size={16} />
      </span>
    </label>
  )
}
