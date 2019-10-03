
        var num = 0;
        var myStorage = window.localStorage;

        function showHideToggle() {
     var x = document.getElementById("addPanel");
     if (x.style.display === "none") {
       x.style.display = "block";
      } else {
        x.style.display = "none";

      }
      
    }   

    function searchClicked() {
        var rows = document.getElementsByTagName("TR");
        var filterText = document.getElementById("search").value.toLowerCase();
        var i;
        for(i = 0; i < rows.length; i++){
            var titleText = rows[i].querySelector("strong").innerText.toLowerCase();
            if(!titleText.includes(filterText)){
                rows[i].style.display = "none";
            }
        }
    }


    function load(){

        var items = myStorage.length;
        console.log(myStorage);

        var i;
        for(i = 0; i < items/3; i++){
            addArtistRow(myStorage.getItem(myStorage.key(i*3)), myStorage.getItem(myStorage.key(i*3+1)), myStorage.getItem(myStorage.key(i*3+2)));

        }
     

    }

    function dumpArray(item){
        console.log(item);
    }



    function clearValues() {

         document.getElementById("name").value = "";
        document.getElementById("description").value = "";
         document.getElementById("image").value = "";

    }

    function addArtist() {
        var name = document.getElementById("name").value;
        var desc = document.getElementById("description").value;
        var image = document.getElementById("image").value;

        showHideToggle();
        clearValues();

        //add it to local storage 

        myStorage.setItem("n"+num, name);
        myStorage.setItem("d"+num, desc);
        myStorage.setItem("i"+num, image);

        //add it physically, increment it by 1
        addArtistRow(name, desc, image);


    }

    function addArtistRow(name, desc, image){
        var table = document.getElementById("artists");

        var tr = document.createElement("tr");
        tr.setAttribute("id", "tr"+num);
        var td1 = document.createElement("td");
        var img = document.createElement("img");
        console.log(image);
        img.setAttribute("src", image);
        td1.appendChild(img);
        tr.appendChild(td1);


        var td2 = document.createElement("td");
        td2.setAttribute("class", "wide");

        var title = document.createElement("strong");
        title.innerText = name;

        td2.appendChild(title);
        td2.appendChild(document.createElement("br"));
        td2.appendChild(document.createTextNode(desc));



        var del = document.createElement("input");
        del.setAttribute("value", "Delete");
        del.setAttribute("onclick", "deleteRow(\"tr" + num +"\")");
        del.setAttribute("class","delete");
        del.setAttribute("type", "button");
        td2.appendChild(del);

        tr.appendChild(td2);
        table.appendChild(tr);

        num++;
    }

    function deleteRow(id){
        document.getElementById(id).remove();
        var myStorage = window.localStorage;
        var num = parseInt(id.substring(2,3), 10);
        myStorage.removeItem("n"+num);
        myStorage.removeItem("d"+num);
        myStorage.removeItem("i"+num);
    }


