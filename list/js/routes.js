import List from 'https://fgdps.pages.dev/list/js/pages/List.js';
import Leaderboard from 'https://fgdps.pages.dev/list/js/pages/Leaderboard.js';
import Roulette from 'https://fgdps.pages.dev/list/js/pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
