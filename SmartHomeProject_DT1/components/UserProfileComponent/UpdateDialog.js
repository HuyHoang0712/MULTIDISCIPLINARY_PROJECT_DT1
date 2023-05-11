import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Portal, Dialog } from "react-native-paper";

import { icons, COLORS, images } from "../../constants";

const UpdateDialog = ({visible, setVisible}) => {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={setVisible}>
                <Dialog.Title></Dialog.Title>
                <Dialog.Content>
                    <Text>hello</Text>
                </Dialog.Content>
            </Dialog>
        </Portal>
    )
};

const Styles = StyleSheet.create({

});

export default UpdateDialog;

