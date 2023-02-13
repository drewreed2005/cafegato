fetch("http://localhost:5000/").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData);
    let tableData="";
    objectData.map((values)=>{
        tableData=`<h1>${values.name}</h1>`;
    });
    document.getElementById("table_bod").innerHTML=tableData;
})