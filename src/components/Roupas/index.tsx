import React from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";
import { roupas } from "../../utils/roupas";
import Social from "../Social";

const Roupas: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={roupas}
        ListHeaderComponent={() => <Social style={{
            marginTop: 20
        }} />}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: 1,
                width: "100%",
                borderColor: "#ccc",
                borderTopWidth: 1,
                borderStyle: "dashed",
                marginVertical: 10,
              }}
            />
          );
        }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{
                uri: item.img,
              }}
              width={90}
              height={130}
              style={{
                objectFit: "cover",
                borderRadius: 5,
              }}
            />
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>{item.descricao}</Text>
              <Text style={styles.RefText}>Ref: {item.ref}</Text>
              <View style={styles.priceContainer}>
                <Text
                  style={
                    item.precoPromocional ? styles.price : styles.promoPrice
                  }
                >
                  {item.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>
                {item.precoPromocional && (
                  <Text style={styles.promoPrice}>
                    {item.precoPromocional.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Text>
                )}
              </View>

              {item.freteGratis && (
                <Text style={{ color: "green" }}>Frete Grátis</Text>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "center",
    gap: 5,
  },

  descriptionText: {
    fontSize: 16,
    color: "#000",
  },
  RefText: {
    fontSize: 12,
  },
  priceContainer: {
    flexDirection: "row",
    gap: 5,
  },
  promoPrice: {
    textDecorationStyle: "solid",
    fontWeight: "bold",
    color: "#000",
    fontSize: 20,
  },
  price: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#777",
    fontSize: 20,
  },
});

export default Roupas;
