import React from "react"
import Navbar from "./Navbar"
import Body from "./Body"
import Footer from "./Footer"
import db from "./firebase"
import { useEffect } from "react"   
import { onSnapshot, collection } from "firebase/firestore"


export default function App() {
    useEffect(() => {
        onSnapshot(collection(db, "testQuestion"), (snapshot) => {
            console.log(snapshot.docs)
        });
    })

    return(
        <div>
            <Navbar />
            <Body />
            <Footer />
        </div>
    )
    

}