function data()
{
    var s ='';
    var i;
    var j = 1;
     fetch('https://covid-api.mmediagroup.fr/v1/cases')
	.then(response => response.json())
    .then(response=>{
        s+="<table class='table table-striped table-responsive table-boarded'><thead class='thead-dark'><tr><th>S.No</th><th>Country</th><th>Confirmed</th><th>Deaths</th><th>Recovered</th><th>Updated on</th></tr></thead><tbody>";
        for(let i in response){
            s+"<tr>";
            s+="<td>"+j+".</td>";
            s+="<td>"+response[i].All.country+"</td>";
            s+="<td>"+(response[i].All.confirmed)+"</td>";
            s+="<td>"+response[i].All.deaths+"</td>";
            s+="<td>"+response[i].All.recovered+"</td>";
            s+="<td>"+response[i].All.updated+"</td>";
            s+="</tr>";
            j++;
        }
        s+"</tbody></table>";
        document.getElementById("data").innerHTML = s;
        // console.log(response['Afghanistan'].All.country)
    })
	.catch(err => console.error(err));
    
}

data();