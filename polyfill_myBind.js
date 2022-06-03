const userInfo = {
firstName: "Raj",
middleName: "Vikram",
lastName: "Singh"
}

function getUnserInfo(text){
	console.log(text, this.firstName + " " +  this.middleName + " " + this.lastName)
}

getUnserInfo(); //undefined

const getUserInfoWithContext = getUnserInfo.bind(userInfo, "My Name is");

getUserInfoWithContext(); // Raj Vikram Singh


/* Bind Polyfill */

Function.prototype.myBind = function(context, ...args) {
		//this here will be the function that will invoke myBind
    return ()=> { // use arrow function to preserve this
    		this.call(context, ...args);
    }
}


const getUserInfoWithMyBind = getUnserInfo.myBind(userInfo, "full name");

getUserInfoWithMyBind(); // full name, Raj Vikram Singh
