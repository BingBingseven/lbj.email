angular.module("app.directives",[]).directive("emailReg",function(){
    return {
        restrict:"E",
        template:"<div class='col-sm-1'>邮箱格式错误</div>"
    }
});