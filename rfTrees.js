selectedTree = []

var dataObject = {
    "Sepal Length" : 6.2,
    "Sepal Width" : 2.2,
    "Petal Length" : 4.5,
    "Petal Width" : 1.5
}

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
console.log(counts);
console.log(predictedVal);
console.log(allTrees);

d3.select(".outcomeImage").append("p").text("Iris " + predictedVal);

var imgSVG = d3.select(".outcomeImage").append("svg")
    .attr("height", 240)
    .attr("width", 240);

imgSVG.append("svg:image")
    .attr("xlink:href", function() {
        console.log(predictedVal);
        if(predictedVal == "Setosa") {
            return './img/setosa.jpg'
        } else if (predictedVal == "Versicolor") {
            return './img/versicolor.jpg'
        } else {
            return './img/virginica.jpg'
        }
    })


//var idxNums = Array.apply(null, {length: allTrees.length}).map(Number.call, Number);
//console.log("rfTrees: ", idxNums);

var circleSVG = d3.select(".circles")
    .append("svg")
    .attr("height", 165)
    .attr("width", 100)

var circlesEnter = circleSVG.selectAll("circle")
    .data(allTrees)
    .enter()
    .append("circle");

circlesEnter
    .attr("cy", function(d, i) {
        //console.log(Math.floor(i / 4));
        return 30 + (Math.floor(i / 4) * 30);
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
    .on("click", function(d) {
        var thisCircle = d3.select(this);
        var allCircles = d3.selectAll("circle");
        allCircles.classed("selectedCircle", false);
        thisCircle.classed("selectedCircle", true);
        selectedTree = d[0];
        //console.log(selectedTree);
        treeObj(selectedTree);
    });

var rects = d3.select(".rects").select("svg").selectAll("rects")
    .data(counts)
    .enter()
    .append("rect");

rects
    .on("click", function(d) {
        console.log(d);
    })