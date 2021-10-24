/* Create an object {   Freshworks: 2,   Amazon: 2,   Google: 2 }  that will list all the companies with the unique employee count */

const empData = [{   company: "Freshworks",   id: 1 }, {   company: "Amazon",   id: 1 }, {   company: "Google",   id: 1 }, {   company: "Freshworks",   id: 2 }, {   company: "Freshworks",   id: 1 }, {   company: "Amazon",   id: 2 }, {   company: "Google",   id: 3 }]; 


const uniqueEmpCount = (empData)=> {  
  
  const uniqueDataList =[];
//   This loop removes duplicate objects from array list
  empData.forEach(item=>{
    let stringItem = JSON.stringify(item);
    let stringUniqueDataList = JSON.stringify(uniqueDataList);
    if(!(stringUniqueDataList.includes(stringItem) )){
      uniqueDataList.push(item);         
    }   
  })
  
  let result = {};
  uniqueDataList.forEach(item => {
  	if(result[item.company]){
    	result[item.company] +=1 
    }else {
    result[item.company] = 1
    }
  })
  return result;
}


console.log(uniqueEmpCount(empData));
