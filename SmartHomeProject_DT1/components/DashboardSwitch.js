import React, { useState } from 'react'
import SwitchDevice from './SwitchDevice';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Switch,
    Image
} from 'react-native';

function DashboardSwitch(props) {

    const [switchStates, setSwitchStates] = useState(props.controlMode);
    return (
        <View style={[styles.control_bg, { flexDirection: 'column' }]}>
            <View style={styles.control_container}>
                <View style={[styles.control_inside, { flexDirection: 'column' }]}>
                    <SwitchDevice
                        key={switchStates[0].id}
                        title={switchStates[0].name}
                        isEnabled={switchStates[0].isEnabled}
                        image={false}
                    />
                    <View style={styles.switchContainer}>
                        {switchStates.slice(1, 4).map(eachSwitch =>
                            <SwitchDevice
                                key={eachSwitch.id}
                                title={eachSwitch.name}
                                isEnabled={eachSwitch.isEnabled}
                                image={true}
                            />
                        )}
                    </View>
                </View>
            </View>
            <View style={styles.control_container}>
                <View style={[styles.control_inside, { flexDirection: 'column' }]}>
                    <SwitchDevice
                        key={switchStates[4].id}
                        title={switchStates[4].name}
                        isEnabled={switchStates[4].isEnabled}
                        image={false}
                    />
                    <View style={styles.switchContainer}>
                        {switchStates.slice(5, 8).map(eachSwitch =>
                            <SwitchDevice
                                key={eachSwitch.id}
                                title={eachSwitch.name}
                                isEnabled={eachSwitch.isEnabled}
                                image={true}
                            />
                        )}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DashboardSwitch;

const styles = StyleSheet.create({
    control_container: {
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: 'rgb(103,79,63)',
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 20,
        marginTop: 30,
    },
    control_inside: {
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: 'rgb(150, 121, 105)',
        borderRadius: 10,
        flex: 1,
        margin: 20,
    },
    switchContainer: {
        flex: 0.7,
        marginHorizontal: 20,
        marginTop: 15,
        paddingBottom: 70,
        flexDirection: 'column'
    },
    control_bg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: 'rgb(145,122,115)',
        borderRadius: 10
    },
})