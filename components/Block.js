import React from "react";
import { View, StyleSheet } from "react-native";

const Block = (props) => {
    return(
        <View style={styles.block}></View>
    )
}


const styles = StyleSheet.create({
    block: {
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'black',
        width: 100,
        height: 200,
        backgroundColor: 'cyan',
        margin: 5,
    },
});

export default Block;