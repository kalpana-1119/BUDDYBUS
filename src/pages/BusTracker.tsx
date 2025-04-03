import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, MapPin, Phone, ArrowLeft } from 'lucide-react';
import NavbarWrapper from '@/components/NavbarWrapper';
import LiveMap from '@/components/LiveMap';
import { getBusById, isInServiceHours } from '@/utils/busData';
import { toast } from '@/components/ui/use-toast';

const BusTracker = () => {
  const { busId } = useParams<{ busId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'map' | 'info'>('map');
  
  const bus = busId ? getBusById(busId) : undefined;
  const isActive = bus?.isActive && isInServiceHours();

  useEffect(() => {
    if (!bus) {
      toast({
        title: "Bus not found",
        description: "The bus you're looking for doesn't exist or has been removed.",
        variant: "destructive",
      });
      navigate('/passenger');
    }
  }, [bus, navigate]);

  if (!bus) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavbarWrapper withBackButton={true} />
      
      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-buddybus-blue text-white">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Bus #{bus.number}</h1>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                isActive
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {isActive ? 'In Service' : 'Not In Service'}
              </span>
            </div>
            <p className="text-white/80 mt-1">{bus.route}</p>
          </div>
          
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('map')}
                className={`px-4 py-3 font-medium text-sm flex-1 text-center ${
                  activeTab === 'map'
                    ? 'border-b-2 border-buddybus-blue text-buddybus-blue'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Live Location
              </button>
              <button
                onClick={() => setActiveTab('info')}
                className={`px-4 py-3 font-medium text-sm flex-1 text-center ${
                  activeTab === 'info'
                    ? 'border-b-2 border-buddybus-blue text-buddybus-blue'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Bus Info
              </button>
            </nav>
          </div>
          
          <div className="p-4">
            {activeTab === 'map' ? (
              <LiveMap busId={bus.id} isActive={isActive} />
            ) : (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-buddybus-dark mb-3">Route Information</h3>
                  <div className="bg-buddybus-lightblue p-4 rounded-lg flex items-start">
                    <MapPin size={20} className="text-buddybus-blue mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">{bus.startPoint}</span>
                        <ArrowLeft size={16} className="mx-2 transform rotate-180" />
                        <span className="font-medium">{bus.endPoint}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{bus.route}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-buddybus-dark mb-3">Contact Driver</h3>
                  <div className="bg-buddybus-lightorange p-4 rounded-lg flex items-center">
                    <Phone size={20} className="text-buddybus-orange mr-3 flex-shrink-0" />
                    <div>
                      <a href={`tel:${bus.driverPhone}`} className="font-medium text-buddybus-orange">
                        {bus.driverPhone}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Call the driver for immediate assistance
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-buddybus-dark mb-3">Today's Schedule</h3>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Clock size={20} className="text-gray-700 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="w-full">
                        <p className="text-sm text-gray-600 mb-2">Departures from {bus.startPoint}:</p>
                        <div className="grid grid-cols-4 gap-2">
                          {bus.scheduledDepartures.map((time, index) => (
                            <div key={index} className="bg-white rounded px-2 py-1 text-center text-sm border border-gray-200">
                              {time}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="text-yellow-700 text-sm">
                    <strong>Note:</strong> Bus location tracking is only available during service hours (7:00 AM - 6:15 PM).
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusTracker;
