angular.module("pageCtrl", [])
.controller("PageController", function($scope){

  $scope.$on("clicked:song", function(meh, song){
    $scope.$broadcast("change:song", song)
  })

  $scope.songs = [
    { 
      title: "Alone At Night", 
      artist: "Psychic Rites", 
      url: "http://www.digitalwell.washington.edu/dw/1/51/bd/bd808f4e-4f00-4021-8690-9d21b141e613.MP3" 
    },
    { 
      title: "Kitty", 
      artist: "Presidents of the United States of America",
      url: "http://arhdesignco.com/mp3/Kitty%20~%20The%20presidents%20of%20the%20united%20states%20of%20america.mp3" 
    },
    { 
      title: "Mine", 
      artist: "GOT7",
      url: "/music/ghaea.mp3"
    },
    { 
      title: "Derezzed (The Glitch Mob Remix)", 
      artist: "Daft Punk",
      url: "/music/claudia.mp3" 
    },
    { 
      title: "Like This", 
      artist: "Jkwon feat. Andy Milonakis",
      url: "/music/steve.mp3" 
    },
    { 
      title: "Party (Summer Occasion Remix)", 
      artist: "Beyonce feat. Andre 3000",
      url: "/music/tajaa.mp3" 
    },
    { 
      title: "If You Have To Ask", 
      artist: "Red Hot Chili Peppers",
      url: "/music/carlos.mp3" 
    }
  ]

})