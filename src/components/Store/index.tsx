import Admin from "./componentsStore/admin";
import Menu from "./componentsStore/menu";
import Profile from "./componentsStore/profile";
import Room from "./componentsStore/room";

let storeMobX : any;

let CreateStore = () =>{

    if (!storeMobX){
        let admin = new Admin();
        let menu = new Menu(admin)
        let profile = new Profile(admin)
        let room = new Room(admin)
    
        storeMobX = { admin,menu,profile,room }
    }
  
    return storeMobX
}
export default CreateStore;