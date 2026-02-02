import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const BREAKPOINTS = {
  phone: 0,
  phoneL: 414,
  tablet: 768,
  tabletL: 1024,
  desktop: 1366,
} as const;

export type DeviceType = 'phone' | 'tablet';
export type Orientation = 'portrait' | 'landscape';

export interface ResponsiveInfo {
  width: number;
  height: number;
  isTablet: boolean;
  isPhone: boolean;
  deviceType: DeviceType;
  orientation: Orientation;
  isLandscape: boolean;
  isPortrait: boolean;
  scaleFactor: number;
  fontScale: number;
  insets: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  columns: number;
  maxContentWidth: number;
}

const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

export function useResponsive(): ResponsiveInfo {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const isTablet = Math.min(width, height) >= BREAKPOINTS.tablet;
  const isPhone = !isTablet;
  const deviceType: DeviceType = isTablet ? 'tablet' : 'phone';

  const isLandscape = width > height;
  const isPortrait = !isLandscape;
  const orientation: Orientation = isLandscape ? 'landscape' : 'portrait';

  const widthRatio = width / BASE_WIDTH;
  const heightRatio = height / BASE_HEIGHT;

  const scaleFactor = isTablet
    ? Math.min(widthRatio, heightRatio) * 0.7
    : Math.min(widthRatio, heightRatio);

  const fontScale = isTablet
    ? Math.min(scaleFactor * 1.1, 1.3)
    : Math.min(scaleFactor, 1.2);

  const columns = calculateColumns(width, isTablet, isLandscape);
  const maxContentWidth = isTablet ? Math.min(width * 0.8, 800) : width;

  return {
    width,
    height,
    isTablet,
    isPhone,
    deviceType,
    orientation,
    isLandscape,
    isPortrait,
    scaleFactor,
    fontScale,
    insets,
    columns,
    maxContentWidth,
  };
}

function calculateColumns(
  width: number,
  isTablet: boolean,
  isLandscape: boolean,
): number {
  if (!isTablet) return 2;
  if (isLandscape) return width > BREAKPOINTS.desktop ? 5 : 4;
  return 3;
}

export function useIsTablet(): boolean {
  const { width, height } = useWindowDimensions();
  return Math.min(width, height) >= BREAKPOINTS.tablet;
}

export function useOrientation(): Orientation {
  const { width, height } = useWindowDimensions();
  return width > height ? 'landscape' : 'portrait';
}
