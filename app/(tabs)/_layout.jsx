import { Tabs } from "expo-router";
import { View, Image, Text } from "react-native";
import icons from "../../constants/icons";
import Container from "../../components/Container";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center">
      <Image source={icon} resizeMode="contain" className={`h-6`} />
      <Text className={`${focused ? "font-bold" : ""}  text-sm text-white`}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveBackgroundColor: "grey",
        tabBarInactiveTintColor: "#0189BE",
        tabBarStyle: {
          backgroundColor: "#0189BE",
          borderTopColor: "transparent",
          height: 80,
        },
      }}
    >
      <Tabs.Screen
        name="browse"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.browse}
              color={color}
              name="Browse"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="foryou"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.foryou}
              color={color}
              name="For You"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="sell"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.sell}
              color={color}
              name="Sell"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.donate}
              color={color}
              name="Donate"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.me}
              color={color}
              name="Me"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
