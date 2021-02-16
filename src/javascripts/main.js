import initialCall from './components/initialLoad';
import domEvents from './helpers/domEvents';

import '../styles/main.scss';

const init = () => {
  initialCall();
  domEvents();
};

init();
