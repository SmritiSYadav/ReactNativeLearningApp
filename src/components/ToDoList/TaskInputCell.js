
import React, {useState}  from 'react';
import { View, StyleSheet, Button, TextInput, StatusBar, Modal } from 'react-native';

const TaskInputCell = props => {
    const [enteredTask, setEnteredTask] = useState('');
    const taskInputHandler = (enteredText) => {
      setEnteredTask(enteredText);
    }

    const addTaskHandler = () => {
      props.onAddTask(enteredTask);
      setEnteredTask("");
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputView}>
          <TextInput placeholder = "Enter task here."
            style={styles.inputTextField}
            onChangeText = {taskInputHandler}
            value = {enteredTask}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title = "Cancel" color="red" onPress = {props.onCancel}></Button>
            </View>
            <View style={styles.button}>
              <Button title = "Add" 
              onPress = {addTaskHandler}
              />
            </View>
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputTextField: {
    fontSize: 20,
    width: "80%",
    borderColor: "#D12765",
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  },
  });

  export default TaskInputCell;
