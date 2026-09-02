import './Apartments.css';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import FiltersComponent from './components/FiltersComponent/FiltersComponent';

function Apartments() {
  function queryApartments(filters) {
    console.log(filters);
  }

  return (
    <>
      <NavigationComponent />
      <FiltersComponent
        financialStatuses={['Al día', 'Pendiente', 'En mora']}
        floors={[1, 2, 3]}
        onQuery={queryApartments}
      />
    </>
  );
}

export default Apartments;