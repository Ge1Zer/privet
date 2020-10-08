// import { action, observable } from "mobx";

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

class Room {
    name = "Room"
    admin
    constructor(props : any){
        this.admin = props
    }
}
export default Room