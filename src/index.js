import './style.css';
import { getGameId } from './modules/getId.js';
import { displayGameData } from './modules/post.js';

if (!localStorage.getItem('game_id')) getGameId();

displayGameData();
