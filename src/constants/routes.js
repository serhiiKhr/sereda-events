import Main from "../pages/Main/Main";
import Events from "../pages/Events/Events";
import Calendar from "../pages/Calendar/Calendar";
import FAQ from "../pages/FAQ/FAQ";



export const ROUTES = {
    MAIN: { name: 'Main', path: '', element: Main },
    EVENTS: { name: 'Events', path: 'events', element: Events },
    CALENDAR: { name: 'Calendar', path: 'calendar', element: Calendar },
    FAQ:  { name: 'FAQ', path: 'faq', element: FAQ },
}
