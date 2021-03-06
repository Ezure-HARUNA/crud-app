import React from "react"
import Form from "./Form"
import List from "./List"


const App = () => {
    const[usersInfo, setUsersInfo] =React.useState([
        {
            name:"山田太郎", age:20,
        },
        {
             name:"佐藤花子", age:30
        }
])
    

    return (
        <>
            <h2>ユーザー情報管理用クラウドアプリ</h2>
            <Form usersInfo={usersInfo} setUsersInfo={setUsersInfo}></Form>
            <List 
                usersInfo={usersInfo} 
                setUsersInfo={setUsersInfo} 
            ></List> 
            {/* 後で編集追加 　changeText={changeText}*/}
        </>
    )
}

export default App