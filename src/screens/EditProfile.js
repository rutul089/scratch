//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import { Block, Text, Input, Button } from "../components";
import { theme } from "../constants";
import { Thumbnail, Content } from "native-base";
import ImagePicker from "react-native-image-picker";

// create a component
class EditProfile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    avatarSource: require("../../assets/image/base/avtar.jpg")
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: " Edit Profile",
      headerTitleStyle: {
        fontWeight: "700",
        fontSize: theme.sizes.h3,
        fontFamily: theme.fontFamily.regular
      }
    };
  };
  clickImg = () => {
    const options = {
      title: "Select Avatar",
      takePhotoButtonTitle: "Take photo",
      chooseFromLibraryButtonTitle: "Choose from Library"
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("Image Picker Error: ", response.error);
      } else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });
      }
    });
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <React.Fragment>
          <Content>
            <Block
              style={{
                marginRight: theme.sizes.padding,
                paddingTop: theme.sizes.padding,
                paddingBottom: theme.sizes.padding * 2,
                marginLeft: theme.sizes.padding
              }}
            >
              <Block center style={{ marginTop: theme.sizes.padding / 2 }}>
                <Thumbnail
                  resizeMode="cover"
                  style={{ height: 100, width: 100, borderRadius: 50 }}
                  source={this.state.avatarSource}
                />
                <TouchableOpacity
                  style={{ marginTop: theme.sizes.padding / 2 }}
                  onPress={() => this.clickImg()}
                >
                  <Text button bold primary spacing={0.32}>
                    Edit Profile Picture
                  </Text>
                </TouchableOpacity>
              </Block>
              <Input
                labelColor={theme.colors.caption}
                label="Full Name"
                defaultValue="Nick Evans"
                style={styles.input}
              />
              <Input
                labelColor={theme.colors.caption}
                label="Bio"
                defaultValue="Potato Master"
                style={styles.input}
              />
              <Text
                black
                bold
                button
                style={{ marginTop: theme.sizes.padding * 2 }}
              >
                Private Information
              </Text>
              <Input
                labelColor={theme.colors.caption}
                label="Email"
                defaultValue="user@email.com"
                style={styles.input}
              />
              <Input
                labelColor={theme.colors.caption}
                label="Phone"
                phone
                defaultValue="+123456789"
                style={styles.input}
              />
              <Button
                color={theme.colors.primary}
                onPress={() => alert("Profile has been updated successfully..")}
              >
                <Text white center bold button>
                  Save Profile
                </Text>
              </Button>
            </Block>
          </Content>
        </React.Fragment>
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray3,
    borderBottomWidth: 1
  }
});

//make this component available to the app
export default EditProfile;
