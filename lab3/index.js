
        var num = 0;


        function showHideToggle() {
     var x = document.getElementById("addPanel");
     if (x.style.display === "none") {
       x.style.display = "block";
      } else {
        x.style.display = "none";

      }
      
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

        num++;
        tr.appendChild(td2);
        table.appendChild(tr);

       // title.

    }

    function deleteRow(id){
        document.getElementById(id).remove();
    }