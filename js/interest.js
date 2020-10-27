
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
                    html+=`<li class="list-group-item d-flex justify-content-between align-items-right" id="item" onclick="new ActionButton().displaySubList('${index}')">${index}<span id="iconadd"><i class="material-icons" style="font-size:1iconadd.4em" id="icon">add</i></span>
                    </li>`;
                    $.each(value, function(index, value){ 
                        if(checkcutspace == false){
                            title = title.split(' ');
                            checkcutspace = true;
                        }
                        html+=`<li class="list-group-item d-flex justify-content-between align-items-right" id="${title[0]}" onclick="new ActionButton().displaySubList('${index}')">${value}<span id="iconadd"><i class="material-icons" style="font-size:1iconadd.4em" id="icon">add</i></span>
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

    displaySubList(list){
        console.log("XXXXX");
        console.log(list);
    }
}
var interest = new Interest();