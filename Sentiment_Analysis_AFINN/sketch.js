var afinn;
function preload(){
	afinn = loadJSON('afinn111.json');
}


function setup() {
	noCanvas();
	console.log(afinn);

	var txt = select('#txt');
	txt.input(typing);
	function typing(){
		var textinput = txt.value();
		var words = textinput.split(/\W/);
		var totalscore = 0;
		var scoredwords = [];
		for(var i = 0; i< words.length; i++){
			var word = words[i].toLowerCase();
			if(afinn.hasOwnProperty(word)){
				totalscore+=Number(afinn[word]);
				console.log(word, afinn[word]);
				scoredwords.push(word + ':' + afinn[word]);
			}

		}
		var scoreP = select('#score');
		scoreP.html('Score:'+totalscore);
		var comp = select('#comparative');
		comp.html('Comparative:'+totalscore/word.length);
		var list = select('#wordlist');
		list.html(scoredwords);
	}


}
