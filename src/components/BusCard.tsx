
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Bus as BusType } from '@/utils/busData';

interface BusCardProps {
  bus: BusType;
}

const BusCard: React.FC<BusCardProps> = ({ bus }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/track/${bus.id}`);
  };

  return (
    <div 
      className="relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-buddybus-orange opacity-5"></div>
      <div className="p-5 relative z-10">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold text-buddybus-dark">
            {bus.number}
          </h3>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            bus.isActive
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {bus.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
        
        <div className="flex flex-col gap-2 text-gray-600">
          <div className="flex items-start">
            <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-buddybus-blue" />
            <div>
              <p className="text-sm">
                <span className="font-medium">{bus.startPoint}</span>
                <span className="mx-2">→</span>
                <span className="font-medium">{bus.endPoint}</span>
              </p>
              <p className="text-xs text-gray-500">{bus.route}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Phone size={18} className="mr-2 flex-shrink-0 text-buddybus-blue" />
            <p className="text-sm">{bus.driverPhone}</p>
          </div>
          
          <div className="flex items-start">
            <Clock size={18} className="mr-2 mt-0.5 flex-shrink-0 text-buddybus-blue" />
            <div>
              <p className="text-xs text-gray-500 mb-1">Next departures:</p>
              <div className="flex flex-wrap gap-1">
                {bus.scheduledDepartures.slice(0, 3).map((time, index) => (
                  <span key={index} className="inline-block bg-buddybus-lightblue text-buddybus-blue rounded px-2 py-0.5 text-xs">
                    {time}
                  </span>
                ))}
                {bus.scheduledDepartures.length > 3 && (
                  <span className="inline-block bg-gray-100 text-gray-600 rounded px-2 py-0.5 text-xs">
                    +{bus.scheduledDepartures.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusCard;
