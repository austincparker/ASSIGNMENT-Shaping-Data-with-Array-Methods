import { showCards, showNYBiz, showManuCards, showAgents } from './components/bizCards.js';
import searchEvents from './helpers/events.js'

const init = () => {
showCards();
showNYBiz();
showManuCards();
showAgents();
searchEvents();
};

init();
