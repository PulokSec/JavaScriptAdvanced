const students =[
    {id:14,name:"pulok"},
    {id:45,name:"rasel"},
    {id:4663,name:"dipjol"}
]
const names = students.map(s=> s.name);
const ids = students.map(s=>id);
const big = students.filter(s=>s.id>40);//output an array
const bigger = students.find(s=>s.id>40);//output one elements