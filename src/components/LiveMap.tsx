
import React, { useEffect, useRef, useState } from 'react';
import { Bus } from 'lucide-react';
import { BusLocationSimulator, routePoints } from '@/utils/locationService';

interface Coordinate {
  lat: number;
  lng: number;
}

interface LiveMapProps {
  busId: string;
  isActive: boolean;
}

const LiveMap: React.FC<LiveMapProps> = ({ busId, isActive }) => {
  const [currentLocation, setCurrentLocation] = useState<Coordinate | null>(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const simulatorRef = useRef<BusLocationSimulator | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (isActive) {
      // Initialize simulator
      simulatorRef.current = new BusLocationSimulator((location) => {
        setCurrentLocation(location);
      });
      
      // Start the simulator
      simulatorRef.current.start();
      
      let startTime: number;
      const totalDuration = 60000; // 1 minute for a complete animation cycle
      
      // Animation loop for smooth movement
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % totalDuration) / totalDuration;
        
        setAnimationProgress(progress);
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      // Clean up
      if (simulatorRef.current) {
        simulatorRef.current.stop();
      }
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive]);

  // Generate SVG path from route points
  const generateSvgPath = () => {
    if (routePoints.length === 0) return '';
    
    // Normalize coordinates to fit within the SVG viewBox
    const minLat = Math.min(...routePoints.map(p => p.lat));
    const maxLat = Math.max(...routePoints.map(p => p.lat));
    const minLng = Math.min(...routePoints.map(p => p.lng));
    const maxLng = Math.max(...routePoints.map(p => p.lng));
    
    const normalizeCoord = (value: number, min: number, max: number) => {
      return ((value - min) / (max - min)) * 1000;
    };
    
    const points = routePoints.map(p => ({
      x: normalizeCoord(p.lng, minLng, maxLng),
      y: normalizeCoord(p.lat, minLat, maxLat)
    }));
    
    // Create SVG path
    const path = points.reduce((acc, point, i) => {
      if (i === 0) return `M ${point.x} ${point.y}`;
      return `${acc} L ${point.x} ${point.y}`;
    }, '');
    
    return path;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-buddybus-dark">Live Location</h3>
        <p className="text-sm text-gray-500">
          {isActive 
            ? 'Bus is currently in service and sharing its location'
            : 'Bus is not in service at this time'}
        </p>
      </div>
      
      <div className="relative h-72 bg-buddybus-lightblue rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {!isActive && (
            <div className="text-center p-4 bg-white/90 rounded-lg shadow">
              <p className="text-buddybus-dark font-medium">
                This bus is not in service right now.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Service hours are from 7:00 AM to 6:15 PM.
              </p>
            </div>
          )}
        </div>

        {/* SVG Map */}
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Route Path */}
          <path
            d={generateSvgPath()}
            stroke="#1a75ff"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1 15"
          />
          
          {/* Start Point */}
          <circle
            cx="0"
            cy="1000"
            r="15"
            fill="#4CAF50"
            className="origin-center"
            transform="translate(100, -100)"
          />
          <text
            x="130"
            y="900"
            fill="#333"
            fontSize="24"
            fontWeight="bold"
          >
            BHPV
          </text>
          
          {/* Middle Point */}
          <circle
            cx="500"
            cy="500"
            r="15"
            fill="#FF9800"
          />
          <text
            x="520"
            y="500"
            fill="#333"
            fontSize="24"
            fontWeight="bold"
          >
            Gajuwaka
          </text>
          
          {/* End Point */}
          <circle
            cx="900"
            cy="100"
            r="15"
            fill="#F44336"
          />
          <text
            x="820"
            y="80"
            fill="#333"
            fontSize="24"
            fontWeight="bold"
          >
            Kurmanapalem
          </text>
          
          {/* Moving Bus */}
          {isActive && (
            <g
              transform={`translate(${100 + animationProgress * 800}, ${900 - animationProgress * 800})`}
            >
              <circle r="20" fill="#1a75ff" />
              <foreignObject width="40" height="40" x="-20" y="-20">
                <div className="flex items-center justify-center h-full">
                  <Bus size={24} className="text-white" />
                </div>
              </foreignObject>
            </g>
          )}
        </svg>
      </div>
      
      {isActive && (
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>BHPV</span>
            <span>Gajuwaka</span>
            <span>Kurmanapalem</span>
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full mt-1">
            <div
              className="absolute h-full bg-buddybus-blue rounded-full"
              style={{ width: `${animationProgress * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveMap;
