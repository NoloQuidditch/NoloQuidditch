function caricaPiazze(){
  myXMLHTTPRequest = new XMLHttpRequest();
  
  myXMLHTTPRequest.onreadystatechange = aggiornaPiazze;

  myXMLHTTPRequest.open("GET", "/piazze/", true);
  
  myXMLHTTPRequest.send(null);
}


function aggiornaPiazze() {
if (myXMLHTTPRequest.readyState == 4) {
  if (myXMLHTTPRequest.status == 200) {
    
    data = JSON.parse(myXMLHTTPRequest.responseText);
  
    var piazzeContent = "";
    for (var i = 0; i < data.length; i++){
      piazzeContent += `
      <div>
          <input type="radio" name="piazza" value="${data[i].value}">
          <label for="${data[i].value}">${data[i].nome}, ${data[i].citta}</label>
      </div>`;
      } 

    document.getElementById('opzioniPiazze').innerHTML = piazzeContent;

    }
  }
}


  





