function ordenar(array){
    var head
    var next
for (let i = 0; i < array.length; i++) {
     head=array[i] 
    for (let j = i+1; j < array.length; j++) {
         next=array[j]
        if(head<next){
            array[i]=next;
            array[j]=head
            head=next  
        }       
    }}
    return array
}


module.exports = ordenar