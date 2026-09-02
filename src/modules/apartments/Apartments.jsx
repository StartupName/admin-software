import './Apartments.css';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import SummaryComponent from './components/SummaryComponent/SummaryComponent';

function Apartments() {
  return (
    <>
      <NavigationComponent />
      <SummaryComponent values={[120, 78, 28, 14, 92]} />
    </>
  );
}

export default Apartments;
