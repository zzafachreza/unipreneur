import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Animated,
  Dimensions,
  ImageBackground,
  StatusBar,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import { MyButton, MyGap } from '../../components';
import { colors } from '../../utils/colors';
import { color } from 'react-native-reanimated';
import { fonts } from '../../utils/fonts';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';
import { Alert } from 'react-native';
import { useEffect } from 'react';
import { MYAPP } from '../../utils/localStorage';

export default function GetStarted({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const bottom = new Animated.Value(windowWidth);
  const opacity = new Animated.Value(0);
  const top = new Animated.Value(0);

  Animated.timing(bottom, {
    toValue: 100,
    duration: 1200,
    useNativeDriver: false,
  }).start();

  Animated.timing(opacity, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  Animated.timing(top, {
    toValue: 50,
    duration: 1000,
    useNativeDriver: false,
  }).start();


  const backAction = () => {
    Alert.alert(MYAPP, "Apakah kamu yakin akan keluar aplikasi ?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };


  useEffect(() => {
    // const backHandler = BackHandler.addEventListener(
    //   "hardwareBackPress",
    //   backAction
    // );

    // return () => backHandler.remove();
  }, [])

  return (
    <ImageBackground source={require('../../assets/splash.png')} style={styles.page} resizeMode="cover">
      {/* <StatusBar backgroundColor={colors.secondary} barStyle="light-content" /> */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>



      </View>

      <View style={{
        justifyContent: 'center',
        padding: 10,
      }}>
        <MyButton
          title="MASUK"
          Icons="log-in-outline"


          warna={colors.primary}
          onPress={() => navigation.navigate('Login')}
        />

        <MyGap jarak={20} />

        <MyButton
          title="DAFTAR"
          iconColor={colors.primary}
          colorText={colors.primary}
          warna={colors.white}
          Icons="create-outline"

          onPress={() => navigation.navigate('Register')}
        />
      </View>

      <Animated.View style={{ height: top }} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background1,
  },
  title: {
    marginTop: 50,
    fontFamily: fonts.secondary[800],
    fontSize: 50,
    color: colors.primary,
  },
});
