import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useState,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

type Book ={
    id : string,
    name : string,
    price : string
}

export default function Add(){
    const [bookName, setBookName] = useState("")
    const [bookPrice, setBookPrice] = useState("")
    const [allBook,setAllBook] =useState<Book[]>([])

    useEffect( () => {
        loadBook()
    }, [allBook])

    async function loadBook(){
        const data = await AsyncStorage.getItem("book")
        if(data !== null){
            setAllBook(JSON.parse(data))
        }    
    }

    async function addBook(){
        const book ={
            id : Date.now().toString(),
            name : bookName,
            price : bookPrice
        }

        console.log("หนังสือที่จะบันทึก => " + book)

        const newBook = [...allBook, book]
        await AsyncStorage.setItem("book", JSON.stringify(newBook))
        setAllBook(newBook)

        setBookName("")
        setBookPrice("")
    }

    return(
        
        <View style={myStyle.container}>
            <View style={{ borderWidth: 1, borderColor: 'gray', padding: 10,borderRadius: 20,gap: 10,alignItems:"center",backgroundColor: 'white' }}>
                <Text style={{alignItems:"center"}}>ชื่อหนังสือ</Text>
                <TextInput
                    value={bookName}
                    onChangeText={setBookName}
                    style={myStyle.input}
                />

                <Text>ราคาหนังสือ</Text>
                <TextInput
                    value={bookPrice}
                    onChangeText={setBookPrice}
                    style={myStyle.input}
                />
            
                <Button title="บันทึก" onPress={addBook}  />
            </View>
        </View>
    )
}

const myStyle = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center', // กลางแนวตั้ง
    alignItems: 'center', // กลางแนวนอน
    backgroundColor: ''
  },
    input : {
        width: 250,
        borderWidth: 1,     
        borderColor: '#000',   
        borderRadius: 5,       
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white'
        
    }
})