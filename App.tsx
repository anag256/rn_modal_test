import React, {useState} from 'react';
import {Alert, Modal,StyleSheet, Text, Pressable, View, Dimensions, ScrollView} from 'react-native';
// import { Modal } from './Modal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log("Dimensions.window",Dimensions.get('window').height)
  console.log("Dimensions.screen",Dimensions.get('screen').height)
  return (
    // <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.centeredView} onLayout={(event)=>{
    const {x,y,width,height}=event.nativeEvent.layout;
    console.log("width",width);
    console.log("height",height);
  }}>
    <Text>  <Text>absbsbbsbbs</Text>
    <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text>
    <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text> <Text>absbsbbsbbs</Text></Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView1}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

        {/* <Modal/> */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
    // </ScrollView>



  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centeredView1: {
    position:'absolute',
    bottom:0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;