export const scrollAnimation = (element, targetPosition, scrollDuration) => {
    const startTime = performance.now();
    const startPosition = element.scrollLeft;
    const animateScroll = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      const newPosition = startPosition + (targetPosition - startPosition) * progress;
  
      element.scrollLeft = newPosition;
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
  
    animateScroll();
  };

export const goToPrevious = (carouselRef) => {
    const element = carouselRef.current;
    if (element === null) {
        return;
    }

    const scrollAmount = element.clientWidth;
    const scrollDuration = 1000;
    const targetPosition = element.scrollLeft - scrollAmount;

    scrollAnimation(element, targetPosition, scrollDuration);
};

export const goToNext = (carouselRef) => {
    const element = carouselRef.current;
    if (element === null) {
        return;
    }

    const scrollAmount = element.clientWidth;
    const scrollDuration = 1000;
    const targetPosition = element.scrollLeft + scrollAmount;

    scrollAnimation(element, targetPosition, scrollDuration);
};

export const myFunction = (carouselRef,i,j) => {
    const element = carouselRef.current;
    if(element === null){
      return;
    }

    const scrollAmount = element.clientWidth;
    const scrollDuration = 1000;
    const targetPosition = element.scrollLeft + scrollAmount;
    const startTime = performance.now();
    const scrollAnimation = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        if (i < j) {
            const newPosition = element.scrollLeft + (targetPosition - element.scrollLeft) * progress;
            if(element != null)
                element.scrollLeft = newPosition;
        } else {
            const newPosition = element.scrollLeft - (targetPosition + element.scrollLeft) * progress;
            if(element != null)
                element.scrollLeft = newPosition;
        }
        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        }
    };
    scrollAnimation();
};

export const  autoSlide = (carouselRef,positionDiff,prevScrollLeft) => {
    const element = carouselRef.current;
    if(element === null){
      return;
    }

    if (
        element.scrollLeft - (element.scrollWidth - element.clientWidth) > -1 ||
        element.scrollLeft <= 0
    )
        return;
    
    const slideWidth = element.clientWidth;
    const isPositiveScroll = element.scrollLeft > prevScrollLeft;
    
    positionDiff = Math.abs(positionDiff);
    const valDifference = slideWidth - positionDiff;
    const scrollDistance = positionDiff > slideWidth / 3 ? valDifference : -positionDiff;
    
    let startTimestamp = null;
    const duration = 1000;
    
    const animateScroll = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
    
        const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };
    
        const easeProgress = Math.min(progress / duration, 1);
        const easedScrollDistance = scrollDistance * easeInOutCubic(easeProgress);
        if(element != null)
            element.scrollLeft += isPositiveScroll ? easedScrollDistance : -easedScrollDistance;
    
        if (progress < duration) {
            requestAnimationFrame(animateScroll);
        } else {
        if(element != null)
            element.style.transition = '';
        }
    };
    if(element != null)
        element.style.transition = 'scrollLeft 0.3s ease-in-out';

    requestAnimationFrame(animateScroll);
    return positionDiff;
};