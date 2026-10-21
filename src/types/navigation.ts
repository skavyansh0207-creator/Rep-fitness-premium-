export type PageId = 'home' | 'programs' | 'facility' | 'schedule-pricing' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'programs', label: 'Programs & Services' },
  { id: 'facility', label: '5th Floor Facility' },
  { id: 'schedule-pricing', label: 'Schedule & Plans' },
  { id: 'contact', label: 'Location & Contact' },
];
