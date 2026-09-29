import {
  useRef,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  bgImageAlt?: string;
  mediaAlt?: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  bgImageAlt = 'Background',
  mediaAlt = 'Hero Media',
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const widthDesktop = useTransform(smoothProgress, [0, 1], [300, 1550]);
  const widthMobile = useTransform(smoothProgress, [0, 1], [250, 900]);
  const width = isMobile ? widthMobile : widthDesktop;

  const heightDesktop = useTransform(smoothProgress, [0, 1], [400, 800]);
  const heightMobile = useTransform(smoothProgress, [0, 1], [250, 650]);
  const height = isMobile ? heightMobile : heightDesktop;

  const textTranslateDesktop = useTransform(smoothProgress, [0, 1], [0, 150]);
  const textTranslateMobile = useTransform(smoothProgress, [0, 1], [0, 100]);
  const textTranslate = isMobile ? textTranslateMobile : textTranslateDesktop;

  const textTranslateNegDesktop = useTransform(smoothProgress, [0, 1], [0, -150]);
  const textTranslateNegMobile = useTransform(smoothProgress, [0, 1], [0, -100]);
  const textTranslateNeg = isMobile ? textTranslateNegMobile : textTranslateNegDesktop;

  const opacityBg = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const mediaOpacity = useTransform(smoothProgress, [0, 1], [0.7, 0.4]);
  
  const contentOpacity = useTransform(smoothProgress, [0.6, 1], [0, 1]);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-start bg-ulysse-black">
        
        <motion.div
          className='absolute inset-0 z-0 h-full'
          style={{ opacity: opacityBg }}
        >
          <img
            src={bgImageSrc}
            alt={bgImageAlt}
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-ulysse-black/40' />
        </motion.div>

        <div className='container mx-auto flex flex-col items-center justify-start relative z-10 w-full h-full'>
          <div className='flex flex-col items-center justify-center w-full h-full relative'>
            <motion.div
              className='absolute z-0 top-1/2 left-1/2 rounded-2xl overflow-hidden'
              style={{
                width,
                height,
                x: "-50%",
                y: "-50%",
                maxWidth: '95vw',
                maxHeight: '85vh',
                boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
              }}
            >
              {mediaType === 'video' ? (
                mediaSrc.includes('youtube.com') ? (
                  <div className='relative w-full h-full pointer-events-none'>
                    <iframe
                      width='100%'
                      height='100%'
                      src={
                        mediaSrc.includes('embed')
                          ? mediaSrc +
                            (mediaSrc.includes('?') ? '&' : '?') +
                            'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                          : mediaSrc.replace('watch?v=', 'embed/') +
                            '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                            mediaSrc.split('v=')[1]
                      }
                      className='w-full h-full'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                    <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }}></div>
                    <motion.div
                      className='absolute inset-0 bg-black/30'
                      style={{ opacity: mediaOpacity }}
                    />
                  </div>
                ) : (
                  <div className='relative w-full h-full pointer-events-none'>
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload='auto'
                      className='w-full h-full object-cover'
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                    />
                    <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }}></div>
                    <motion.div
                      className='absolute inset-0 bg-black/30'
                      style={{ opacity: mediaOpacity }}
                    />
                  </div>
                )
              ) : (
                <div className='relative w-full h-full pointer-events-none'>
                  <img
                    src={mediaSrc}
                    alt={mediaAlt}
                    width={1280}
                    height={720}
                    className='w-full h-full object-cover'
                  />
                  <motion.div
                    className='absolute inset-0 bg-black/50'
                    style={{ opacity: mediaOpacity }}
                  />
                </div>
              )}

              <div className='absolute bottom-4 md:bottom-8 left-0 right-0 flex flex-col items-center text-center z-10'>
                {date && (
                  <motion.p
                    className='text-xs md:text-sm uppercase tracking-[0.3em] text-white'
                    style={{ x: textTranslateNeg }}
                  >
                    {date}
                  </motion.p>
                )}
                {scrollToExpand && (
                  <motion.p
                    className='text-xs uppercase tracking-[0.2em] text-white/70 mt-2'
                    style={{ x: textTranslate }}
                  >
                    {scrollToExpand}
                  </motion.p>
                )}
              </div>
            </motion.div>

            <div
              className={`flex items-center justify-center text-center gap-2 md:gap-4 w-full relative z-10 flex-col md:flex-row pointer-events-none ${
                textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
              }`}
            >
              <motion.h2
                className='font-serif text-4xl md:text-7xl lg:text-8xl tracking-wider text-balance leading-tight text-white whitespace-nowrap'
                style={{ x: textTranslateNeg }}
              >
                {firstWord}
              </motion.h2>
              <motion.h2
                className='font-serif text-4xl md:text-7xl lg:text-8xl tracking-wider text-balance leading-tight text-white whitespace-nowrap'
                style={{ x: textTranslate }}
              >
                {restOfTitle}
              </motion.h2>
            </div>
          </div>
        </div>
      </div>

      {children && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 w-full px-8 py-10 md:px-16 lg:py-20 z-20 pointer-events-none"
          style={{ opacity: contentOpacity }}
        >
          <div className="pointer-events-auto">
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ScrollExpandMedia;
