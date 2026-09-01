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
function StatCard({ icon: Icon, title, value, circleColor }) {
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
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MultiDatePicker: dropdown de fecha única para las estadísticas.
    Maneja, vía props, el caso en que no haya fechas disponibles.      */
/* ------------------------------------------------------------------ */
function MultiDatePicker({ availableDates, selectedDate, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const hasDates = availableDates.length > 0;

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectDate(date) {
    onChange(date);
    setOpen(false);
  }

  const label = selectedDate || (hasDates ? "Seleccionar mes" : "Sin fechas disponibles");

  return (
    <div className="date-picker" ref={ref}>
      <button
        type="button"
        onClick={() => hasDates && setOpen((o) => !o)}
        className="date-picker-button"
        disabled={!hasDates}
      >
        <Calendar size={16} className="date-picker-icon" />
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`date-picker-chevron ${open ? "date-picker-chevron--open" : ""}`}
        />
      </button>

      {open && hasDates && (
        <div className="date-picker-dropdown">
          {availableDates.map((date) => {
            const isSelected = date === selectedDate;
            return (
              <button
                key={date}
                type="button"
                onClick={() => selectDate(date)}
                className={`date-picker-option ${isSelected ? "date-picker-option--selected" : ""}`}
              >
                {date}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  AdminSummary: ensambla todo, adminName llega por prop              */
/* ------------------------------------------------------------------ */
function AdminSummary({ adminName, showDatePicker = true }) {
  // Datos de prueba para el selector de fechas (por ahora, un array estático)
  const testDates = ["Junio 2024", "Julio 2024", "Agosto 2024", "Septiembre 2024"];
  const [selectedDate, setSelectedDate] = useState("Agosto 2024");

  // Datos de prueba para las tarjetas — en un caso real vendrían de una API
  const cardsData = [
    {
      id: "recaudo",
      icon: DollarSign,
      title: "Recaudo del mes",
      value: "$ 24.350.000",
      circleColor: "#10B981",
    },
    {
      id: "cartera-pendiente",
      icon: Wallet,
      title: "Cartera pendiente",
      value: "$ 8.650.000",
      circleColor: "#F59E0B",
    },
    {
      id: "cartera-vencida",
      icon: AlertTriangle,
      title: "Cartera vencida",
      value: "$ 3.250.000",
      circleColor: "#EF4444",
    },
    {
      id: "gastos",
      icon: ShoppingCart,
      title: "Gastos del mes",
      value: "$ 18.240.000",
      circleColor: "#3B82F6",
    },
    {
      id: "balance",
      icon: BarChart3,
      title: "Balance del mes",
      value: "$ 6.110.000",
      circleColor: "#8B5CF6",
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

          {showDatePicker && (
            <MultiDatePicker
              availableDates={testDates}
              selectedDate={selectedDate}
              onChange={setSelectedDate}
            />
          )}
        </div>

        <div className="cards-row">
          {cardsData.map((card) => (
            <StatCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              value={card.value}
              circleColor={card.circleColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

 function InformationCardsComponent({ adminName, showDatePicker = true }) {
  return <AdminSummary adminName={adminName} showDatePicker={showDatePicker} />;
}

export default InformationCardsComponent