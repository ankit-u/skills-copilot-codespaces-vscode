function skillsMember()
{
    return {
       restrict: 'E',
       templateUrl: 'views/skills-member.html',
       controller: 'SkillsMemberController',
         controllerAs: 'skillsMemberCtrl',
            bindToController: true,
         scope: {
            member: '='
         }
    };
}
