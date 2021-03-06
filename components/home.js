import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Caption, List, Snackbar } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadNotes();

    const subscribe = navigation.addListener("focus", () => {
      loadNotes();
    });

    return subscribe;
  }, []);

  function loadNotes() {
    axios
      .get("http://10.0.0.238:1337/api/notes/")
      .then(({ data }) => {
        setNotes(data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setError("An error occurred, please try again later.");
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      {!loading && !notes.length && (
        <Caption style={{ textAlign: "center", marginTop: 10, color: "white" }}>
          You have no notes
        </Caption>
      )}
      <FlatList
        style={styles.list}
        data={notes}
        renderItem={({ item }) => (
          <List.Item
            styles={styles.listitem}
            key={item.id}
            title={item.attributes.title}
            description={item.attributes.date}
            onPress={() =>
              navigation.navigate("Editor", {
                note: item,
              })
            }
          />
        )}
        refreshing={loading}
        onRefresh={loadNotes}
      />
      <Snackbar visible={error.length > 0} onDismiss={() => setError("")}>
        {error}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9e9e9e",
    color: "white",
  },
  list: {
    width: "100%",
    height: "100%",
  },
  listitem: {
    backgroundColor: "red",
  },
});
