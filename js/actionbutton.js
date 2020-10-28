class ActionButton{
    constructor()
    {
        this.ip = "http://192.168.1.110/Artway/";
        this.interest = {
            "Adventure":{
                "1":"Hiking",
                "2":"Biking",
                "3":"Diving / Scuba",
                "4":"Backpacking",
                "5":"Kayaking"
            },
            "Shopping":{
                "1":"Market",
                "2":"Vintage / Second",
                "3":"Brand Name",
                "4":"Plants",
                "5":"House Ware"
            },
            "Party & Night Life":{
                "1":"Night Club / Pub",
                "2":"Bar",
                "3":"Show",
                "4":"Live Music",
                "5":"Night Market"
            },
            "Foodle":{
                "1":"Korean",
                "2":"Japan",
                "3":"Street Food",
                "4":"Dessert",
                "5":"Buffet",
                "6":"Thai"
            },
            "Art & Culture":{
                "1":"Museum",
                "2":"Music",
                "3":"Gallery",
                "4":"Temple",
                "5":"ศิลปะพื้นบ้าน"
            },
            "Festival":{
                "1":"Music Festival",
                "2":"Art Festival",
                "3":"Animal Festival",
                "4":"Color Festival"
            },
            "Experience":{
                "1":"Cooking",
                "2":"Wine / Beer Tasting",
                "3":"Gardening",
                "4":"ปลูก / เกี่ยวข้าว",
                "5":"ขี่ช้าง",
                "6":"เที่ยวฟาร์มแกะ /ม้า /สัตว์ต่างๆ"
            },
            "Nature":{
                "1":"Mountain",
                "2":"Beach",
                "3":"Wood",
                "4":"แม่น้ำ",
                "5":"Island",
                "6":"ป่าชายแลน"
            }
        
        
        };
        this.displaytitle = false;
        this.countselect = 0;
    }

    switchLoginPage()
    {
        window.location.replace(this.ip+"page/interest.html");
    }

    switchInterestPage()
    {
        window.location.replace(this.ip+"page/interest.html");
    }



    displaySubList(list){
        console.log(list)
        
        $.each(this.interest, function(index, value){ 
            var title = list;
            var checkcutspace = false;
            var count = 0;
            if(list == index){
                
          
            $.each(value, function(index, value){ 
                
                if(checkcutspace == false){
                    title = title.split(' ');
                    checkcutspace = true;
                    
                }
                count++;
                var t = title[0]+count;
                // for(let i=0; i<=1; i++) {
                    console.log(document.getElementById(`${t}`).style.display);
                    if(document.getElementById(`${t}`).style.display == "none"){
                        document.getElementById(`${t}`).setAttribute('style', 'display:inherit !important');
                        document.getElementById(`${list}icon`).innerHTML="close";
                    }else{
                        document.getElementById(`${list}icon`).innerHTML="add";
                        document.getElementById(`${t}`).setAttribute('style', 'display:none !important');
                    }
                      
                // }
                
            });
        }
        });
       
    }

    selectSubList(list){
        this.countselect ++;
        console.log(this.countselect);
    }
}

