library(randomForest)
library(tree)
library(party)

setwd("/Users/MasonShigenaka/Desktop/INFX 562")

iris_data <- iris

smp_size <- floor(0.8 * nrow(iris_data))

set.seed(123)
train_ind <- sample(seq_len(nrow(iris_data)), size = smp_size)

train <- iris_data[train_ind, ]
test <- iris_data[-train_ind, ]

rf.fit <- randomForest(Species ~., data=train, ntree = 16)
rf.fit

randomForest::getTree(rf.fit, k=50, labelVar = T)


cf <- cforest(Species ~ ., data=train, controls=cforest_control(mtry=2, mincriterion=0))
cf <- cforest(Species ~ ., data=train, controls=cforest_control(mtry=2, mincriterion=0, ntree = 16))
pt <- party:::prettytree(cf@ensemble[[16]], names(cf@data@get("input"))) 
pt 
nt <- new("BinaryTree") 
nt@tree <- pt 
nt@data <- cf@data 
nt@responses <- cf@responses 
nt
#plot(nt) 
plot(nt, type="simple") 


require(RJSONIO)

makeList<-function(x){
  if(ncol(x)>2){
    listSplit<-split(x[-1],x[1],drop=T)
    lapply(names(listSplit),function(y){list(name=y,children=makeList(listSplit[[y]]))})
  }else{
    lapply(seq(nrow(x[1])),function(y){list(name=x[,1][y],Percentage=x[,2][y])})
  }
}


jsonOut<-toJSON()
cat(jsonOut)
