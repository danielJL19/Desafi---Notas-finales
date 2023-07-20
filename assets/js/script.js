//variables
nombre = document.getElementById('nombre')
carrera = document.getElementById('apellido')
const tbody = document.getElementById('tbody')

nombre1 = prompt('Tú nombre')
carrera1 = prompt('Tú carrera')

nombre.value=nombre1
apellido.value=carrera1

html1= parseFloat(prompt('Ingrese nota1[HTML]'))
html2= parseFloat(prompt('Ingrese nota2[HTML]'))
html3= parseFloat(prompt('Ingrese nota3[HTML]'))
promedio= (html1 + html2 + html3)/3

css1= parseFloat(prompt('Ingrese nota1[CSS]'))
css2= parseFloat(prompt('Ingrese nota2[CSS]'))
css3= parseFloat(prompt('Ingrese nota3[CSS]'))
promedio1= (css1 + css2 + css3)/3

js1= parseFloat(prompt('Ingrese nota1[JSS]'))
js2= parseFloat(prompt('Ingrese nota2[JSS]'))
js3= parseFloat(prompt('Ingrese nota3[JSS]'))
promedio2= (js1 + js2 + js3)/3

tbody.innerHTML=
`
<tr>
    <th scope="row">HTML</th>
    <td>${html1}</td>
    <td>${html2}</td>
    <td>${html3}</td>
    <td>${promedio}</td>
</tr>
<tr>
    <th scope="row">CSS</th>
    <td>${css1}</td>
    <td>${css2}</td>
    <td>${css3}</td>
    <td>${promedio1}</td>
</tr>
<tr>
    <th scope="row">JavaScript</th>
    <td>${js1}</td>
    <td>${js2}</td>
    <td>${js3}</td>
    <td>${promedio2}</td>
</tr>
`



