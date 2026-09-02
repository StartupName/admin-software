import './Apartments.css';
import FiltersComponent from './components/FiltersComponent/FiltersComponent';

function Apartments() {
  function queryApartments(filters) {
    console.log(filters)
  }

  return (
    <>
      <FiltersComponent
        financialStatuses={['Al día', 'Pendiente', 'En mora']}
        floors={[1, 2, 3]}
        onQuery={queryApartments}
      />
    </>
  );
}

export default Apartments;
