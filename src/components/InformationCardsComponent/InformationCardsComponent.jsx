import React, { useState, useRef, useEffect } from "react";
import {
  DollarSign,
  Wallet,
  AlertTriangle,
  ShoppingCart,
  BarChart3,
  Calendar,
  ChevronDown,
} from "lucide-react";
import "./InformationCardsComponent.css";

/* ------------------------------------------------------------------ */
/*  StatCard: reutilizable, toda su info llega por props               */
/* ------------------------------------------------------------------ */
function StatCard({ icon: Icon, title, value, circleColor, trend }) {
  const isPositive = trend?.direction === "up";
  const trendClass = isPositive ? "stat-card-trend--up" : "stat-card-trend--down";

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div
          className="stat-card-icon-circle"
          style={{ backgroundColor: circleColor }}
        >
          <Icon size={20} className="stat-card-icon" strokeWidth={2.25} />
        </div>
        <p className="stat-card-title">{title}</p>
      </div>

      <p className="stat-card-value">{value}</p>

      {trend && (
        <p className={`stat-card-trend ${trendClass}`}>
          <span>{isPositive ? "↑" : "↓"}</span>
          <span>{trend.percentage}% vs. {trend.comparedTo}</span>
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MultiDatePicker: dropdown con lista de fechas seleccionables        */
/* ------------------------------------------------------------------ */
function MultiDatePicker({ availableDates, selectedDates, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleDate(date) {
    if (selectedDates.includes(date)) {
      onChange(selectedDates.filter((d) => d !== date));
    } else {
      onChange([...selectedDates, date]);
    }
  }

  const label =
    selectedDates.length === 0
      ? "Seleccionar mes"
      : selectedDates.length === 1
      ? selectedDates[0]
      : `${selectedDates.length} meses seleccionados`;

  return (
    <div className="date-picker" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="date-picker-button"
      >
        <Calendar size={16} className="date-picker-icon" />
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`date-picker-chevron ${open ? "date-picker-chevron--open" : ""}`}
        />
      </button>

      {open && (
        <div className="date-picker-dropdown">
          {availableDates.map((date) => {
            const checked = selectedDates.includes(date);
            return (
              <label key={date} className="date-picker-option">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleDate(date)}
                  className="date-picker-checkbox"
                />
                {date}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dashboard: ensambla todo, adminName llega por prop                 */
/* ------------------------------------------------------------------ */
function Dashboard({ adminName }) {
  // Datos de prueba para el selector de fechas (por ahora, un array estático)
  const testDates = ["Junio 2024", "Julio 2024", "Agosto 2024", "Septiembre 2024"];
  const [selectedDates, setSelectedDates] = useState(["Agosto 2024"]);

  // Datos de prueba para las tarjetas — en un caso real vendrían de una API
  const cardsData = [
    {
      id: "recaudo",
      icon: DollarSign,
      title: "Recaudo del mes",
      value: "$ 24.350.000",
      circleColor: "#10B981",
      trend: { direction: "up", percentage: 12, comparedTo: "Julio 2024" },
    },
    {
      id: "cartera-pendiente",
      icon: Wallet,
      title: "Cartera pendiente",
      value: "$ 8.650.000",
      circleColor: "#F59E0B",
      trend: { direction: "up", percentage: 5, comparedTo: "Julio 2024" },
    },
    {
      id: "cartera-vencida",
      icon: AlertTriangle,
      title: "Cartera vencida",
      value: "$ 3.250.000",
      circleColor: "#EF4444",
      trend: { direction: "down", percentage: 8, comparedTo: "Julio 2024" },
    },
    {
      id: "gastos",
      icon: ShoppingCart,
      title: "Gastos del mes",
      value: "$ 18.240.000",
      circleColor: "#3B82F6",
      trend: { direction: "up", percentage: 3, comparedTo: "Julio 2024" },
    },
    {
      id: "balance",
      icon: BarChart3,
      title: "Balance del mes",
      value: "$ 6.110.000",
      circleColor: "#8B5CF6",
      trend: { direction: "up", percentage: 18, comparedTo: "Julio 2024" },
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">¡Bienvenida, {adminName}!</h1>
            <p className="dashboard-subtitle">
              Aquí tienes el resumen general de la administración.
            </p>
          </div>

          <MultiDatePicker
            availableDates={testDates}
            selectedDates={selectedDates}
            onChange={setSelectedDates}
          />
        </div>

        <div className="cards-row">
          {cardsData.map((card) => (
            <StatCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              value={card.value}
              circleColor={card.circleColor}
              trend={card.trend}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InformationCardsComponent({ adminName }) {
  return <Dashboard adminName={adminName} />;
}