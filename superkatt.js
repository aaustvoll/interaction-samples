
// document.body.addEventListener("click", function (e) {
//   if(e.button !== 2) {
//     window.openLink("clickTag1");
//   }
// });
var start = document.querySelector('.start');
var end = document.querySelector('.end');
var gulrotbee = document.querySelector('#gulrot');
var luebee = document.querySelector('#lue');
var paraplybee = document.querySelector('#paraply');
var gorillabee = document.querySelector('#gorilla');
var gaffelbee = document.querySelector('#gaffel');
var grisbee = document.querySelector('#gris');
var gammelbee = document.querySelector('#gammel');

//   gulrotbee.onclick = function() {
//     document.getElementById('finder').classList.add('hide');

// };


var clicks = 0;

function click() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;

};

function isEnd() {
  if (clicks == 5) {
    document.getElementById('finder2').classList.remove('hide');
  }
};

gulrotbee.addEventListener("click", function (e) {
  if (e.button !== 2) {
    if (!gulrotbee.classList.contains('found') == true) {
      click()
    }
    document.getElementById('gulrot').classList.add('found')
    e.stopPropagation();
    isEnd()

  }
});

luebee.addEventListener("click", function (e) {
  if (e.button !== 2) {
    if (!luebee.classList.contains('notfound') == true) {

    }
    document.getElementById('lue').classList.add('notfound')
    e.stopPropagation();
    console.log("buzz")
    isEnd()
  }
});
paraplybee.addEventListener("click", function (e) {
  if (e.button !== 2) {
    if (!paraplybee.classList.contains('notfound') == true) {

    }
    document.getElementById('paraply').classList.add('notfound')
    e.stopPropagation();
    console.log("buzz")
    isEnd()
  }
});
gorillabee.addEventListener("click", function (e) {
  if (e.button !== 2) {
    if (!gorillabee.classList.contains('found') == true) {
      click()
    }
    document.getElementById('gorilla').classList.add('found')
    e.stopPropagation();
    console.log("buzz")
    isEnd()
  }
});
gaffelbee.addEventListener("click", function (e) {
  if (e.button !== 2) {
    if (!gaffelbee.classList.contains('found') == true) {
      click()
    }
    document.getElementById('gaffel').classList.add('found')
    e.stopPropagation();
    console.log("buzz")
    isEnd()
  }
});
grisbee.addEventListener("click", function (e) {
  if (e.button !== 2) {
    if (!grisbee.classList.contains('found') == true) {
      click()
    }
    document.getElementById('gris').classList.add('found')
    e.stopPropagation();
    console.log("buzz")
    isEnd()
  }
});
gammelbee.addEventListener("click", function (e) {
  if (e.button !== 2) {
    if (!gammelbee.classList.contains('found') == true) {
      click()
    }
    document.getElementById('gammel').classList.add('found')
    e.stopPropagation();
    console.log("buzz")
    isEnd()
  }
});

start.onclick = function () {
  document.getElementById('finder').classList.add('hide');
};

end.addEventListener("click", function (e) {
  if (e.button !== 2) {
    e.stopPropagation();
    window.openLink("clickTag1");

  }
});