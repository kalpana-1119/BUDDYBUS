
export interface Bus {
  id: string;
  number: string;
  route: string;
  driverPhone: string;
  startPoint: string;
  endPoint: string;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  isActive: boolean;
  scheduledDepartures: string[];
  imageUrl: string;
}

// Mock database of buses
export const buses: Bus[] = [
  {
    id: '1',
    number: '1234',
    route: 'BHPV - Gajuwaka - Kurmanapalem',
    driverPhone: '6300489462',
    startPoint: 'BHPV',
    endPoint: 'Kurmanapalem',
    isActive: true,
    scheduledDepartures: ['07:00', '08:30', '10:00', '11:30', '13:00', '14:30', '16:00', '17:30'],
    imageUrl: '/placeholder.svg'
  },
  {
    id: '2',
    number: '5678',
    route: 'Gajuwaka - Kurmanapalem - BHPV',
    driverPhone: '6300489463',
    startPoint: 'Gajuwaka',
    endPoint: 'BHPV',
    isActive: true,
    scheduledDepartures: ['07:15', '08:45', '10:15', '11:45', '13:15', '14:45', '16:15', '17:45'],
    imageUrl: '/placeholder.svg'
  },
  {
    id: '3',
    number: '9012',
    route: 'Kurmanapalem - BHPV - Gajuwaka',
    driverPhone: '6300489464',
    startPoint: 'Kurmanapalem',
    endPoint: 'Gajuwaka',
    isActive: false,
    scheduledDepartures: ['07:30', '09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00'],
    imageUrl: '/placeholder.svg'
  }
];

// Get bus by ID
export const getBusById = (id: string): Bus | undefined => {
  return buses.find(bus => bus.id === id);
};

// Get bus by number
export const getBusByNumber = (number: string): Bus | undefined => {
  return buses.find(bus => bus.number === number);
};

// Search buses by number (partial match)
export const searchBusesByNumber = (query: string): Bus[] => {
  if (!query) return buses;
  return buses.filter(bus => bus.number.includes(query));
};

// Check if a bus is in service hours (7:00 AM to 6:15 PM)
export const isInServiceHours = (): boolean => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  
  // Convert to minutes since midnight for easier comparison
  const currentTimeInMinutes = hours * 60 + minutes;
  const startTimeInMinutes = 7 * 60; // 7:00 AM
  const endTimeInMinutes = 18 * 60 + 15; // 6:15 PM
  
  return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes;
};
