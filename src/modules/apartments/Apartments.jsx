import './Apartments.css';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import FiltersComponent from './components/FiltersComponent/FiltersComponent';
import apartmentsData from './components/TableComponent/data/example_data.json';

function Apartments() {
  const financialStatuses = [...new Set(apartmentsData.map((item) => item.estado))]
  const floors = [...new Set(apartmentsData.map((item) => item.piso))].sort((a, b) => a - b)

  function queryApartments(filters) {
    console.log(filters)
  }

  return (
    <>
      <FiltersComponent
        financialStatuses={financialStatuses}
        floors={floors}
        onQuery={queryApartments}
      />
      <NavigationComponent />
    </>
  );
}

export default Apartments;
