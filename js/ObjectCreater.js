function User(singleUser){
	this.name=singleUser.name;
	this.pwd=singleUser.pwd;
	this.belongOrg=singleUser.belongOrg;
	this.space=singleUser.space;
	this.authority=singleUser.authority;
}


function Organization(singleOrg){
	this.name=singleOrg.name;
	this.domain=singleOrg.domain;
	this.memery=singleOrg.memery;

}


function Domain(singleDomain){
	this.name=singleDomain.name;
	this.belongOrg=singleDomain.belongOrg;	
	this.ownSpace=[];
}

function Space(singleSpace){
	this.name=singleSpace.name;
	this.belongDomain=singleSpace.belongDomain;
}