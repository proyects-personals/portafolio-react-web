export interface HeroSlide {
  readonly id: number;
  readonly title: string;
  readonly highlight: string;
  readonly description: string;
  readonly source: string;
  readonly type: "image" | "video";
}

export interface UseHeroCarouselReturn {
  readonly activeIndex: number;
  readonly showPrevious: () => void;
  readonly showNext: () => void;
  readonly showSlide: (index: number) => void;
}
