import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CustomToolBar from '../components/customToolBar';
import { useNavigation } from '@react-navigation/native';

interface PaymentRequest {
    Code: string;
    Amount: number;
    DisplayName: string;
}

interface ListStaticPaymentRequestProps {
    PaymentRequests: PaymentRequest[];
}

export default function ListStaticPaymentRequest({ PaymentRequests }: ListStaticPaymentRequestProps) {
    return (
        <View style={styles.container}>
            {/* Header */}
            {/* <View style={[styles.header, { backgroundColor: '#354A87' }]}>
                <CustomToolBar TitleText="My Static Code" IconUrl="QR_Page_icon.png" />
            </View> */}

            {/* Content */}
            {/* <View style={styles.content}>
                <ScrollView>
                    <View style={styles.contentPadding}>
                        <CollectionView itemsSource={PaymentRequests} selectionMode="Single" selectionChanged={PaymentRequestList_SelectionChanged} />
                    </View>
                </ScrollView>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    content: {
        flex: 1,
    },
    contentPadding: {
        padding: 20,
    },
    TitleText:{
      backgroundColor: 'red',
    },
});
