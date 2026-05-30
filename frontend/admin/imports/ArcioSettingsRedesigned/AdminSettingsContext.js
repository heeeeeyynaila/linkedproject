import { createContext } from 'react';

export const AdminSettingsContext = createContext({
  firstName: '',
  setFirstName: () => {},
  lastName: '',
  setLastName: () => {},
  email: '',
  setEmail: () => {},
  phone: '',
  setPhone: () => {},
  signature: null,
  setSignature: () => {},
  handleSave: () => {},
  handleDownloadPDF: () => {},
  loading: false
});
