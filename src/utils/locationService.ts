
// Map coordinates for our route
interface Coordinate {
  lat: number;
  lng: number;
}

// Simulated route points for BHPV - Gajuwaka - Kurmanapalem
export const routePoints: Coordinate[] = [
  { lat: 17.7064, lng: 83.2088 }, // BHPV (starting point)
  { lat: 17.7028, lng: 83.2124 },
  { lat: 17.6995, lng: 83.2156 },
  { lat: 17.6953, lng: 83.2182 }, // Gajuwaka (middle point)
  { lat: 17.6912, lng: 83.2214 },
  { lat: 17.6872, lng: 83.2243 },
  { lat: 17.6834, lng: 83.2271 }, // Kurmanapalem (end point)
];

// Calculate intermediate points between two points
const interpolate = (p1: Coordinate, p2: Coordinate, steps: number): Coordinate[] => {
  const points: Coordinate[] = [];
  for (let i = 0; i <= steps; i++) {
    points.push({
      lat: p1.lat + (p2.lat - p1.lat) * (i / steps),
      lng: p1.lng + (p2.lng - p1.lng) * (i / steps)
    });
  }
  return points;
};

// Generate detailed route with more points
export const generateDetailedRoute = (): Coordinate[] => {
  const detailedRoute: Coordinate[] = [];
  
  for (let i = 0; i < routePoints.length - 1; i++) {
    const segment = interpolate(routePoints[i], routePoints[i + 1], 10);
    detailedRoute.push(...segment);
  }
  
  return detailedRoute;
};

// Simulate real-time bus movement
export class BusLocationSimulator {
  private intervalId: number | null = null;
  private currentIndex = 0;
  private detailedRoute: Coordinate[];
  private onLocationUpdate: (location: Coordinate) => void;

  constructor(onLocationUpdate: (location: Coordinate) => void) {
    this.detailedRoute = generateDetailedRoute();
    this.onLocationUpdate = onLocationUpdate;
  }

  start() {
    if (this.intervalId) return;
    
    // Update location every second
    this.intervalId = window.setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.detailedRoute.length;
      this.onLocationUpdate(this.detailedRoute[this.currentIndex]);
    }, 1000);
    
    // Immediately send the first location
    this.onLocationUpdate(this.detailedRoute[this.currentIndex]);
  }

  stop() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Get a point that's a percentage along the route (0-1)
  getPositionAlongRoute(percentage: number): Coordinate {
    const index = Math.floor(percentage * (this.detailedRoute.length - 1));
    return this.detailedRoute[index];
  }
}

// Check if a driver should be actively sharing location based on time of day
export const shouldShareLocation = (): boolean => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  
  // Convert to minutes since midnight for easier comparison
  const currentTimeInMinutes = hours * 60 + minutes;
  const startTimeInMinutes = 7 * 60; // 7:00 AM
  const endTimeInMinutes = 18 * 60 + 15; // 6:15 PM
  
  return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes;
};
