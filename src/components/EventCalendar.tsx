import React from 'react';
import { Calendar, dateFnsLocalizer, Event as CalendarEvent } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export interface CalendarEventType extends CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
}

interface EventCalendarProps {
  events: CalendarEventType[];
  onEventClick?: (event: CalendarEventType) => void;
}

export default function EventCalendar({ events, onEventClick }: EventCalendarProps) {
  return (
    <div className="h-[600px] bg-white p-4 rounded-lg shadow-lg">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={onEventClick}
        views={['month', 'week', 'day']}
        defaultView="month"
        className="text-sm"
      />
    </div>
  );
}