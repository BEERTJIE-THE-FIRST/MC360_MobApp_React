import React, { useRef } from 'react';
import { ScrollView, View, Text, TextInput, ActivityIndicator, TextInputKeyPressEventData, TouchableOpacity } from 'react-native';
import OTPOrPasscodeInput from '../../components/otp_Or_Passcode_Input';
import ButtonCancel from '../../components/button_Cancel';
import ResendOTPButton from '../../components/resend_OTP_Button';
import CustomButton from '../../components/button';

export default function OTPPage({navigation}:any) {
    const codeInputs = Array.from({ length: 5 }, () => useRef<TextInput | null>(null));

    const focusNextInput = (index: number) => {
        if (index < codeInputs.length - 1 && codeInputs[index + 1].current) {
            codeInputs[index + 1].current!.focus();
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#354A87', textAlign: 'center', marginBottom: 10, marginTop:35 }}>
                        Please supply the one time pin sent to mobile number
                    </Text>

                    <OTPOrPasscodeInput setCodeInputs={function (value: React.SetStateAction<string[]>): void {
                        throw new Error('Function not implemented.');
                    } } />
                    {/* <TouchableOpacity><Text style={{ fontSize: 18, fontWeight: 'bold', color: '#354A87', textAlign: 'center', marginTop: 20 }}>Resend OTP</Text></TouchableOpacity> */}
                    <ResendOTPButton onPress={()=>{}} name={"Resend OTP"}/>
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <ActivityIndicator color="#134F6F" />
                        {/* <Button title="Continue" onPress={() => {}} color="#354A87" /> */}
                        {/* <Button title="Cancel" onPress={() => {}} color="#354A87" /> */}
                    </View>
                    <CustomButton onPress={() => navigation.navigate("PersonIdScreen")} name={"Continue"} color={undefined} disabled={false} />
                    <ButtonCancel onPress={() => {}} name={"Cancel"} />
                </View>
            </ScrollView>
        </View>
    );
}
