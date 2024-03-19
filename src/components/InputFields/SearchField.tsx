import { StyleSheet, TextInput, View } from "react-native";
import RobotoText from "../Text/RobotoText";
import * as MaterialColors from "../../styles/materialColors"
import { useState } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';

interface SearchInputFieldInterface {
    value: string,
    onChangeText: any
}

function SearchInputField(props: SearchInputFieldInterface) {
    const [search, setSearch] = useState("");
    return <View style={styles.mainSearchContainer}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            {
                search.length == 0 && <AntDesign name="search1" size={25} />
            }
        </View>
        <View style={{ width: "80%", alignItems: "center" }}>
            <TextInput style={{ width: "100%", alignItems: "center" }} placeholder="Search"
                onChangeText={value => props.onChangeText(value)}
                value={props.value} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    mainSearchContainer: {
        width: "100%",
        borderColor: MaterialColors.MaterialDeepPurple,
        borderWidth: 2.5,
        borderRadius: 100,
        padding: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        marginBottom: 8
    }
})

export default SearchInputField;