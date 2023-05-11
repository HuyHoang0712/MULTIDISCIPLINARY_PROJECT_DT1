import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Portal, Dialog, Button, TextInput } from "react-native-paper";

import { icons, COLORS, images } from "../../constants";

const UpdateDialog = ({ title, visible, setVisible, onSubmit }) => {
    const [newValue, setNewValue] = useState("");
    const [hideText, setHideText] = useState(true);
    const [confirmPass, setConfirmPass] = useState("");

    let label = title.split(" ");
    label = label[label.length - 1];
    console.log(label);

    const hideDialog = () => {
        setVisible(false);
    }

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} style={{ backgroundColor: COLORS.white }}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Content>
                    <TextInput
                        label={label}
                        value={newValue}
                        secureTextEntry={label === "Password" ? hideText : false}
                        onChangeText={text => setNewValue(text)}
                        right={label === "Password" ? (
                            <TextInput.Icon icon="eye" onPress={() => setHideText(!hideText)} />
                        ) : null}
                    />
                    {label === "Password" ? (
                        <TextInput
                            label='Confirm Password'
                            value={confirmPass}
                            secureTextEntry={hideText}
                            onChangeText={text => setConfirmPass(text)}
                            right={<TextInput.Icon icon="eye" onPress={() => setHideText(!hideText)} />}
                        />
                    ) : null}
                </Dialog.Content>
                <Dialog.Actions>
                    <Button >Comfirm</Button>
                    <Button onPress={() => hideDialog()} >Cancel</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
};

const Styles = StyleSheet.create({

});

export default UpdateDialog;

