import './Apartments.css';
import SummaryComponent from './components/SummaryComponent/SummaryComponent';

function Apartments() {
  return (
    <>
      <SummaryComponent values={[120, 78, 28, 14, 92]} />
    </>
  );
}

export default Apartments;
