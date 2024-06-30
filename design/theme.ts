export type Themes = keyof typeof themes;

export const breakpoints = {
  /** Phones (portrait) */
  initial: 0,
  /** Phones (landscape) */
  xs: 520,
  /** Tablets (portrait) */
  sm: 768,
  /** Tablets (landscape) */
  md: 1024,
  /** Laptops */
  lg: 1280,
  /** Desktops */
  xl: 1640,
  /** Televisions */
  xxl: 1920,
} as const;

export const display = {
  space1: 4,
  space2: 8,
  space3: 12,
  space4: 16,
  space5: 24,
  space6: 32,
  space7: 40,
  space8: 48,
  space9: 64,
  radius1: 3,
  radius2: 4,
  radius3: 6,
  radius4: 8,
  radius5: 12,
  radius6: 16,
} as const;

export const typography = {
  size1: 12,
  size2: 14,
  size3: 16,
  size4: 18,
  size5: 20,
  size6: 24,
  size7: 28,
  size8: 35,
  size9: 60,
  weightThin: '200',
  weightLight: '300',
  weightRegular: '400',
  weightMedium: '500',
  weightSemiBold: '600',
  weightBold: '700',
  lineHeight1: 16,
  lineHeight2: 20,
  lineHeight3: 24,
  lineHeight4: 26,
  lineHeight5: 28,
  lineHeight6: 30,
  lineHeight7: 36,
  lineHeight8: 40,
  lineHeight9: 60,
  letterSpacing1: 0.04,
  letterSpacing2: 0,
  letterSpacing3: 0,
  letterSpacing4: -0.04,
  letterSpacing5: -0.08,
  letterSpacing6: -0.1,
  letterSpacing7: -0.12,
  letterSpacing8: -0.16,
  letterSpacing9: -0.4,
} as const;

export const font = {
  family: 'Inter',
  size: typography.size1,
  weight: typography.weightRegular,
  spacing: typography.letterSpacing1,
  height: typography.lineHeight1,
  contentSize: typography.size2,
  inputSize: typography.size2,
  inputWeight: typography.weightMedium,
  inputSpacing: typography.letterSpacing2,
  inputHeight: typography.lineHeight2,
  contentWeight: typography.weightRegular,
  contentSpacing: typography.letterSpacing2,
  contentHeight: typography.lineHeight2,
  labelSize: typography.size3,
  labelWeight: typography.weightMedium,
  labelSpacing: typography.letterSpacing3,
  labelHeight: typography.lineHeight3,
  titleSize: typography.size4,
  titleWeight: typography.weightSemiBold,
  titleSpacing: typography.letterSpacing4,
  titleHeight: typography.lineHeight4,
  headerSize: typography.size5,
  headerWeight: typography.weightMedium,
  headerSpacing: typography.letterSpacing5,
  headerHeight: typography.lineHeight5,
} as const;

export const palette = {
  white: '#ffffff',
  black: '#000000',
  slate50: '#f8fafc',
  slate100: '#f1f5f9',
  slate200: '#e2e8f0',
  slate300: '#cbd5e1',
  slate400: '#94a3b8',
  slate500: '#64748b',
  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1e293b',
  slate900: '#0f172a',
  slate950: '#020617',
  grey50: '#f9fafb',
  grey100: '#f3f4f6',
  grey200: '#e5e7eb',
  grey300: '#d1d5db',
  grey400: '#9ca3af',
  grey500: '#6b7280',
  grey600: '#4b5563',
  grey700: '#374151',
  grey800: '#1f2937',
  grey900: '#111827',
  grey950: '#030712',
  zinc50: '#fafafa',
  zinc100: '#f4f4f5',
  zinc200: '#e4e4e7',
  zinc300: '#d4d4d8',
  zinc400: '#a1a1aa',
  zinc500: '#71717a',
  zinc600: '#52525b',
  zinc700: '#3f3f46',
  zinc800: '#27272a',
  zinc900: '#18181b',
  zinc950: '#09090b',
  neutral50: '#fafafa',
  neutral100: '#f5f5f5',
  neutral200: '#e5e5e5',
  neutral300: '#d4d4d4',
  neutral400: '#a3a3a3',
  neutral500: '#737373',
  neutral600: '#525252',
  neutral700: '#404040',
  neutral800: '#262626',
  neutral900: '#171717',
  neutral950: '#0a0a0a',
  stone50: '#fafaf9',
  stone100: '#f5f5f4',
  stone200: '#e7e5e4',
  stone300: '#d6d3d1',
  stone400: '#a8a29e',
  stone500: '#78716c',
  stone600: '#57534e',
  stone700: '#44403c',
  stone800: '#292524',
  stone900: '#1c1917',
  stone950: '#0c0a09',
  red50: '#fef2f2',
  red100: '#fee2e2',
  red200: '#fecaca',
  red300: '#fca5a5',
  red400: '#f87171',
  red500: '#ef4444',
  red600: '#dc2626',
  red700: '#b91c1c',
  red800: '#991b1b',
  red900: '#7f1d1d',
  red950: '#450a0a',
  orange50: '#fff7ed',
  orange100: '#ffedd5',
  orange200: '#fed7aa',
  orange300: '#fdba74',
  orange400: '#fb923c',
  orange500: '#f97316',
  orange600: '#ea580c',
  orange700: '#c2410c',
  orange800: '#9a3412',
  orange900: '#7c2d12',
  orange950: '#431407',
  amber50: '#fffbeb',
  amber100: '#fef3c7',
  amber200: '#fde68a',
  amber300: '#fcd34d',
  amber400: '#fbbf24',
  amber500: '#f59e0b',
  amber600: '#d97706',
  amber700: '#b45309',
  amber800: '#92400e',
  amber900: '#78350f',
  amber950: '#451a03',
  yellow50: '#fefce8',
  yellow100: '#fef9c3',
  yellow200: '#fef08a',
  yellow300: '#fde047',
  yellow400: '#facc15',
  yellow500: '#eab308',
  yellow600: '#ca8a04',
  yellow700: '#a16207',
  yellow800: '#854d0e',
  yellow900: '#713f12',
  yellow950: '#422006',
  lime50: '#f7fee7',
  lime100: '#ecfccb',
  lime200: '#d9f99d',
  lime300: '#bef264',
  lime400: '#a3e635',
  lime500: '#84cc16',
  lime600: '#65a30d',
  lime700: '#4d7c0f',
  lime800: '#3f6212',
  lime900: '#365314',
  lime950: '#1a2e05',
  green50: '#f0fdf4',
  green100: '#dcfce7',
  green200: '#bbf7d0',
  green300: '#86efac',
  green400: '#4ade80',
  green500: '#22c55e',
  green600: '#16a34a',
  green700: '#15803d',
  green800: '#166534',
  green900: '#14532d',
  green950: '#052e16',
  emerald50: '#ecfdf5',
  emerald100: '#d1fae5',
  emerald200: '#a7f3d0',
  emerald300: '#6ee7b7',
  emerald400: '#34d399',
  emerald500: '#10b981',
  emerald600: '#059669',
  emerald700: '#047857',
  emerald800: '#065f46',
  emerald900: '#064e3b',
  emerald950: '#022c22',
  teal50: '#f0fdfa',
  teal100: '#ccfbf1',
  teal200: '#99f6e4',
  teal300: '#5eead4',
  teal400: '#2dd4bf',
  teal500: '#14b8a6',
  teal600: '#0d9488',
  teal700: '#0f766e',
  teal800: '#115e59',
  teal900: '#134e4a',
  teal950: '#042f2e',
  cyan50: '#ecfeff',
  cyan100: '#cffafe',
  cyan200: '#a5f3fc',
  cyan300: '#67e8f9',
  cyan400: '#22d3ee',
  cyan500: '#06b6d4',
  cyan600: '#0891b2',
  cyan700: '#0e7490',
  cyan800: '#155e75',
  cyan900: '#164e63',
  cyan950: '#083344',
  sky50: '#f0f9ff',
  sky100: '#e0f2fe',
  sky200: '#bae6fd',
  sky300: '#7dd3fc',
  sky400: '#38bdf8',
  sky500: '#0ea5e9',
  sky600: '#0284c7',
  sky700: '#0369a1',
  sky800: '#075985',
  sky900: '#0c4a6e',
  sky950: '#082f49',
  blue50: '#eff6ff',
  blue100: '#dbeafe',
  blue200: '#bfdbfe',
  blue300: '#93c5fd',
  blue400: '#60a5fa',
  blue500: '#3b82f6',
  blue600: '#2563eb',
  blue700: '#1d4ed8',
  blue800: '#1e40af',
  blue900: '#1e3a8a',
  blue950: '#172554',
  indigo50: '#eef2ff',
  indigo100: '#e0e7ff',
  indigo200: '#c7d2fe',
  indigo300: '#a5b4fc',
  indigo400: '#818cf8',
  indigo500: '#6366f1',
  indigo600: '#4f46e5',
  indigo700: '#4338ca',
  indigo800: '#3730a3',
  indigo900: '#312e81',
  indigo950: '#1e1b4b',
  violet50: '#f5f3ff',
  violet100: '#ede9fe',
  violet200: '#ddd6fe',
  violet300: '#c4b5fd',
  violet400: '#a78bfa',
  violet500: '#8b5cf6',
  violet600: '#7c3aed',
  violet700: '#6d28d9',
  violet800: '#5b21b6',
  violet900: '#4c1d95',
  violet950: '#1e1b4b',
  purple50: '#faf5ff',
  purple100: '#f3e8ff',
  purple200: '#e9d5ff',
  purple300: '#d8b4fe',
  purple400: '#c084fc',
  purple500: '#a855f7',
  purple600: '#9333ea',
  purple700: '#7e22ce',
  purple800: '#6b21a8',
  purple900: '#581c87',
  purple950: '#3b0764',
  fuchsia50: '#fdf4ff',
  fuchsia100: '#fae8ff',
  fuchsia200: '#f5d0fe',
  fuchsia300: '#f0abfc',
  fuchsia400: '#e879f9',
  fuchsia500: '#d946ef',
  fuchsia600: '#c026d3',
  fuchsia700: '#a21caf',
  fuchsia800: '#86198f',
  fuchsia900: '#701a75',
  fuchsia950: '#4a044e',
  pink50: '#fdf2f8',
  pink100: '#fce7f3',
  pink200: '#fbcfe8',
  pink300: '#f9a8d4',
  pink400: '#f472b6',
  pink500: '#ec4899',
  pink600: '#db2777',
  pink700: '#be185d',
  pink800: '#9d174d',
  pink900: '#831843',
  pink950: '#500724',
  rose50: '#fff1f2',
  rose100: '#ffe4e6',
  rose200: '#fecdd3',
  rose300: '#fda4af',
  rose400: '#fb7185',
  rose500: '#f43f5e',
  rose600: '#e11d48',
  rose700: '#be123c',
  rose800: '#9f1239',
  rose900: '#881337',
  rose950: '#4c0519',
} as const;

export const themes = {
  light: {
    colors: {
      background: palette.white,
      foreground: palette.zinc950,
      card: palette.white,
      cardForeground: palette.zinc950,
      popover: palette.white,
      popoverForeground: palette.zinc950,
      primary: palette.zinc900,
      primaryForeground: palette.zinc50,
      secondary: palette.zinc100,
      secondaryForeground: palette.zinc900,
      muted: palette.zinc100,
      mutedForeground: palette.zinc500,
      accent: palette.zinc100,
      accentForeground: palette.zinc900,
      info: palette.blue500,
      success: palette.green500,
      warning: palette.yellow500,
      destructive: palette.red500,
      destructiveForeground: palette.zinc50,
      border: palette.zinc200,
      input: palette.zinc200,
      ring: palette.zinc950,
      outline: palette.blue400,
    },
    breakpoints,
    display,
    font,
    palette,
    typography,
  },
  dark: {
    colors: {
      background: palette.zinc950,
      foreground: palette.zinc50,
      card: palette.zinc950,
      cardForeground: palette.zinc50,
      popover: palette.zinc950,
      popoverForeground: palette.zinc50,
      primary: palette.zinc50,
      primaryForeground: palette.zinc900,
      secondary: palette.zinc800,
      secondaryForeground: palette.zinc50,
      muted: palette.zinc800,
      mutedForeground: palette.zinc400,
      accent: palette.zinc800,
      accentForeground: palette.zinc50,
      info: palette.yellow500,
      success: palette.green900,
      warning: palette.yellow900,
      destructive: palette.red900,
      destructiveForeground: palette.zinc50,
      border: palette.zinc800,
      input: palette.zinc800,
      ring: palette.zinc300,
      outline: palette.blue400,
    },
    breakpoints,
    display,
    font,
    palette,
    typography,
  },
} as const;

export const initialTheme: Themes = 'light'
