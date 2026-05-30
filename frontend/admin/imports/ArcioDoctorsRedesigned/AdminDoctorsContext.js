import { createContext } from 'react';

export const AdminDoctorsContext = createContext({
  doctors: [],
  handleDownloadPDF: () => {}
});
