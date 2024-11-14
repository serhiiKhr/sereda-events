import Calendar from "../pages/Calendar/Calendar";
import Events from "../pages/Events/Events";
import FAQ from "../pages/FAQ/FAQ";
import Main from "../pages/Main/Main";

export const ROUTES = [
    { name: 'Main', path: '', element: Main },
    { name: 'Events', path: 'events', element: Events },
    { name: 'Calendar', path: 'calendar', element: Calendar },
    { name: 'FAQ', path: 'faq', element: FAQ },
]
