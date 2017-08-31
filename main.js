var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var arrayclients = JSON.parse(this.responseText);

        function affiche() {
            var x = "";
            for (var i in arrayclients.clients) {
                x += "<tr><td>" + arrayclients.clients[i].nom + "</td>" + "<td>" + arrayclients.clients[i].prenom + "</td>" + "<td>" + arrayclients.clients[i].age + "</td></tr>";
            }

            document.getElementById('affichage').innerHTML = x;
        }

        function tri(a, b) {
            var select = document.getElementById("list-clients").value.toLowerCase();

            if (a[select] < b[select]) {
                return -1;
            } else {
                return 1;
            }
        }

        document.getElementById("list-clients").addEventListener("change", function() {
            arrayclients.clients.sort(tri);
            affiche();
        });
        affiche();


    }
};
xhttp.open("GET", "main.json", true);
xhttp.send();