import * as React from 'react';
import './styles.css';
import lottie from 'lottie-web';
import animationData from './lottie.json';

const App = () => {
  const lottieRef = React.useRef(null);

  React.useEffect(() => {
    var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,

      animationData,
    });

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }
    const onScroll = () => {
      console.log('Scrolling');
      animatebodymovin(animDuration);
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <div style={{ position: 'fixed', height: '300px' }} ref={lottieRef}></div>;
};

export default App;
