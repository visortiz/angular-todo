angular.module(APP_NAME)
  .run(listMockRun);

/**
 * @ngInject
 */
function listMockRun($httpBackend) {
  // $httpBackend.whenGET(/list/).passThrough();
  $httpBackend.whenGET(/list/).respond(listRespond);

  //  ////////////////////

  function listRespond(method, url) {
    var res = [
      {
        id: 1,
        title: 'Praesent posuere ullamcorper orci',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod fringilla bibendum. Etiam pulvinar ac sem sit amet sollicitudin. Phasellus eget urna ac arcu imperdiet mollis eu in ante. Fusce id nulla at nisi vehicula accumsan. Nam luctus vitae libero sed pellentesque. Nulla facilisi. Sed eget iaculis ligula, a dictum leo. Nam at magna iaculis, ornare leo in, semper purus. Nam id purus vel enim tincidunt auctor. Fusce felis sapien, hendrerit nec bibendum a, egestas ut nisi.'
      },
      {
        id: 2,
        title: 'Ut in ex ut metus lobortis semper',
        text: 'Praesent lobortis neque at lectus egestas blandit. Vestibulum ac consectetur purus. Mauris venenatis mi vitae nisl rhoncus, at laoreet nulla finibus. Nullam vitae mi leo. Fusce sit amet finibus dui. Integer vitae quam a massa facilisis aliquam. Cras dapibus libero in hendrerit condimentum. Etiam lobortis tincidunt lorem, eu porta sapien.'
      },
      {
        id: 3,
        title: 'Quisque et mollis quam',
        text: 'Sed turpis nibh, ultricies in purus eget, commodo tincidunt nisl. Suspendisse imperdiet ultrices nunc at mattis. Maecenas facilisis elit sit amet massa pellentesque, nec porta arcu rhoncus. Morbi laoreet odio vitae odio semper, vulputate auctor mi accumsan. Quisque consequat dolor sodales sapien varius pretium. In ante ipsum, aliquam et purus vitae, cursus suscipit nisi. Aliquam non elit varius, maximus lacus sed, pretium orci. Nullam porttitor dictum pulvinar. Quisque laoreet turpis eget sapien semper, sit amet bibendum augue lacinia. Aenean eu massa eget sapien ullamcorper venenatis non non odio. Aenean sed fringilla elit, at lobortis mauris. Maecenas quis ipsum finibus, posuere nisl id, faucibus eros. Donec nisi justo, porta in sapien nec, convallis venenatis tortor. In eu nisl sollicitudin, iaculis ipsum vitae, posuere metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ac augue dignissim, aliquet metus ac, finibus dui.'
      },
      {
        id: 4,
        title: 'Aenean quis arcu tincidunt',
        text: 'Quisque feugiat ligula cursus neque elementum hendrerit id eu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium augue at ex bibendum hendrerit. Sed tempus vitae nunc nec bibendum. Quisque auctor diam vel libero semper fermentum. Nunc faucibus pulvinar magna id efficitur. Duis nec mauris non ex tempus dapibus.'
      },
      {
        id: 5,
        title: 'Curabitur fringilla eros ut mauris',
        text: 'Integer ut magna at mi commodo suscipit vitae in lectus. Ut vulputate, neque sed ornare porta, metus turpis efficitur mauris, vitae tristique urna magna et turpis. Duis mollis, dui eu ultricies egestas, arcu ipsum convallis orci, sed tristique dolor massa tempus nisl. Fusce a imperdiet velit. Donec viverra vitae urna non porta. Quisque porta dui eget urna venenatis pellentesque. Maecenas neque eros, facilisis facilisis dignissim mattis, dignissim vitae sapien. Vivamus faucibus mauris quis risus iaculis, quis vehicula dui placerat. Sed in ex vel nibh viverra aliquet. Vivamus et ligula posuere, placerat tortor eget, posuere odio. Suspendisse mollis velit eget justo dignissim, vel maximus massa molestie. Nulla facilisi. Cras est nibh, facilisis in leo non, ultrices pellentesque enim. Aenean finibus mauris pellentesque molestie elementum. Duis vel quam a lectus accumsan finibus. Aenean eleifend quis ante vel efficitur.'
      }
    ];
    console.log(method, url, res);
    return [200, res, {}];
  }
}
