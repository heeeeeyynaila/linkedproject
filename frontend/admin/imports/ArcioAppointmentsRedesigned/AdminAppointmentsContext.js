import { createContext } from 'react';

export const AdminAppointmentsContext = createContext({
  appointments: [],
  stats: { total: 0, completed: 0, pending: 0, cancelled: 0 },
  refreshAppointments: () => {}
});
