import './Apartments.css';

import TopNavigationComponent from '../dashboard/components/topNavigationComponent/topNavigationComponent';
import InformationCardsComponent from '../dashboard/components/InformationCardsComponent/InformationCardsComponent';
import QuickActionsComponent from '../dashboard/components/QuickActionsComponent/QuickActionsComponent';

import navData from './components/TopNavigation/example_data.json';
import cardsData from './components/InformationCards/example_data.json';
import quickActionsData from './components/QuickActions/example_data.json';

function Apartments() {
  return (
    <div className="apartments">
      <TopNavigationComponent
        organizationName={navData.organizationName}
        notificationCount={navData.notificationCount}
      />

      <InformationCardsComponent
        cardsData={cardsData}
        adminName="Apartamentos"
        showDatePicker={false}
      />

      <QuickActionsComponent actions={quickActionsData} />
    </div>
  );
}

export default Apartments;
