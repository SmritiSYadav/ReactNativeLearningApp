
import React, {useState}  from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';

const TaskCell = props => {

    return (
          <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <Text style={styles.outputText}>{props.title}</Text>
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  outputText: {
    fontSize: 20,
    borderColor: "#D12765",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    color:  "#D12765",
    backgroundColor: "#ccc",
    textAlign: "center",
  }
  });

  export default TaskCell;
