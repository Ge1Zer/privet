// import { action, observable } from "mobx";

import { observable } from "mobx"

// interface InterAdminType{
//     readonly id: number
//     name : string
//     icon : string

// }
// class AdminStore implements InterAdminType {
//    @observable id = 0
//    @observable name=''
//    @observable icon=''

//    @action function ActSetAdmin ():InterAdminType{

//    }
class Admin {
    @observable name = "Admin"
}
export default Admin
