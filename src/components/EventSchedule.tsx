import React from 'react';
import { Calendar } from 'lucide-react';

interface ScheduleProps {
  schedule: {
    dates: string[];
    times?: {
      group?: string;
      time: string;
    }[];
  }[];
}

export default function EventSchedule({ schedule }: ScheduleProps) {
  if (!schedule || schedule.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center mb-2">
        <Calendar className="h-5 w-5 text-[#8ED204] mr-2" />
        <h3 className="font-bold">
          {schedule[0]?.dates[0]?.includes('Tournament') ? 'Tournament Brackets' : 'Schedule'}
        </h3>
      </div>
      
      <div className="space-y-6">
        {schedule.map((day, index) => (
          <div key={index}>
            {day.dates?.[0] && (
              <h4 className="font-semibold mb-2">{day.dates[0]}</h4>
            )}
            <div className="space-y-2">
              {day.times?.map((timeSlot, idx) => (
                <div key={idx} className="flex items-center">
                  {timeSlot.group && (
                    <span className="font-medium mr-2">{timeSlot.group}:</span>
                  )}
                  <span>{timeSlot.time}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}