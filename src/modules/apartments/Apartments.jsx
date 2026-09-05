import './Apartments.css';
import TopNavigationComponent from '../dashboard/components/topNavigationComponent/topNavigationComponent';
import topNavData from './components/TopNavigation/example_data.json';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import SummaryComponent from './components/SummaryComponent/SummaryComponent';

function Apartments() {
  return (
    <>
      <TopNavigationComponent
        organizationName={topNavData.organizationName}
        notificationCount={topNavData.notificationCount}
      />
      <SummaryComponent values={[120, 78, 28, 14, 92]} />
      <NavigationComponent />
    </>
  );
}

export default Apartments;
