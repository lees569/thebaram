var   w = 1280,
      h = 1000;

var circleWidth = 5;

var palette = {
      "lightgray": "#819090",
      "gray": "#708284",
      "mediumgray": "#536870",
      "darkgray": "#475B62",
      "mygray":"#636262",

      "darkblue": "#0A2933",
      "darkerblue": "#042029",

      "paleryellow": "#FCF4DC",
      "paleyellow": "#EAE3CB",
      "yellow": "#A57706",
      "orange": "#BD3613",
      "myorange": "#4eff5f",
      "red": "#D11C24",
      "pink": "#C61C6F",
      "purple": "#595AB7",
      "blue": "#2176C7",
      "green": "#259286",
      "yellowgreen": "#738A05"
  }

var nodes = [
      { name: "A"},
      { name: "adage", target: [0,2]},
      { name: "arose", target: [3]},
      { name: "absurdity", target: [4]},
      { name: "assaulted", target: [5]},
      { name: "appliance", target: [6]},
      { name: "ascribe", target: [7]},
      { name: "antarctic", target: [8]},
      { name: "astonished", target: [9]},
      { name: "arrogant", target: [10]},
      { name: "abandon", target: [11]},
      { name: "articulate", target: [12]},
      { name: "accurate", target: [13]},
      { name: "audaciously", target: [14]},      
      { name: "archbishop", target: [15]},
      { name: "amnesty", target: [16]},
      { name: "atonement", target: [17]},
      { name: "adverse", target: [18]},
      { name: "atomize", target: [19]},
      { name: "adhesive", target: [20]},
      { name: "artificial", target: [21]},
      { name: "aisle", target: [22]},      
      { name: "accompanied", target: [23]},
      { name: "assaulting", target: [24]},
      { name: "assassination", target: [25]},
      { name: "apparatus", target: [0]},
      { name: "B"},
      { name: "behoove", target: [26,28]},
      { name: "bizarre", target: [29]},
      { name: "burden", target: [30]},
      { name: "bottleneck", target: [31]},
      { name: "blob", target: [32]},
      { name: "bustling", target: [33]},
      { name: "breeze", target: [34]},
      { name: "blast", target: [35]},
      { name: "bombardier", target: [36]},
      { name: "boast", target: [37]},
      { name: "bent", target: [38]},
      { name: "burst", target: [26]},
      { name: "C"},
      { name: "conceit", target: [39]},
      { name: "contrary", target: [39]},
      { name: "cumulative", target: [39]},
      { name: "conflict", target: [39]},
      { name: "cilantro", target: [39]},
      { name: "cram", target: [39]},
      { name: "cortex", target: [39]},
      { name: "cognitive", target: [39]},
      { name: "consoled", target: [39]},
      { name: "coherence", target: [39]},
      { name: "cease", target: [39]},
      { name: "confess", target: [39]},
      { name: "compromise", target: [39]},      
      { name: "chill", target: [39]},
      { name: "constant", target: [39]},
      { name: "carousel", target: [39]},
      { name: "congestion", target: [39]},
      { name: "concise", target: [39]},
      { name: "convolution", target: [39]},
      { name: "circuit", target: [39]},
      { name: "D"},
      { name: "discrete", target: [60]},
      { name: "desire", target: [60]},
      { name: "drainage", target: [60]},
      { name: "disfigured", target: [60]},
      { name: "diverge", target: [60]},
      { name: "detrimental", target: [60]},
      { name: "delude", target: [60]},
      { name: "dismiss", target: [60]},
      { name: "deserve", target: [60]},
      { name: "discard", target: [60]},
      { name: "dimmed", target: [60]},
      { name: "dismantle", target: [60]},
      { name: "desperation", target: [60]},      
      { name: "duplex", target: [60]},
      { name: "dampit", target: [60]},
      { name: "denial", target: [60]},
      { name: "debt", target: [60]},
      { name: "domestic", target: [60]},
      { name: "debugging", target: [60]},
      { name: "disdain", target: [60]},
      { name: "E"},
      { name: "emanate", target: [81]},
      { name: "extract", target: [81]},
      { name: "exploit", target: [81]},
      { name: "extraordinarily", target: [81]},
      { name: "essence", target: [81]},
      { name: "embrace", target: [81]},
      { name: "exposed", target: [81]},
      { name: "ease up", target: [81]},
      { name: "enlisted", target: [81]},
      { name: "earl", target: [81]},
      { name: "epidemic", target: [81]},
      { name: "embarrassing", target: [81]},
      { name: "epoch", target: [81]},   
      { name: "F"},
      { name: "fuss", target: [95]},
      { name: "flinch", target: [95]},
      { name: "falafel", target: [95]},
      { name: "fixation", target: [95]},
      { name: "friction", target: [95]},
      { name: "G"},
      { name: "grueling", target: [101]},
      { name: "giddy", target: [101]},
      { name: "graphite", target: [101]},
      { name: "gig", target: [101]},
      { name: "gravy", target: [101]},
      { name: "garnish", target: [101]},
      { name: "glimpse", target: [101]},
      { name: "H"},
      { name: "hubris", target: [109]},
      { name: "humbling", target: [109]},
      { name: "harsh", target: [109]},
      { name: "hinge", target: [109]},
      { name: "hooters", target: [109]},
      { name: "hummus", target: [109]},
      { name: "hatchet", target: [109]},
      { name: "I"},
      { name: "infrared", target: [117]},
      { name: "implicit", target: [117]},
      { name: "ingredient", target: [117]},
      { name: "internal", target: [117]},
      { name: "interfere", target: [117]},
      { name: "imposed", target: [117]},
      { name: "interpretation", target: [117]},
      { name: "infant", target: [117]},
      { name: "imprisonment", target: [117]},
      { name: "itch", target: [117]},
      { name: "invincibility", target: [117]},
      { name: "inverse", target: [117]},
      { name: "impulse", target: [117]},
      { name: "immerse", target: [117]},
      { name: "impregnate", target: [117]},
      { name: "iodine", target: [117]},
      { name: "irrigation", target: [117]},
      { name: "L"},
      { name: "latitude", target: [135]},
      { name: "literally", target: [135]},
      { name: "lymphatic", target: [135]},
      { name: "liveliest", target: [135]},
      { name: "lingered", target: [135]},
      { name: "loiter", target: [135]},
      { name: "M"},
      { name: "magnificent", target: [142]},
      { name: "municipal", target: [142]},
      { name: "mingle", target: [142]},
      { name: "mangled", target: [142]},
      { name: "maturation", target: [142]},
      { name: "metabolism", target: [142]},
      { name: "N"},
      { name: "novelty", target: [149]},
      { name: "nozzle", target: [149]},
      { name: "O"},
      { name: "ointment", target: [152]},
      { name: "opioid", target: [152]},
      { name: "obsolescence", target: [152]},
      { name: "offspring", target: [152]},
      { name: "occupied", target: [152]},
      { name: "oversaw", target: [152]},
      { name: "oppressive", target: [152]},
      { name: "ordinary", target: [152]},
      { name: "override", target: [152]},
      { name: "P"},
      { name: "possess", target: [162]},
      { name: "prospered", target: [162]},
      { name: "prosperity", target: [162]},
      { name: "podcast", target: [162]},
      { name: "prefrontal", target: [162]},
      { name: "proverbial", target: [162]},
      { name: "procedure", target: [162]},
      { name: "psychotherapy", target: [162]},
      { name: "pavement", target: [162]},
      { name: "presence", target: [162]},
      { name: "passionate", target: [162]},
      { name: "perpetrator", target: [162]},
      { name: "perceive", target: [162]},
      { name: "poltergeist", target: [162]},
      { name: "S"},
      { name: "splendid", target: [177]},
      { name: "surreptitiously", target: [177]},
      { name: "subtle", target: [177]},
      { name: "subversive", target: [177]},
      { name: "snatch", target: [177]},
      { name: "stumble", target: [177]},
      { name: "scumbag", target: [177]},
      { name: "stow", target: [177]},
      { name: "shredded", target: [177]},
      { name: "steer", target: [177]},
      { name: "scratchy", target: [177]},
      { name: "syntax", target: [177]},
      { name: "sinus", target: [177]},
      { name: "substitute", target: [177]},
      { name: "T"},
      { name: "theft", target: [192]},
      { name: "tweak", target: [192]},
      { name: "trinity", target: [192]},
      { name: "treason", target: [192]},
      { name: "treasure", target: [192]},
      { name: "tote", target: [192]},
      { name: "U"},
      { name: "undeniably", target: [199]},
      { name: "utter", target: [199]},
      { name: "W"},
      { name: "workflow", target: [202]},
      { name: "wiling", target: [202]},
      { name: "witness", target: [202]},
      
      
      
      
      


];

var links = [];

for (var i = 0; i< nodes.length; i++) {
      if (nodes[i].target !== undefined) {
            for (var x = 0; x< nodes[i].target.length; x++ ) {
                  links.push({
                        source: nodes[i],
                        target: nodes[nodes[i].target[x]]
                  })
            }
      }
}

var myChart = d3.select('#chart')
    .append('svg')
    .attr('width', w)
    .attr('height', h)

var force = d3.layout.force()
  .nodes(nodes)
  .links([])
  .gravity(0.3)
  .charge(-200)
  .size([w, h])

var link = myChart.selectAll('line')
  .data(links).enter().append('line')
  .attr('stroke', palette.lightgray)

var node = myChart.selectAll('circle')
  .data(nodes).enter()
  .append('g')
  .call(force.drag);

node.append('circle')
  .attr('cx', function(d) { return d.x; })
  .attr('cy', function(d) { return d.y; })
  .attr('r', circleWidth )
  .attr('fill', function(d, i) {
    if (i==0 || i==26 || i==39 || i==60 || i==81 ||i==95 || i==101 || i==109 || i==117 || i==135 || i==142 || i==149 || i==152 || i==162 || i==177 || i==192 || i==199 || i==202) { return palette.black}
    else { return palette.pink }
  })

node.append('text')
  .text(function(d) { return d.name})
  .attr('font-family', 'Roboto Slab')
  .attr('fill', function(d, i) {
    if (i==0 || i==26 || i==39 || i==60 || i==81 ||i==95 || i==101 || i==109 || i==117 || i==135 || i==142 || i==149 || i==152 || i==162 || i==177 || i==192 || i==199 || i==202) { return palette.purple}
      else if (i==6 || i==37 || i==67 || i==78 || i==97 ||i==105 || i==115 || i==123 || i==136 || i==146 || i==150 || i==157 || i==167 || i==178 || i==193 || i==200 || i==203 || i==202) { return palette.lightgray}
    else { return palette.mygray}

  })
  .attr('x', function(d, i) {
    if (i>0) { return circleWidth + 4 }
    else { return circleWidth -15 }
  })
  .attr('y', function(d, i) {
    if (i>0) { return circleWidth }
    else { return 8 }
  })
  .attr('text-anchor', function(d, i) {
    if (i>0) { return 'beginning' }
    else { return 'end'}
  })
  .attr('font-size',  function(d, i) {
    if (i==0 || i==26 || i==39 || i==60 || i==81 ||i==95 || i==101 || i==109 || i==117 || i==135 || i==142 || i==149 || i==152 || i==162 || i==177 || i==192 || i==199 || i==202) 
      { return '1.8em' }
    else if (i==3 || i==49 || i==53 || i==63 || i==86 ){ return '1.3em'}
      else if (i==6 || i==7 || i==8 || i==9 || i==10 || i==11 || i==12 || i==13||i==14|| i==15 || i==16 || i==17 || i==18 || i==19 || i==20 || i==21 ){ return '1.1em'}
      else if (i==5 || i==23 || i==60 || i==67 || i==100 || i==123 || i==134 || i==160 || i==163 || i==164 || i==165||i==166|| i==167 || i==168 || i==169 || i==170 || i==171 || i==172 || i==173){ return '1.0em'}
        else if (i==100 || i==112 || i==137 || i==175 || i==184 || i==191 || i==198 || i==200 ){ return '0.8em'}
    else { return '0.6em'}
  
  })

force.on('tick', function(e) {
  node.attr('transform', function(d, i) {
    return 'translate('+ d.x +', '+ d.y +')';
  })

  link
    .attr('x1', function(d) { return d.source.x })
    .attr('y1', function(d) { return d.source.y })
    .attr('x2', function(d) { return d.target.x })
    .attr('y2', function(d) { return d.target.y })
})


force.start();

