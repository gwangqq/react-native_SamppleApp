/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import AdbrixRm from 'react-native-adbrix-remaster';
class App extends Component {


  componentDidMount() {
    AdbrixRm.startAdbrixSDK('TS45xoOx7UmbZHbaoforbQ', 'qQYeVOWXt0OAN9Igt6toWQ');
    AdbrixRm.setDeeplinkListener(function (deeplink) {
      console.log("deeplink msg arrived!");
      console.log(deeplink); // you will receive deeplink info on "deeplink"
    });
  }
  // login event
  loginClick = () => {
    alert('login event trigger!!!!');
    AdbrixRm.login('user1234');
  }
  customClick = () => {
    alert('custom event triggered!!!!!');
    // Addtional event parameter
    var eventAttr = new AdbrixRm.AttrModel();
    eventAttr.setAttrs("address", "New York")
    eventAttr.setAttrs("age", 27)
    eventAttr.setAttrs("firsttime", true);
    AdbrixRm.event("custom_event", eventAttr);
  }
  // sign up event
  singUpClick = () => {
    alert('sing-up event triggered!!!!!');
    var eventAttr = new AdbrixRm.AttrModel();
    eventAttr.setAttrs("address", "New York");
    eventAttr.setAttrs("age", 27);
    eventAttr.setAttrs("firsttime", true);
    AdbrixRm.commonSignUp(AdbrixRm.SIGNUP_CHANNEL_KAKAO, eventAttr);
  }

  // type user info 
  userInfoClick = () => {
    alert('user info event triggered!!!!!');
    // Age
    AdbrixRm.setAge(30);

    // Gender
    AdbrixRm.setGender(AdbrixRm.GENDER_MALE);

    // Other user properties
    var userProperties = new AdbrixRm.UserProperties();
    userProperties.setProperty("user_nick", "Jake");
    userProperties.setProperty("place", "Seoul");
    userProperties.setProperty("height", 180);
    userProperties.setProperty("married", false);

    AdbrixRm.setUserProperties(userProperties);
  }


  // insert purchase info
  purchaseClick = () => {
    alert('purchase event triggered!!!!!');
    // product and category setup
    var category1 = new AdbrixRm.CategoryModel();
    category1.setCategory("cloth");
    category1.setCategory("panth");
    category1.setCategory("short");
    category1.setCategory("summer");
    category1.setCategory("Nike");

    var product1 = new AdbrixRm.ProductModel();
    product1.setProductId("3029102");
    product1.setProductName("Gray top");
    product1.setPrice(50000);
    product1.setDiscount(10000);
    product1.setCurreny(AdbrixRm.CURRENCY_KR_KRW);
    product1.setCategory(category1);

    var category2 = new AdbrixRm.CategoryModel();
    category2.setCategory("electronic");
    category2.setCategory("small");
    category2.setCategory("samsung");
    category2.setCategory("phone");
    category2.setCategory("galaxybrand");

    var product2 = new AdbrixRm.ProductModel();
    product2.setProductId("12324");
    product2.setProductName("Galaxy S10");
    product2.setPrice(50000);
    product2.setDiscount(10000);
    product2.setCurreny(AdbrixRm.CURRENCY_KR_KRW);
    product2.setCategory(category2);

    // productlist setup
    var productList = new AdbrixRm.ProductModelList();
    productList.setProduct(product1);
    productList.setProduct(product2);

    // Addtional event parameter
    var eventAttr = new AdbrixRm.AttrModel();
    eventAttr.setAttrs("address", "New York");
    eventAttr.setAttrs("age", 27);
    eventAttr.setAttrs("firsttime", true);

    //purchase API
    AdbrixRm.commonPurchase("orderId_12341", productList, 0.00, 3500.00, AdbrixRm.PAYMENT_METHOD_BANK_TRASNFER, eventAttr);
  }

  tutorialCompleteClick = () => {
    alert('tutorial complete event triggered!!!!!');
    // Addtional event parameter
    var eventAttr = new AdbrixRm.AttrModel();
    eventAttr.setAttrs("address", "New York");
    eventAttr.setAttrs("age", 27);
    eventAttr.setAttrs("firsttime", true);
    eventAttr.setAttrs("credit", 10000);

    AdbrixRm.gameTutorialCompleted(true, eventAttr);
  }

  characterCreateClick = () => {
    alert('character creat event triggered!!!!!');
    // Addtional event parameter
    var eventAttr = new AdbrixRm.AttrModel();
    eventAttr.setAttrs("address", "New York");
    eventAttr.setAttrs("age", 27);
    eventAttr.setAttrs("firsttime", true);
    eventAttr.setAttrs("credit", 10000);
    eventAttr.setAttrs("name", "AngryNelsson316");

    AdbrixRm.gameCharacterCreated(eventAttr);
  }
  purchaseInfoClick = () => {
    alert('purchase info event triggered!!!!!');
    var commmerceAttr = new AdbrixRm.AttrModel();
    commmerceAttr.setAttrs("grade", "vip");
    commmerceAttr.setAttrs("howmany_buy", 36);
    commmerceAttr.setAttrs("card", "kbcard");
    commmerceAttr.setAttrs("discount", true);

    //Event of filling in payment information
    AdbrixRm.commercePaymentInfoAdded(commmerceAttr);
  }
  homeClick = () => {
    alert('enter home event triggered!!!!!');
    // Addtional event parameter
    var eventAttr = new AdbrixRm.AttrModel();
    eventAttr.setAttrs("address", "New York");
    eventAttr.setAttrs("age", 27);
    eventAttr.setAttrs("firsttime", true)

    AdbrixRm.commerceViewHome(eventAttr);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

        </View>
        <View style={styles.body}>
          <View style={styles.event}>
            <View style={styles.a}><Button title="login" onPress={this.loginClick} ></Button></View>
            <View style={styles.a}><Button title="custom event" onPress={this.customClick} ></Button></View>
            <View style={styles.a}><Button title="sign up" onPress={this.singUpClick} ></Button></View>
          </View>
          <View style={styles.event}>
            <View style={styles.a}><Button title="user info" onPress={this.userInfoClick} ></Button></View>
            <View style={styles.a}><Button title="insert purchase info" onPress={this.purchaseInfoClick} ></Button></View>
            <View style={styles.a}><Button title="tutorial completed" onPress={this.tutorialCompleteClick} ></Button></View>
          </View>
          <View style={styles.event}>
            <View style={styles.a}><Button title="character created" onPress={this.characterCreateClick} ></Button></View>
            <View style={styles.a}><Button title="purchase" onPress={this.purchaseClick} ></Button></View>
            <View style={styles.a}><Button title="home" onPress={this.homeClick} ></Button></View>
          </View>
        </View>
        <View style={styles.footer}>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  body: {
    flex: 6,
    alignItems: "center"
  },

  header: {
    flex: 1
  },

  footer: {
    flex: 1
  },

  event: {
    flex: 1,
    flexDirection: "row"
  },
  a: {
    flex: 1
  }
});
export default App;