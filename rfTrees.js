var buildComponents = function(dataObject) {
    selectedTree = []
    
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
    d3.select(".setosaG").append("h4").text("Setosa");
    d3.select(".setosaG").append("p").text(counts.Setosa);
    d3.select(".versicolorG").append("h4").text("Versicolor");
    d3.select(".versicolorG").append("p").text(counts.Versicolor);
    d3.select(".virginicaG").append("h4").text("Virginica");
    d3.select(".virginicaG").append("p").text(counts.Virginica);
    
    console.log(counts.Setosa);
}

var dataObject = {
    "Sepal Length" : 6.2,
    "Sepal Width" : 2.2,
    "Petal Length" : 4.5,
    "Petal Width" : 1.5
}

buildComponents(dataObject);

var createDataObj = function(sepalL, sepalW, petalL, petalW) {
    console.log(sepalL);
    console.log(sepalW);
    console.log(petalL);
    console.log(petalW);

    var dataObject = {
        "Sepal Length" : sepalL,
        "Sepal Width" : sepalW,
        "Petal Length" : petalL,
        "Petal Width" : petalW
    }
    buildComponents(dataObject);
}