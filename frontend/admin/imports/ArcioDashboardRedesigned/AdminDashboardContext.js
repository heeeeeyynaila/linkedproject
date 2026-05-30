import { createContext } from 'react';

export const AdminDashboardContext = createContext({
  total_patients: 0,
  total_doctors: 0,
  appointments_today: 0,
  pending_today: 0
});
