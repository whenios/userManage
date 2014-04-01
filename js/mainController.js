var app = angular.module('MyApp', ['ngRoute']);

function routeConfig($routeProvider){
    $routeProvider.
    when('/userManage', {
        controller: 'userController',
        templateUrl: 'doc/userManage.html'
    }).
    when('/dominManage', {
        controller: 'domainController',
        templateUrl: 'doc/domain.html'
    }).
	when('/orgManage',{
		controller: 'createOrgController',
        templateUrl: 'doc/orgManage.html'
	}). 
	when('/',{
		controller: 'mainController',
        templateUrl: 'doc/static.html'
	}). 
        otherwise({
            redirectTo: '/'
        });
    };

app.config(routeConfig);


app.controller('mainController',function ($scope){
	$scope.users;
	$scope.organazitions=[];
	$scope.spaces=[];
	$scope.domains=[];
		$scope.hideCreat=true;
})

app.controller('userController',function($scope,$http){


	$http.get('users.json').success(function(data){
		$scope.users=data;
	});
	$scope.indexUser;
	$scope.update=function(singleUser){
		$scope.users.push(new User(singleUser));
		$scope.hideCreat=true;
		$scope.singleUser='';
		$http.post('user1.json',$scope.users).success(function(data){
		alert("greet");
	});
	}

	$scope.showDetail=function(index){
		$scope.indexUser=index;
	}

	$scope.removeUser=function(index){
		$scope.users.splice(index,1);
		$scope.indexUser=null;
	}
})
app.controller('domainController',function ($scope){
	$scope.domains=[];
	$scope.add=function(singleDomain){
		$scope.domains.push(new Domain(singleDomain));
		$scope.singleDomain='';
	}
	$scope.delete=function(singleDomain){
		$scope.domains.pop();
	}	
}
)

app.controller('createOrgController',function($scope){
	 $scope.organizations=[];
    $scope.hideChange=true;
    $scope.hideCreate=true;
    $scope.tempIndex=0;
    $scope.createOrg=function(user){
        var tempOrg=new Organization(user);
        $scope.organizations.push(tempOrg);
        $scope.hideCreate=true;
    };
    $scope.changeMem=function(user){
        var tempMem=new Organization(user);
        $scope.organizations[$scope.tempIndex].memery=tempMem.memery;
        $scope.tempIndex=0;
        $scope.hideChange=true;
    };
    $scope.showChange=function(index){
        $scope.hideChange=false;
        $scope.tempIndex=index;
    }
})
