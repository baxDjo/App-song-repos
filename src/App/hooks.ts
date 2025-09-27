// src/app/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Hook pour dispatcher des actions avec le bon type
export const useAppDispatch: () => AppDispatch = useDispatch;

// Hook pour lire le state global avec le bon type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
