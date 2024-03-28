import {StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

interface SearchInputFieldInterface {
  value: string;
  onChangeText: any;
}

function SearchInputField(props: SearchInputFieldInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    mainSearchContainer: {
      width: '100%',
      borderColor: MaterialColorTheme.primary,
      borderWidth: 2.5,
      borderRadius: 100,
      padding: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      marginBottom: 8,
    },
  });
  const [search, setSearch] = useState('');
  return (
    <View style={styles.mainSearchContainer}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {search.length == 0 && <AntDesign color={MaterialColorTheme.onSurface} name="search1" size={25} />}
      </View>
      <View style={{width: '80%', alignItems: 'center'}}>
        <TextInput
          style={{width: '100%', alignItems: 'center', color: MaterialColorTheme.onSurface}}
          placeholder="Search"
          onChangeText={value => props.onChangeText(value)}
          value={props.value}
        />
      </View>
    </View>
  );
}



export default SearchInputField;
