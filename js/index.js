class Index{
    constructor()
    {
        this.fullScreen();
        this.switchPage();
        
    }

      fullScreen() {
        document.addEventListener('click',()=>{
            document.documentElement.requestFullscreen().catch((e)=>{
                console.log(e);
            });
        });
        // document.addEventListener('dblclick',()=>{
        //     document.documentElement.requestFullscreen().catch((e)=>{
        //         console.log(e);
        //     });
        // });
    }

   async switchPage()
    {
        await this.sleep(3000);

        window.location.replace("http://192.168.1.110/Artway/page/login.html");
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}

var index = new Index();