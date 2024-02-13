import { createContext, useContext } from 'react';

const NewsContext = createContext();

export const useNews = () => {
    return useContext(NewsContext);
}

export default NewsContext;


