export interface CurrentAvaiableColorInterface
{
  Color:   'Pink'
  | 'Blue'
  | 'Baseline'
  | 'Teal'
  | 'Orange'
  | 'Cyan'
}
export interface MaterialColorSchemeInterface {
  Baseline: MaterialColorThemeInterface,
  Teal: MaterialColorThemeInterface,
  Orange: MaterialColorThemeInterface,
  Cyan: MaterialColorThemeInterface,
  Blue: MaterialColorThemeInterface,
  Pink: MaterialColorThemeInterface
}
export interface MaterialColorThemeInterface {
    description: string
    seed: string
    coreColors: CoreColors
    extendedColors: any[]
    schemes: Schemes
    palettes: Palettes
  }
  
  export interface CoreColors {
    primary: string
    secondary: string
    tertiary: string
    error: string
    neutral: string
    neutralVariant: string
  }
  
  export interface Schemes {
    light: Schemes
    "light-medium-contrast": Schemes
    "light-high-contrast": Schemes
    dark: Schemes
    "dark-medium-contrast": Schemes
    "dark-high-contrast": Schemes
  }
  
  export interface Schemes {
    primary: string
    surfaceTint: string
    onPrimary: string
    primaryContainer: string
    onPrimaryContainer: string
    secondary: string
    onSecondary: string
    secondaryContainer: string
    onSecondaryContainer: string
    tertiary: string
    onTertiary: string
    tertiaryContainer: string
    onTertiaryContainer: string
    error: string
    onError: string
    errorContainer: string
    onErrorContainer: string
    background: string
    onBackground: string
    surface: string
    onSurface: string
    surfaceVariant: string
    onSurfaceVariant: string
    outline: string
    outlineVariant: string
    shadow: string
    scrim: string
    inverseSurface: string
    inverseOnSurface: string
    inversePrimary: string
    primaryFixed: string
    onPrimaryFixed: string
    primaryFixedDim: string
    onPrimaryFixedVariant: string
    secondaryFixed: string
    onSecondaryFixed: string
    secondaryFixedDim: string
    onSecondaryFixedVariant: string
    tertiaryFixed: string
    onTertiaryFixed: string
    tertiaryFixedDim: string
    onTertiaryFixedVariant: string
    surfaceDim: string
    surfaceBright: string
    surfaceContainerLowest: string
    surfaceContainerLow: string
    surfaceContainer: string
    surfaceContainerHigh: string
    surfaceContainerHighest: string
  }
  
//   export interface LightMediumContrast {
//     primary: string
//     surfaceTint: string
//     onPrimary: string
//     primaryContainer: string
//     onPrimaryContainer: string
//     secondary: string
//     onSecondary: string
//     secondaryContainer: string
//     onSecondaryContainer: string
//     tertiary: string
//     onTertiary: string
//     tertiaryContainer: string
//     onTertiaryContainer: string
//     error: string
//     onError: string
//     errorContainer: string
//     onErrorContainer: string
//     background: string
//     onBackground: string
//     surface: string
//     onSurface: string
//     surfaceVariant: string
//     onSurfaceVariant: string
//     outline: string
//     outlineVariant: string
//     shadow: string
//     scrim: string
//     inverseSurface: string
//     inverseOnSurface: string
//     inversePrimary: string
//     primaryFixed: string
//     onPrimaryFixed: string
//     primaryFixedDim: string
//     onPrimaryFixedVariant: string
//     secondaryFixed: string
//     onSecondaryFixed: string
//     secondaryFixedDim: string
//     onSecondaryFixedVariant: string
//     tertiaryFixed: string
//     onTertiaryFixed: string
//     tertiaryFixedDim: string
//     onTertiaryFixedVariant: string
//     surfaceDim: string
//     surfaceBright: string
//     surfaceContainerLowest: string
//     surfaceContainerLow: string
//     surfaceContainer: string
//     surfaceContainerHigh: string
//     surfaceContainerHighest: string
//   }
  
//   export interface LightHighContrast {
//     primary: string
//     surfaceTint: string
//     onPrimary: string
//     primaryContainer: string
//     onPrimaryContainer: string
//     secondary: string
//     onSecondary: string
//     secondaryContainer: string
//     onSecondaryContainer: string
//     tertiary: string
//     onTertiary: string
//     tertiaryContainer: string
//     onTertiaryContainer: string
//     error: string
//     onError: string
//     errorContainer: string
//     onErrorContainer: string
//     background: string
//     onBackground: string
//     surface: string
//     onSurface: string
//     surfaceVariant: string
//     onSurfaceVariant: string
//     outline: string
//     outlineVariant: string
//     shadow: string
//     scrim: string
//     inverseSurface: string
//     inverseOnSurface: string
//     inversePrimary: string
//     primaryFixed: string
//     onPrimaryFixed: string
//     primaryFixedDim: string
//     onPrimaryFixedVariant: string
//     secondaryFixed: string
//     onSecondaryFixed: string
//     secondaryFixedDim: string
//     onSecondaryFixedVariant: string
//     tertiaryFixed: string
//     onTertiaryFixed: string
//     tertiaryFixedDim: string
//     onTertiaryFixedVariant: string
//     surfaceDim: string
//     surfaceBright: string
//     surfaceContainerLowest: string
//     surfaceContainerLow: string
//     surfaceContainer: string
//     surfaceContainerHigh: string
//     surfaceContainerHighest: string
//   }
  
//   export interface Dark {
//     primary: string
//     surfaceTint: string
//     onPrimary: string
//     primaryContainer: string
//     onPrimaryContainer: string
//     secondary: string
//     onSecondary: string
//     secondaryContainer: string
//     onSecondaryContainer: string
//     tertiary: string
//     onTertiary: string
//     tertiaryContainer: string
//     onTertiaryContainer: string
//     error: string
//     onError: string
//     errorContainer: string
//     onErrorContainer: string
//     background: string
//     onBackground: string
//     surface: string
//     onSurface: string
//     surfaceVariant: string
//     onSurfaceVariant: string
//     outline: string
//     outlineVariant: string
//     shadow: string
//     scrim: string
//     inverseSurface: string
//     inverseOnSurface: string
//     inversePrimary: string
//     primaryFixed: string
//     onPrimaryFixed: string
//     primaryFixedDim: string
//     onPrimaryFixedVariant: string
//     secondaryFixed: string
//     onSecondaryFixed: string
//     secondaryFixedDim: string
//     onSecondaryFixedVariant: string
//     tertiaryFixed: string
//     onTertiaryFixed: string
//     tertiaryFixedDim: string
//     onTertiaryFixedVariant: string
//     surfaceDim: string
//     surfaceBright: string
//     surfaceContainerLowest: string
//     surfaceContainerLow: string
//     surfaceContainer: string
//     surfaceContainerHigh: string
//     surfaceContainerHighest: string
//   }
  
//   export interface DarkMediumContrast {
//     primary: string
//     surfaceTint: string
//     onPrimary: string
//     primaryContainer: string
//     onPrimaryContainer: string
//     secondary: string
//     onSecondary: string
//     secondaryContainer: string
//     onSecondaryContainer: string
//     tertiary: string
//     onTertiary: string
//     tertiaryContainer: string
//     onTertiaryContainer: string
//     error: string
//     onError: string
//     errorContainer: string
//     onErrorContainer: string
//     background: string
//     onBackground: string
//     surface: string
//     onSurface: string
//     surfaceVariant: string
//     onSurfaceVariant: string
//     outline: string
//     outlineVariant: string
//     shadow: string
//     scrim: string
//     inverseSurface: string
//     inverseOnSurface: string
//     inversePrimary: string
//     primaryFixed: string
//     onPrimaryFixed: string
//     primaryFixedDim: string
//     onPrimaryFixedVariant: string
//     secondaryFixed: string
//     onSecondaryFixed: string
//     secondaryFixedDim: string
//     onSecondaryFixedVariant: string
//     tertiaryFixed: string
//     onTertiaryFixed: string
//     tertiaryFixedDim: string
//     onTertiaryFixedVariant: string
//     surfaceDim: string
//     surfaceBright: string
//     surfaceContainerLowest: string
//     surfaceContainerLow: string
//     surfaceContainer: string
//     surfaceContainerHigh: string
//     surfaceContainerHighest: string
//   }
  
//   export interface DarkHighContrast {
//     primary: string
//     surfaceTint: string
//     onPrimary: string
//     primaryContainer: string
//     onPrimaryContainer: string
//     secondary: string
//     onSecondary: string
//     secondaryContainer: string
//     onSecondaryContainer: string
//     tertiary: string
//     onTertiary: string
//     tertiaryContainer: string
//     onTertiaryContainer: string
//     error: string
//     onError: string
//     errorContainer: string
//     onErrorContainer: string
//     background: string
//     onBackground: string
//     surface: string
//     onSurface: string
//     surfaceVariant: string
//     onSurfaceVariant: string
//     outline: string
//     outlineVariant: string
//     shadow: string
//     scrim: string
//     inverseSurface: string
//     inverseOnSurface: string
//     inversePrimary: string
//     primaryFixed: string
//     onPrimaryFixed: string
//     primaryFixedDim: string
//     onPrimaryFixedVariant: string
//     secondaryFixed: string
//     onSecondaryFixed: string
//     secondaryFixedDim: string
//     onSecondaryFixedVariant: string
//     tertiaryFixed: string
//     onTertiaryFixed: string
//     tertiaryFixedDim: string
//     onTertiaryFixedVariant: string
//     surfaceDim: string
//     surfaceBright: string
//     surfaceContainerLowest: string
//     surfaceContainerLow: string
//     surfaceContainer: string
//     surfaceContainerHigh: string
//     surfaceContainerHighest: string
//   }
  
  export interface Palettes {
    primary: Primary
    secondary: Secondary
    tertiary: Tertiary
    neutral: Neutral
    "neutral-variant": NeutralVariant
  }
  
  export interface Primary {
    "0": string
    "5": string
    "10": string
    "15": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
  }
  
  export interface Secondary {
    "0": string
    "5": string
    "10": string
    "15": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
  }
  
  export interface Tertiary {
    "0": string
    "5": string
    "10": string
    "15": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
  }
  
  export interface Neutral {
    "0": string
    "5": string
    "10": string
    "15": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
  }
  
  export interface NeutralVariant {
    "0": string
    "5": string
    "10": string
    "15": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
  }
  
