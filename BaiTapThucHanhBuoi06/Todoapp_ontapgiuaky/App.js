import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import AddTodoInPut from './component/AddTodoInput';
import FlatListDemo from './component/FlatListDemo';

export default function App() {
  const [lists, setLists] = useState([]);
  const handleAddTask = (task) => {
    setLists([...lists,task]);
  }

  const handleDeleteTask = (index) => {
      // alert(index);
      Alert.alert(
        "Cảnh báo!!",
        `Bạn có chắc chắn muốn công việc số ${index + 1} xóa không?`,
        [
         
          { text: "OK", onPress: () => 
            {
               let taskTempList = [...lists];
               taskTempList.splice(index, 1);
               setLists(taskTempList);
            },
        
          },
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel"
          }
        ]
      );
  }

  return (
    <SafeAreaView style={styles.container}>
      <AddTodoInPut onAddTask={handleAddTask}></AddTodoInPut>
      <View style={{flex: 2}}>
        <ScrollView>
        {
          lists.map(( item, index ) => {
            return  <FlatListDemo key={index} title={item} number={index}  onDeleteTask={() => handleDeleteTask(index)}></FlatListDemo>
          })
        }
        </ScrollView>
    
      </View>
      {/* <FlatListDemo taskLists={lists}  key={index} onDeleteTask={handleDeleteTask}>
      </FlatListDemo> */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
