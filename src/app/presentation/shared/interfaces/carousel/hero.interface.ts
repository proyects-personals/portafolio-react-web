import type { HeroSlide } from "@domain";

export interface IHeroBackgroundProps {
  readonly slides: readonly HeroSlide[];
  readonly activeIndex: number;
}

export interface HeroContentProps {
  readonly slide: HeroSlide;
}

export interface IHeroControlsProps {
  readonly onPrevious: () => void;
  readonly onNext: () => void;
}

export interface IHeroIndicatorsProps {
  readonly slides: readonly HeroSlide[];
  readonly activeIndex: number;
  readonly onSelect: (index: number) => void;
}

export interface IHeroMediaProps {
  readonly slide: HeroSlide;
  readonly isActive: boolean;
}
