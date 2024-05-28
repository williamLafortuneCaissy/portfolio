"use client" 

import useMediaQuery from '@/utils/useMediaQuery';
import styles from './gridSpot.module.css';

/* make sure to have a isolatedRelative parent */
const GridSpot = ({ squareMask = false, size = '100vw', position = 'center', desktopOnly, mobileOnly }) => {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const isMobile = useMediaQuery('(max-width: 1023px)');

    if (desktopOnly && !isDesktop) return null;
    if (mobileOnly && !isMobile) return null;
    return ( 
        <div className={`${styles.spot} ${squareMask ? styles.square : styles.circle}`}
            style={{
                maskSize: size,
                maskPosition: position,
            }}
        />
    );
}
 
export default GridSpot;