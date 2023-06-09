import React, { useState, useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Pressable,
    Alert,
    Image,
} from "react-native";

import { AppContext } from "../context/AppContext";
import { Avatar, Provider } from "react-native-paper";
import { images, COLORS, icons, HOST } from "../constants";

import {
    InforTag,
    Title,
    UpdateDialog,
} from "../components/UserProfileComponent";
import { SharedAccessTag } from "../components/HomeComponent";


const UserProfile = ({ navigation, route }) => {

    const { user, dispatch, accessPeople } = useContext(AppContext);
    const [updatePassword, setUpdatePassword] = useState(false);
    const [updatePhone, setUpdatePhone] = useState(false);
    const [updateEmail, setUpdateEmail] = useState(false);
    const [updateDoor, setUpdateDoor] = useState(false);

    const addAccess = () => { };

    const onUpdateDoorPass = (newPass, confirmPass) => {
        if (newPass !== confirmPass) {
            Alert.alert(
                "Password and Confirm Password are different!",
                "Please try again!",
                [{ text: "OK" }]
            );
        } else {
            setUpdateDoor(false);
        }
    };

    const onUpdatePassword = async (newPass, confirmPass) => {
        if (newPass !== confirmPass) {
            Alert.alert(
                "Password and Confirm Password are different!",
                "Please try again!",
                [{ text: "OK" }]
            );
        } else {
            try {
                const response = await fetch(
                    HOST + `/user/update-password/${user._id}`,
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            newPassword: newPass,
                        }),
                    }
                );

                let result = await response.json();
                dispatch({
                    flag: 'UPDATE_PASSWORD',
                    payload: result
                })
                setUpdatePassword(false);
                Alert.alert("Update Successfully!", "", [{ text: "OK" }]);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const onUpdatePhone = async (newPhone) => {
        let phoneRegex = /[0-9][1-9][0-9]{8}/;
        if (!newPhone.match(phoneRegex)) {
            Alert.alert("Invalid Phone Number", "", [{ text: "OK" }]);
        } else {
            try {
                const response = await fetch(
                    HOST + `/user/update-phone/${user._id}`,
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            newPhone: newPhone,
                        }),
                    }
                )
                let result = await response.json();
                dispatch({
                    flag: 'UPDATE_PHONE',
                    payload: result
                })
                setUpdatePhone(false);
                Alert.alert("Update Successfully!", "", [{ text: "OK" }]);
            } catch (error) {
                console.error(error);
            }
        };
    };

    const onUpdateEmail = async (newEmail) => {
        let emailRegex = /[a-zA-z0-9.]*@gmail.com/;
        if (!newEmail.match(emailRegex)) {
            Alert.alert("Invalid Email!", "", [{ text: "OK" }]);
        } else {
            try {
                const response = await fetch(
                    HOST + `/user/update-email/${user._id}`,
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            newEmail: newEmail,
                        }),
                    }
                )
                let result = await response.json();
                dispatch({
                    flag: 'UPDATE_EMAIL',
                    payload: result
                });
                setUpdateEmail(false);
                Alert.alert("Update Successfully!", "", [{ text: "OK" }]);
            } catch (error) {
                console.error(error);
            }
        };
    };

    const removePeople = (name) => {
        dispatch({
            flag: 'DEL_SHAREDPEOPLE',
            payload: name
        })
    };

    const logout = () => {
        navigation.navigate("Login");
    };

    return (
        <Provider>
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Text
                        style={{
                            alignSelf: "center",
                            fontFamily: "Inter-ExtraBold",
                            fontSize: 20,
                            color: COLORS.primary,
                        }}
                    >
                        My Profile
                    </Text>
                    <View style={Styles.subHeader}>
                        <Avatar.Image source={{ uri: user.image }} size={100} />
                        <View style={Styles.headerInfor}>
                            <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 20 }}>
                                {user.name}
                            </Text>
                            <Text style={{ fontFamily: "Inter-Regular", fontSize: 15 }}>
                                #{user._id.substr(-6, 6)}
                            </Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={Styles.content} showsVerticalScrollIndicator={false}>
                    {/* Personal Information */}
                    <View style={Styles.personalInfor}>
                        <Title title="Personal Information" />
                        <View style={Styles.contentInfor}>
                            <InforTag
                                icon={icons.username}
                                title="Username"
                                text={user.username}
                                editInfor={null}
                            />
                            <InforTag
                                icon={icons.key}
                                title="Password"
                                text={user.password}
                                funcIcon={icons.edit_pen}
                                openDialog={setUpdatePassword}
                            />
                            <InforTag
                                icon={icons.phone}
                                title="Phone"
                                text={user.phone}
                                funcIcon={icons.edit_pen}
                                openDialog={setUpdatePhone}
                            />
                            <InforTag
                                icon={icons.mail}
                                title="Email"
                                text={user.email}
                                funcIcon={icons.edit_pen}
                                openDialog={setUpdateEmail}
                            />
                        </View>
                    </View>

                    {/* Auto Door */}
                    <View style={Styles.autoDoor}>
                        <Text style={Styles.contentTitle}>Auto Door</Text>
                        <View style={Styles.contentInfor_2}>
                            <InforTag
                                icon={icons.password}
                                title="Password"
                                text="0712"
                                funcIcon={icons.edit_pen}
                                openDialog={setUpdateDoor}
                            />
                        </View>
                    </View>

                    {/* Shared Access */}
                    <View style={Styles.sharedAccess}>
                        <Title
                            title="Manage Shared Access"
                            icon={icons.add_person}
                            func={addAccess}
                        />
                        <ScrollView
                            style={Styles.contentInfor_1}
                            showsVerticalScrollIndicator={false}
                        >
                            {accessPeople.map((people, index) => {
                                return (
                                    <SharedAccessTag
                                        key={index}
                                        props={people}
                                        type={true}
                                        remove={removePeople}
                                    />
                                );
                            })}
                        </ScrollView>
                    </View>

                    {/* Logout */}
                    <Pressable onPress={() => logout()} style={Styles.logout}>
                        <Text
                            style={{
                                alignSelf: "center",
                                fontFamily: "Inter-SemiBold",
                                fontSize: 16,
                                color: COLORS.white,
                            }}
                        >
                            Log out
                        </Text>
                    </Pressable>
                </ScrollView>
            </View>
            <UpdateDialog
                title="Change Password"
                visible={updatePassword}
                setVisible={setUpdatePassword}
                onSubmit={onUpdatePassword}
            />
            <UpdateDialog
                title="Update Phone Number"
                visible={updatePhone}
                setVisible={setUpdatePhone}
                onSubmit={onUpdatePhone}
            />
            <UpdateDialog
                title="Update Email"
                visible={updateEmail}
                setVisible={setUpdateEmail}
                onSubmit={onUpdateEmail}
            />
            <UpdateDialog
                title="Update AutoDoor's Password"
                visible={updateDoor}
                setVisible={setUpdateDoor}
                onSubmit={onUpdateDoorPass}
            />
        </Provider>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 20,
        backgroundColor: COLORS.light_gray,
    },
    header: {
        width: "100%",
        height: 200,
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        justifyContent: "space-around",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 50,
        paddingBottom: 20,
    },
    subHeader: {
        width: "100%",
        flexDirection: "row",
        paddingLeft: 40,
    },
    headerInfor: {
        justifyContent: "center",
        marginLeft: 20,
    },
    content: {
        width: "90%",
    },
    contentTitle: {
        alignSelf: "flex-start",
        fontFamily: "Inter-Bold",
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        color: COLORS.primary,
    },
    contentInfor: {
        height: 200,
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 10,
    },
    contentInfor_2: {
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 10,
    },
    contentInfor_1: {
        width: "100%",
        height: 150,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 10,
    },
    logout: {
        width: "50%",
        height: 40,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
    },
});

export default UserProfile;
