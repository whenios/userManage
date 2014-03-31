function mainController($scope){
	$scope.users=[];
	$scope.organazitions=[];
	$scope.spaces=[];
	$scope.domains=[];

	$scope.update=function(singleUser){
		$scope.users.push(new User(singleUser));
	}
}