let empl=[
    {'eid':101,'ename':'shyam','esal':45000},
    {'eid':102,'ename':'nandu','esal':55000},
    {'eid':103,'ename':'vishnu','esal':65000},
    {'eid':104,'ename':'harika','esal':75000},
    {'eid':105,'ename':'amar','esal':85000}
]
i=0;
while(i<=4){
    console.log('employee name',empl[i].ename);
    i=i+1
}
for(let emp of empl){
    console.log(empl.ename());
}
the code is good but giving an error.