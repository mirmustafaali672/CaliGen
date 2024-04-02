export var CurrentMaterialColor:
  | 'Pink'
  | 'Blue'
  | 'Baseline'
  | 'Teal'
  | 'Orange'
  | 'Cyan' = 'Baseline';

  export function SetCurrentMaterialColor(Color:   | 'Pink'
  | 'Blue'
  | 'Baseline'
  | 'Teal'
  | 'Orange'
  | 'Cyan')
  {
    CurrentMaterialColor =  Color;
  }
