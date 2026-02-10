export interface SliderBreakpoint {
  maxWidth: number;
  cardWidth: number;
  gap: number;
}

export const SLIDER_BREAKPOINTS: SliderBreakpoint[] = [
  { maxWidth: 375, cardWidth: 210, gap: 32 },
  { maxWidth: 1024, cardWidth: 210, gap: 32 },
  { maxWidth: Infinity, cardWidth: 281, gap: 40 },
];

export const LOOP_COUNT = 3;
