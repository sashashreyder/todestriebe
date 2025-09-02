export type Tour = { 
  id: string; 
  date: string; 
  city: string; 
  venue: string; 
  ticketsUrl?: string 
};

export const tours: Tour[] = [
  { 
    id: '1', 
    date: '2025-10-31', 
    city: 'São Paulo, BR', 
    venue: 'Fabrique', 
    ticketsUrl: '#' 
  },
  { 
    id: '2', 
    date: '2025-11-07', 
    city: 'Berlin, DE', 
    venue: 'SO36', 
    ticketsUrl: '#' 
  },
  { 
    id: '3', 
    date: '2025-11-15', 
    city: 'Oslo, NO', 
    venue: 'John Dee', 
    ticketsUrl: '#' 
  },
  { 
    id: '4', 
    date: '2025-11-22', 
    city: 'Stockholm, SE', 
    venue: 'Kvarnen', 
    ticketsUrl: '#' 
  },
  { 
    id: '5', 
    date: '2025-12-06', 
    city: 'Helsinki, FI', 
    venue: 'Tavastia', 
    ticketsUrl: '#' 
  }
];


