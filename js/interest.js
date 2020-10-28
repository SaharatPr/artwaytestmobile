
class Interest{
    constructor(){
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
         this.displayList();
 
    }

    displayList(){
        if(this.displaytitle == false){
            $.each(this.interest, function(index, value){ 
                var title = index;
                var checkcutspace = false;
                var html = '';				
                    html+=`<li class="list-group-item d-flex justify-content-between align-items-right"  id="item" onclick="displaySubList('${index}')">
                    ${index}
                        <span id="iconadd">
                        <span class="badge badge-secondary badge-pill" id="${index}count" style="display:none">
                            0
                        </span>
                        <i class="material-icons" style="font-size:1iconadd.4em" id="${index}icon">
                            add
                        </i>
                        </span>
                    </li>`;
                    var count = 0;
                    $.each(value, function(index, value){ 
                        
                        if(checkcutspace == false){
                            title = title.split(' ');
                            checkcutspace = true;
                        }
                        count++;
                        var t = title[0]+count;
                  
                        html+=`<li class="list-group-item d-flex justify-content-between align-items-right" id="${t}" onclick="selectSubList('${t}')">
                        ${value}
                        <span id="iconadd">
                        <span class="badge badge-secondary badge-pill" id="${t}sub" style="display:none">
                            0
                        </span>
                        <i class="material-icons" style="font-size:1iconadd.4em" id="${t}subicon">
                        add
                        </i>
                        </span>
                        </li>`;
                    });
                    checkcutspace = false;
                    // html+='<span class="badge badge-primary badge-pill">'+value+'</span>';
                    // html+='<span class="name-span">'+value+'</span>';
                    $("#XXX").append(html);
                  
                });
                this.displaytitle = true
        }

    }



}
var interest = new Interest();
this.countS1 = 0;
this.countS2 = 0;
this.countS3 = 0;
this.countS4 = 0;
this.countS5 = 0;
this.countS6 = 0;
this.countS7 = 0;
this.countS8 = 0;
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

var adventure = [], Shopping=[],Party=[],Foodle=[], Art =[], Festival=[] , Experience=[], Nature=[]   ;
function selectSubList(list){
    console.log(list);

    if(document.getElementById(`${list}subicon`).innerHTML == "close")
    {
        document.getElementById(`${list}sub`).setAttribute('style', 'display:none !important');
        document.getElementById(`${list}subicon`).innerHTML= "add";
        if(list.replace(/[0-9]/g, '') == "Adventure")
        {
            this.countS1 --;
            document.getElementById(`Adventurecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Adventurecount`).innerHTML = this.countS1;
            if(this.countS1 == 0){
                document.getElementById(`Adventurecount`).setAttribute('style', 'display:none !important');
            }
        }
        
        else if(list.replace(/[0-9]/g, '') == "Shopping")
        {
            this.countS2 --;
            document.getElementById(`Shoppingcount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Shoppingcount`).innerHTML = this.countS2;
            if(this.countS2 == 0){
                document.getElementById(`Shoppingcount`).setAttribute('style', 'display:none !important');
            }
        }

        else if(list.replace(/[0-9]/g, '') == "Party")
        {
            this.countS3 --;
            document.getElementById(`Party & Night Lifecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Party & Night Lifecount`).innerHTML = this.countS3;
            if(this.countS3 == 0){
                document.getElementById(`Party & Night Lifecount`).setAttribute('style', 'display:none !important');
            }
        }

        else if(list.replace(/[0-9]/g, '') == "Foodle")
        {
            this.countS4 --;
            document.getElementById(`Foodlecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Foodlecount`).innerHTML = this.countS4;
            if(this.countS4 == 0){
                document.getElementById(`Foodlecount`).setAttribute('style', 'display:none !important');
            }
        }

        else if(list.replace(/[0-9]/g, '') == "Art")
        {
            this.countS5 --;
            document.getElementById(`Art & Culturecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Art & Culturecount`).innerHTML = this.countS5;
            if(this.countS5 == 0){
                document.getElementById(`Art & Culturecount`).setAttribute('style', 'display:none !important');
            }
        }

        else if(list.replace(/[0-9]/g, '') == "Festival")
        {
            this.countS6 --;
            document.getElementById(`Festivalcount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Festivalcount`).innerHTML = this.countS6;
            if(this.countS6 == 0){
                document.getElementById(`AFestivalcount`).setAttribute('style', 'display:none !important');
            }
        }

        else if(list.replace(/[0-9]/g, '') == "Experience")
        {
            this.countS7 --;
            document.getElementById(`Experiencecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Experiencecount`).innerHTML = this.countS7;
            if(this.countS7 == 0){
                document.getElementById(`Experiencecount`).setAttribute('style', 'display:none !important');
            }
        }

        else if(list.replace(/[0-9]/g, '') == "Nature")
        {
            this.countS8 --;
            document.getElementById(`Naturecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Naturecount`).innerHTML = this.countS8;
            if(this.countS8 == 0){
                document.getElementById(`Naturecount`).setAttribute('style', 'display:none !important');
            }
        }

    }else{
        document.getElementById(`${list}sub`).setAttribute('style', 'display:inline !important');
        document.getElementById(`${list}subicon`).innerHTML= "close";
        document.getElementById(`${list}sub`).innerHTML = "1";

        if(list.replace(/[0-9]/g, '') == "Adventure")
        {
            this.countS1 ++;
            document.getElementById(`Adventurecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Adventurecount`).innerHTML = this.countS1;
        }
        
        else if(list.replace(/[0-9]/g, '') == "Shopping"){
            this.countS2 ++;
            document.getElementById(`Shoppingcount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Shoppingcount`).innerHTML = this.countS2;
        }

        else if(list.replace(/[0-9]/g, '') == "Party"){
            this.countS3 ++;
            document.getElementById(`Party & Night Lifecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Party & Night Lifecount`).innerHTML = this.countS3;
        }

        else if(list.replace(/[0-9]/g, '') == "Foodle"){
            this.countS4 ++;
            document.getElementById(`Foodlecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Foodlecount`).innerHTML = this.countS4;
        }

        else if(list.replace(/[0-9]/g, '') == "Art"){
            this.countS5 ++;
            document.getElementById(`Art & Culturecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Art & Culturecount`).innerHTML = this.countS5;
        }

        else if(list.replace(/[0-9]/g, '') == "Festival"){
            this.countS6 ++;
            document.getElementById(`Festivalcount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Festivalcount`).innerHTML = this.countS6;
        }

        else if(list.replace(/[0-9]/g, '') == "Experience"){
            this.countS7 ++;
            document.getElementById(`Experiencecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Experiencecount`).innerHTML = this.countS7;
        }

        else if(list.replace(/[0-9]/g, '') == "Nature"){
            this.countS8++;
            document.getElementById(`Naturecount`).setAttribute('style', 'display:inline !important');
            document.getElementById(`Naturecount`).innerHTML = this.countS8;
        }

    }
   
    // setCountSelect(list);
}

function displaySubList(list){

    
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
                
                  
                if(document.getElementById(`${t}`).style.display != "inherit"){
                    console.log("SDDW");
                    document.getElementById(`${t}`).setAttribute('style', 'display:inherit !important');
                    document.getElementById(`${list}icon`).innerHTML="close";
                }else{
                    console.log("XXXX");
                    document.getElementById(`${list}icon`).innerHTML="add";
                    document.getElementById(`${t}`).setAttribute('style', 'display:none !important');
                }
                
                
                   
                
                  
            // }
            
        });
    }
    });
   
}