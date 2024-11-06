import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
class Lista extends React.Component {
  state = {
    data: [
      { id: "00", name: "Encanador" },
      { id: "01", name: "Eletrecista" },
      { id: "02", name: "Faxineira" },
      { id: "03", name: "Pedreiro" },
      { id: "04", name: "Pintor" },
      { id: "01", name: "Eletrecista" },
      { id: "02", name: "Faxineira" },
      { id: "03", name: "Pedreiro" },
      { id: "04", name: "Pintor" },
      { id: "01", name: "Eletrecista" },
      { id: "02", name: "Faxineira" },
      { id: "03", name: "Pedreiro" },
      { id: "04", name: "Pintor" },
      { id: "01", name: "Eletrecista" },
      { id: "02", name: "Faxineira" },
      { id: "03", name: "Pedreiro" },
      { id: "04", name: "Pintor" },
    ]
  };
  render() {
    function createRows(data, columns) {
        const rows = Math.floor(data.length / columns); // [A]
        let lastRowElements = data.length - rows * columns; // [B]
        while (lastRowElements !== columns) { // [C]
          data.push({ // [D]
            id: `empty-${lastRowElements}`,
            name: `empty-${lastRowElements}`,
            empty: true
          });
          lastRowElements += 1; // [E]
        }

        
        return data; // [F]
      }

        const columns = 3;
    return (
      <SafeAreaView>
        <FlatList
           data={createRows(this.state.data, columns)}
          keyExtractor={item => item.id}
          numColumns={columns}
          renderItem={({ item }) => {
            if (item.empty) {
              return <View style={[styles.item, styles.itemEmpty]} />;
            }
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#adadad",
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flexBasis: 0,
  },
  text: {
    color: "#333333",
    fontWeight:'bold'
  },
  itemEmpty: {
    backgroundColor: "transparent"
  },
});
export default Lista;