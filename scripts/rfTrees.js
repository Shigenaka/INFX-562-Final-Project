var buildComponents = function(dataObject) {
    
    d3.select(".outcomeImage").selectAll("p").remove();
    d3.select(".outcomeImage").selectAll("svg").remove();
    d3.select(".circles").selectAll("svg").remove();
    d3.select(".rects").selectAll("p").remove();
    d3.select(".rects").selectAll("h4").remove();

    //var varOutputs = [];
    var counts = {
        "Setosa": 0,
        "Versicolor": 0,
        "Virginica": 0
    };

    //console.log(typeof dataObject);

    var traverseTree = function(data, tree) {
        if(!tree.children) {
            var outputVal = tree.class;
            //console.log(outputVal);
            return outputVal;
        } else if (data[tree.variable] <= tree.splitVal) {
            return traverseTree(data, tree.children[0]);
        } else {
            return traverseTree(data, tree.children[1]);
        }
    }

    allTrees.forEach(function(element) {
        var tempTree = element[0];
        var classOutput = traverseTree(dataObject, tempTree);
        //varOutputs.push(classOutput);
        counts[classOutput] = counts[classOutput] ? counts[classOutput] + 1 : 1;
        element.outcome = classOutput;
    });

    var predictedVal = _.max(Object.keys(counts), function (o) { return counts[o]; });

    //console.log(varOutputs);
    //console.log(counts);
    //console.log(predictedVal);
    //console.log(allTrees);

    d3.select(".outcomeImage").append("p").text("Iris " + predictedVal);

    var imgSVG = d3.select(".outcomeImage").append("svg")
        .attr("height", 200)
        .attr("width", 240);

    imgSVG.append("svg:image")
        .attr("xlink:href", function() {
            //console.log(predictedVal);
            if(predictedVal == "Setosa") {
                return './img/setosa.jpg'
            } else if (predictedVal == "Versicolor") {
                return './img/versicolor.jpg'
            } else {
                return './img/virginica.jpg'
            }
        });


    //var idxNums = Array.apply(null, {length: allTrees.length}).map(Number.call, Number);
    //console.log("rfTrees: ", idxNums);

    var circleSVG = d3.select(".circles")
        .append("svg")
        .attr("height", 165)
        .attr("width", 110)

    var circlesEnter = circleSVG.selectAll("circle")
        .data(allTrees)
        .enter()
        .append("circle");

    circlesEnter
        .attr("cy", function(d, i) {
            //console.log(Math.floor(i / 4));
            return 30 + (Math.floor(i / 4) * 30);
        })
        .attr("class", function(d, i) {
            if(i == currSelectedCircle) {
                return "selectedCircle";
            } else {
                return "";
            }
        })
        .attr("cx", function(d, i) { return (i % 4) * 25 + 15; })
        .attr("r", 10)
        .style("fill", function(d) {
            if(d.outcome == "Setosa") {
                return "#1b9e77";
            } else if (d.outcome == "Versicolor") {
                return "#d95f02";
            } else {
                return "#7570b3";
            }
        })
        .on("click", function(d, i) {
            var thisCircle = d3.select(this);
            //console.log("circle obj",thisCircle);
            var allCircles = d3.selectAll("circle");
            currSelectedCircle = i;
            allCircles.classed("selectedCircle", false);
            thisCircle.classed("selectedCircle", true);
            selectedTree = d[0];
            //console.log(selectedTree);
            treeObj(selectedTree);
        });
    //console.log("selected circle",currSelectedCircle);
    d3.select(".setosaG").append("h4").text("Setosa");
    d3.select(".setosaG").append("p").text(counts.Setosa);
    d3.select(".versicolorG").append("h4").text("Versicolor");
    d3.select(".versicolorG").append("p").text(counts.Versicolor);
    d3.select(".virginicaG").append("h4").text("Virginica");
    d3.select(".virginicaG").append("p").text(counts.Virginica);
    
    //console.log(counts.Setosa);
}

var trackTraversal = function(data, tree, condition) {
    if(!tree.children) {
        var outputVal = tree.class;
        tree.traversed = condition;
        return outputVal;
    } else if (data[tree.variable] <= tree.splitVal) {
        tree.traversed = condition;
        return trackTraversal(data, tree.children[0], condition);
    } else {
        tree.traversed = condition;
        return trackTraversal(data, tree.children[1], condition);
    }
}

var selectedTree = allTrees[0][0];
var currSelectedCircle = 0;

var dataObject = {
    "Sepal Length" : 6.2,
    "Sepal Width" : 2.2,
    "Petal Length" : 4.5,
    "Petal Width" : 1.5
}

buildComponents(dataObject);


//Create Sliders
var svg = d3.select(".sliders").select("svg"),
    margin = {right: 50, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height");

var sl = d3.scaleLinear()
    .domain([4.3, 7.9])
    .range([0, width])
    .clamp(true);

var sliderSL = svg.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + (height / 5) * 1 + ")");
sliderSL.append("text")
    .attr("dy", -10)
    .text("Sepal Length")

sliderSL.append("line")
    .attr("class", "track")
    .attr("x1", sl.range()[0])
    .attr("x2", sl.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { sliderSL.interrupt(); })
        .on("start drag", function() { hueSL(sl.invert(d3.event.x)); }));

sliderSL.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 18 + ")")
  .selectAll("text")
  .data(sl.ticks(10))
  .enter().append("text")
    .attr("x", sl)
    .attr("text-anchor", "middle")
    .text(function(d) { return d; });

var handleSL = sliderSL.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);

sliderSL.transition() // Gratuitous intro!
    .duration(750)
    .tween("hueSL", function() {
      var i = d3.interpolate(0, 6.2);
      return function(t) { hueSL(i(t)); };
    });

function hueSL(h) {
  handleSL.attr("cx", sl(h));
  createDataObj(h, "Sepal Length");
}

var sw = d3.scaleLinear()
    .domain([2, 4.4])
    .range([0, width])
    .clamp(true);

var sliderSW = svg.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + (height / 5) * 2 + ")");
sliderSW.append("text")
    .attr("dy", -10)
    .text("Sepal Width")

sliderSW.append("line")
    .attr("class", "track")
    .attr("x1", sw.range()[0])
    .attr("x2", sw.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { sliderSW.interrupt(); })
        .on("start drag", function() { hueSW(sw.invert(d3.event.x)); }));

sliderSW.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 18 + ")")
  .selectAll("text")
  .data(sw.ticks(10))
  .enter().append("text")
    .attr("x", sw)
    .attr("text-anchor", "middle")
    .text(function(d) { return d ; });

var handleSW = sliderSW.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);

sliderSW.transition() // Gratuitous intro!
    .duration(750)
    .tween("hueSW", function() {
      var i = d3.interpolate(0, 2.2);
      return function(t) { hueSW(i(t)); };
    });

function hueSW(h) {
  handleSW.attr("cx", sw(h));
  createDataObj(h, "Sepal Width");
}

var pl = d3.scaleLinear()
    .domain([1, 6.9])
    .range([0, width])
    .clamp(true);

var sliderPL = svg.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + (height / 5) * 3 + ")");
sliderPL.append("text")
     .attr("dy", -10)
     .text("Petal Length")

sliderPL.append("line")
    .attr("class", "track")
    .attr("x1", pl.range()[0])
    .attr("x2", pl.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { sliderPL.interrupt(); })
        .on("start drag", function() { huePL(pl.invert(d3.event.x)); }));

sliderPL.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 18 + ")")
  .selectAll("text")
  .data(pl.ticks(10))
  .enter().append("text")
    .attr("x", pl)
    .attr("text-anchor", "middle")
    .text(function(d) { return d ; });

var handlePL = sliderPL.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);

sliderPL.transition() // Gratuitous intro!
    .duration(750)
    .tween("huePL", function() {
      var i = d3.interpolate(0, 4.5);
      return function(t) { huePL(i(t)); };
    });

function huePL(h) {
  handlePL.attr("cx", pl(h));
  createDataObj(h, "Petal Length");
}


var pw = d3.scaleLinear()
    .domain([0.1, 2.5])
    .range([0, width])
    .clamp(true);

var sliderPW = svg.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + (height / 5) * 4 + ")");
sliderPW.append("text")
     .attr("dy", -10)
     .text("Petal Width")

sliderPW.append("line")
    .attr("class", "track")
    .attr("x1", pw.range()[0])
    .attr("x2", pw.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { sliderPW.interrupt(); })
        .on("start drag", function() { huePW(pw.invert(d3.event.x)); }));

sliderPW.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 18 + ")")
  .selectAll("text")
  .data(pw.ticks(10))
  .enter().append("text")
    .attr("x", pw)
    .attr("text-anchor", "middle")
    .text(function(d) { return d; });

var handlePW = sliderPW.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);

sliderPW.transition() // Gratuitous intro!
    .duration(750)
    .tween("huePW", function() {
      var i = d3.interpolate(0, 1.5);
      return function(t) { huePW(i(t)); };
    });

function huePW(h) {
  handlePW.attr("cx", pw(h));
  createDataObj(h, "Petal Width");
}

var createDataObj = function(value, variable) {
    //console.log("current tree",selectedTree);
    if (Object.keys(selectedTree).length > 0) {
        trackTraversal(dataObject, selectedTree, false);
        d3.select(".tree").select("svg").remove();
    }
    dataObject[variable] = value;
    //console.log("new val: ", dataObject[variable]);
    buildComponents(dataObject);
    //console.log("selectedTree", selectedTree)
    if (Object.keys(selectedTree).length > 0) {
        treeObj(selectedTree);
    }
}