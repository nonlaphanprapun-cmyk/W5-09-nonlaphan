import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function Layout(){
    return(
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title:"หน้าแรก",
                    tabBarIcon: () => (
                        <Ionicons name="home" size={20} color="pink" />
                    )
                }}
            />

            <Tabs.Screen
                name="add"
                options={{
                    title:"ใส่ข้อมูล",
                    tabBarIcon: () => (
                        <Ionicons name="key" size={20} color="yellow" />
                    )
                }}
            />
        </Tabs>
    )
}