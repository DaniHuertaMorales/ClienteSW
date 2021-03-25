var mensaje = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/%22%3E%27+
'<Body>'+
    '<SumarRequest xmlns="http://www.example.org/calculadora%22%3E%27+
        '<a>1</a>'+
        '<b>3</b>'+
    '</SumarRequest>'+
'</Body>'+
'</Envelope>'

function soap(){
    axios.post('http://localhost:8080/ws/calculadora', mensaje)
    .then(response => console.lenght)
}