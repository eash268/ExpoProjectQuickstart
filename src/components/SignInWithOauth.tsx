import React, { useCallback, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth, useUser } from '@clerk/clerk-expo';
import { Button, Text } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export const SignInWithOauth = () => {
    const { startOAuthFlow } = useOAuth({strategy: 'oauth_google'});
    const { user } = useUser();

    const onPress = useCallback(async () => {
        try {
            const { createdSessionId, setActive, signUp } = await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
                alert(user.publicMetadata); // Set the user info
            } else {
                console.log('Failed to sign in or sign up.');
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <>
            <Button
                title="Press me"
                onPress={onPress}
            />
        </>
    );
}