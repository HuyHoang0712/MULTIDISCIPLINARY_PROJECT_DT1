import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import { Avatar } from "react-native-paper";
import { images, COLORS } from "../constants";

import { InforTag } from "../components/UserProfileComponent";

const UserInfor = {
    id: '01234',
    name: 'Hoang Huy',
    phone: '0917263404',
    email: 'test@example.com',
    username: 'huyhoang',
    passwork: '123',
    image: images.person1
}

const UserProfile = ({navigation, route}) => {
    const logout = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={{
                    alignSelf: 'center',
                    fontFamily: 'Inter-ExtraBold',
                    fontSize: 20,
                    color: COLORS.primary
                }}>My Profile</Text>
                <View style={Styles.subHeader}>
                    <Avatar.Image source={UserInfor.image} size={100}/>
                    <View style={Styles.headerInfor}>
                        <Text style={{
                            fontFamily: 'Inter-SemiBold',
                            fontSize: 20
                        }}>{UserInfor.name}</Text>
                        <Text style={{
                            fontFamily:'Inter-Regular',
                            fontSize: 15
                        }}>#{UserInfor.id}</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={Styles.content}>
                <View style={Styles.personalInfor}>
                    <Text style={Styles.contentTitle}>Personal Infor</Text>
                    <View style={Styles.contentInfor}>
                        <InforTag />
                    </View>
                </View>
                <View style={Styles.autoDoor}>
                    <Text style={Styles.contentTitle}>Auto Door</Text>
                </View>
                <View style={Styles.sharedAccess}>
                    <Text style={Styles.contentTitle}>Manage Shared Access</Text>
                </View>
                <View style={Styles.logout}>
                    <Text>Logout</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.light_gray
    },
    header: {
        width: '100%',
        height: 200,
        alignContent: 'center',
        backgroundColor: COLORS.secondary,
        justifyContent: 'space-around',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 50,
        paddingBottom: 20
    },
    subHeader: {
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 40
    },
    headerInfor: {
        justifyContent: 'center',
        marginLeft: 20,
    },
    content: {
        width: '80%',
    },
    contentTitle: {
        alignSelf: 'flex-start',
        fontFamily: 'Inter-SemiBold',
        fontSize: 20,
        color: COLORS.primary
    }
})

export default UserProfile;