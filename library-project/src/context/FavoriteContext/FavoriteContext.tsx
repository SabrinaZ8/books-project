import { createContext } from 'react';
import { FavoriteContextType } from './types/index';

export const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);



