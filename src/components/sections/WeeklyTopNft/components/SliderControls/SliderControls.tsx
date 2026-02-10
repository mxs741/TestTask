import classes from './SliderControls.module.scss';

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export const SliderControls = ({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
}: SliderControlsProps) => (
  <div className={classes.controls}>
    <button
      className={classes.btn}
      onClick={onPrev}
      disabled={!canGoPrev}
      aria-label="Previous"
    >
      <img src="/icons/arrow-left.svg" alt="" draggable={false} />
    </button>
    <div className={classes.divider} />
    <button
      className={classes.btn}
      onClick={onNext}
      disabled={!canGoNext}
      aria-label="Next"
    >
      <img src="/icons/arrow-right.svg" alt="" draggable={false} />
    </button>
  </div>
);
