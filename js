var secFac = new function(){
    var pastels = new function(){
        function rgb(h){
         return [(bigint = parseInt(h.substr(1), 16)) >> 16 & 255, bigint >> 8 & 255, bigint & 255].join()   
        }
        var colors = ['#800000','#ff0000','#ffA500','#ffff00','#808000','#800080','#ff00ff','#00ff00','#008000','#000080','#0000ff','#00ffff','#008080','#c0c0c0','#808080'];
        var last = 0;
        this.next = function(){
            var colorA =  colors[parseInt(colors.length * Math.random())];
            var colorB = colors[parseInt(colors.length * Math.random())];
            var breaker = 0;
            while(++breaker < 500 && (colorA+colorB) == last && colorA == colorB){
             colorA =  colors[parseInt(colors.length * Math.random())];
             colorB = colors[parseInt(colors.length * Math.random())];
            }
            last = colorA + colorB;
            return [rgb(colorA),rgb(colorB)];
        };
    }
    
	var template = $('section').remove();
    
   	this.Create = function(header,content){
        var sec = template.clone();
        $('header',sec).text(header);
        $('.content',sec).text(content);
        var colors = pastels.next();
        sec.css('background-image','linear-gradient(rgba('+colors[0]+',0.85),rgba('+colors[1]+',0.85))');
        return sec;
    };
};

var content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

for(var i = 0; i < 45; i++){
    $('page').append(secFac.Create(i,content));
}
