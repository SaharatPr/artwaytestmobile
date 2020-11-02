class Index{
    constructor()
    {
        this.fullScreen();
       this.switchPage();
        
    }

      fullScreen() {
        document.addEventListener('click',()=>{
            // document.documentElement.requestFullscreen().catch((e)=>{
            //     console.log(e);
            // });
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

        // window.location.replace("https://dodgebox.fit/m.artway/page/login.html");
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}

var index = new Index();