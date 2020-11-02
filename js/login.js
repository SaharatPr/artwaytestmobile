//  import Actionbutton from "./actionbutton";

class Login{
    constructor(){
        this.fullScreen();
    }
    loginSocial(){
        console.log("XXX");
        window.location.replace("http://192.168.1.110/Artway/page/interest.html");
    }

    fullScreen() {
        document.addEventListener('click',()=>{
            // document.documentElement.requestFullscreen().catch((e)=>{
            //     console.log(e);
            // });
        });
    }
}

var index = new Login();