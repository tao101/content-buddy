import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../../index';

export const supportedModels = [
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-0301',
  'gpt-4',
  'gpt-4-0314',
];

export interface SettingsState {
  openAIKey: string;
  model: (typeof supportedModels)[number];
}

const initialState: SettingsState = {
  openAIKey: '',
  model: supportedModels[0],
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setOpenAIKey(state, action: PayloadAction<string>) {
      state.openAIKey = action.payload;
    },
    setModel(state, action: PayloadAction<SettingsState['model']>) {
      state.model = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.settings,
      };
    });
  },
});

export const { setOpenAIKey, setModel } = settingsSlice.actions;

export const settingState = (state: AppState) => state.settings;

export default settingsSlice.reducer;
