import { createContext } from 'react';

export const AdminPatientsContext = createContext({
  patients: [],
  searchQuery: '',
  setSearchQuery: () => {},
  sortBy: 'recently_added',
  setSortBy: () => {}
});
