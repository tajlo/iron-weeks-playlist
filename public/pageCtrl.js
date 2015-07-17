angular.module("pageCtrl", [])
.controller("PageController", function($scope){

  $scope.$on("clicked:song", function(meh, song){
    $scope.$broadcast("change:song", song)
  })

  $scope.songs = [
    { 
      title: "Together", 
      artist: "Disclosure", 
      url: "/music/disclosure-together.mp3",
      pic: "/covers/disclosure.jpg"
    },
    { 
      title: "Forever Pt. II feat. Kareem Taylor", 
      artist: "Snakehips",
      url: "/music/snakehips-forever2.mp3", 
      pic: "/covers/snakehips.jpg"
    },
    { 
      title: "Gold", 
      artist: "Bondax",
      url: "/music/bondax-gold.mp3",
      pic: "/covers/bondax.jpg"
    },
    { 
      title: "Gooey", 
      artist: "Glass Animals",
      url: "/music/glassanimals-gooey.mp3",
      pic: "/covers/glass-animals.jpg"
    },
    { 
      title: "Sun Models feat. Madelyn Grant", 
      artist: "Odesza",
      url: "/music/odesza-sunmodels.mp3",
      pic: "/covers/odesza.jpg"
    },
    { 
      title: "Warm Water (Snakehips Remix)", 
      artist: "Banks",
      url: "/music/banks-warmwaterrmx.mp3", 
      pic:"/covers/banks.jpg"
    },
    { 
      title: "Something About You", 
      artist: "Hayden James",
      url: "/music/haydenjames-something.mp3", 
      pic: "/covers/haydenjames.jpg"
    }
    
  ]

})