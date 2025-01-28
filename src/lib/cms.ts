import { useQuery } from '@tanstack/react-query';
import type { CMSEvent } from '../types/cms';

const EVENTS_DATA: CMSEvent[] = [
  // Your existing events data
];

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: () => Promise.resolve(EVENTS_DATA),
    staleTime: 5 * 60 * 1000,
  });
}

export function getUpcomingEvents(events: CMSEvent[]) {
  return events
    .filter(event => event.status === 'upcoming')
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}