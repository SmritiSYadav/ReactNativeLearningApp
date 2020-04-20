
import React, {useState}  from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import TaskCell from './TaskCell';
import TaskInputCell from './TaskInputCell';

function ToDoListScreen() {
    const [allTasks, setAllTasks] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addTaskHandler = taskTitle => {
      setAllTasks(allTasks => [...allTasks, { id: Math.random().toString(), value: taskTitle }])
      setIsAddMode(false);
    }

    const removeTaskHandler = taskId => {
      setAllTasks(allTasks => {
        return allTasks.filter((task) => task.id !== taskId)
      }
      );
    }

    const cancelTaskHandler = () => {
      setIsAddMode(false);
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setIsAddMode(true)}> 
          <Text style={styles.addButton}> 
          Add New Goal
          </Text>
        </TouchableOpacity>
        <StatusBar backgroundColor='#D12765' barStyle="light-content"/>
        <TaskInputCell visible={isAddMode} onAddTask={addTaskHandler} onCancel={cancelTaskHandler}/>
        <View style={styles.outputView}>
          <Text style={styles.outputTitle}>My Tasks</Text>
          <FlatList 
          keyExtractor={(item, index) => item.id}
          data = {allTasks}
          renderItem = {itemData => <TaskCell id={itemData.item.id} onDelete={removeTaskHandler} title={itemData.item.value}/>}
          >
          </FlatList>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  addButton: {
    marginTop: 50,
    fontSize: 20,
    color:  "#D12765",
  },
  outputView: {
    marginTop: 50,
    flexDirection: "column",
    width: "90%",
    marginBottom: 50
  },
  outputTitle: {
    fontSize: 20,
    borderColor: "#D12765",
    marginBottom: 10,
    alignItems: 'center',
    textAlign: "center"
  },
  });

  export default ToDoListScreen;
