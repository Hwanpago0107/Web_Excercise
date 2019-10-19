var Links = {
    setLinkColor: function (color) {
        //   var aList = document.querySelectorAll('a');
        // var i = 0;
        //while (i < aList.length) {
        //    aList[i].style.color = color;
        //    i = i + 1;
        // }
        //}
        $('a').css('color', color);
    }
}
var Body = {
    setBackgroundColor: function (color) {
        //var target = document.querySelector('body')
        //target.style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    },
    setFontColor: function (color) {
        //var target = document.querySelector('body')
        //target.style.color = color;
        $('body').css('color', color);
    }
}

function nightDayHandler(self) {
    if (self.value === 'night') { //this가 window(전역객체)를 가르키게 되므로 사용 못함
        Body.setBackgroundColor('black');
        Body.setFontColor('white');
        self.value = 'day';
        Links.setLinkColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setFontColor('black');
        self.value = 'night';
        Links.setLinkColor('blue');
    }
}