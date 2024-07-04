import { combineReducers } from '@reduxjs/toolkit';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
    news: newsReducer,
    breakingNews: newsReducer,
    worldNews: newsReducer,
    businessNews: newsReducer,
    scienceNews: newsReducer,
    sportsNews: newsReducer,
    euro2024News: newsReducer
});

export default rootReducer;