import React from "react";

import { View, Text, ScrollView, StyleSheet } from "react-native";
import { COLORS, icons, images } from "../../constants";
import { IconButton } from "react-native-paper";


const HomeTags = ({ titleTag, SubTag, data, styleContainer, type, navigation}) => {
    return (
        <View style={styleContainer}>
            <View style={Styles.titleContainer}>
                <Text style={Styles.title}>{titleTag}</Text>
            </View>
            <ScrollView
                style={type == "SHARED_ACCESS"? Styles.subScrollView1:Styles.subScrollView2}
                contentContainerStyle={{ alignItems: "center" }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {data.map((item, index) => {

                    return <SubTag key={index} props={item} navigation={navigation}/>;
                })}

                {type == "SHARED_ACCESS" && (
                    <IconButton
                        icon={icons.addCircle_icon}
                        iconColor={COLORS.primary}
                        size={50}
                        onPress={() => console.log("Pressed")}
                    />
                )}
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({

    subScrollView1: {
        paddingHorizontal: 10,

        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: 'white',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    subScrollView2: {
        paddingHorizontal: 5
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Inter-Medium'
    },
});

export default HomeTags;
