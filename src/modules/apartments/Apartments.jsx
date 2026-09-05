import './Apartments.css';
import FiltersComponent from './components/FiltersComponent/FiltersComponent';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import SummaryComponent from './components/SummaryComponent/SummaryComponent';

function Apartments() {
  // TEMPORAL: la conexión real a la base de datos la hará integración.
  function handleQuery(params) {
    console.log('Consultar apartamentos con:', params)
  }

  return (
    <>
      <SummaryComponent values={[120, 78, 28, 14, 92]} />
      <FiltersComponent onQuery={handleQuery} />
      <NavigationComponent />
    </>
  );
}

export default Apartments;
