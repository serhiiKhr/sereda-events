import {getEvent, getEvents} from "../api/api";

export const getEventsQuery = () => ({
    queryKey: ['EVENTS'],
    queryFn: getEvents
});

export const getEventQueryKey = (id) => ({
    queryKey: ['EVENT', id],
    queryFn: () => getEvent(id)
});
