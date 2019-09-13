
class priorityQueue {
    constructor(){
        this.collection=[]
    }
    
    enqueue(element) {
        if (this.isEmpty) {
            this.collection.push(element)
        } else {
            let added = false
            for (let i=1;i<=this.collection.length;i++) {
                if (element[1] < this.collection[i-1][1]) {
                    this.collection.splice(i-1,0,element)
                    added = true
                    break
                }
            }
            if (!added) {
                this.collection.push(element)
            }
        }
    }
    
    dequeue() {
        let val = this.collection.shift()
        return val
    }
    
    isEmpty() {
        return (this.collection.length === 0)
    }
}

class Graph {
    constructor() {
        this.nodes =[]
        this.adjacencyList={}
    }
    
    addNode(node) {
        this.nodes.push(node)
        this.adjacencyList[node] = []
    }
    
    addEdges(node1,node2,weight){        
        this.adjacencyList[node1].push({node:node2, weight:weight})
        this.adjacencyList[node2].push({node:node1, weight:weight})
    }
        
    display(){
      let graph = "";
      this.nodes.forEach(node => {
         graph += node + "->" + this.adjacencyList[node].map(n => n.node).join(", ") + "\n";
      });
      console.log(graph);          
    }
}



    
var maxAreaOfIsland = function(n,grid) {
    
    let map = new Graph()
    for (let i=1;i<=n;i++){
        map.addNode(i)
    }
    
    grid.map((arr) => {
        map.addEdges(arr[0],arr[1],Math.pow(2,arr[2]))
    })
    
    console.log('map',map)
  
    
    map.display()
    let sum = 0
    for (let i = 1;i<n;i++) {
        let s = findSumShortDistanceBtwNodes(i,n,map)
        console.log('retu', s)
        sum += s
    }
    
    console.log("TOTAL ", sum, sum.toString(2))
    return sum.toString(2)
    
}


function findSumShortDistanceBtwNodes(startNode,endNode,map) {
    let distance = {}
    let backTrace = {}
    let pq = new priorityQueue()
    
    distance[startNode] = 0 
    console.log('1')
    map.nodes.forEach(node => {
        if (node !== startNode){
            distance[node] = Infinity
        }
    })
    
    pq.enqueue([startNode,0])
    console.log('2')
    while (!pq.isEmpty()) {
        let shortestStep = pq.dequeue()
        let currentNode = shortestStep[0]
        map.adjacencyList[currentNode].forEach(neighbour => {
            let dist = distance[currentNode] + neighbour.weight
            if (dist < distance[neighbour.node]) {
                distance[neighbour.node] = dist
                backTrace[neighbour.node] = currentNode
                pq.enqueue([neighbour.node,dist])
            }
        })
    }
    
    
    
    
    console.log('3', backTrace,distance)
    
    let path = [endNode]
    let lastStep = endNode
    let sumDist = 0
    if (startNode >= endNode) {
        return sumDist
    } else {
        for (let i = startNode+1; i<= endNode; i++) {
            sumDist += distance[i]
        } 
        console.log('SUM ', sumDist)
        return sumDist
    }
    
    
    
    while (lastStep !== startNode) {
        path.unshift(backTrace[lastStep])
        lastStep = backTrace[lastStep]
    }
    
    console.log('path is', path ,'and dist is ',distance[endNode])
}



maxAreaOfIsland(5,[ [ 1, 3, 5 ],
  [ 4, 5, 0 ],
  [ 2, 1, 3 ],
  [ 3, 2, 1 ],
  [ 4, 3, 4 ],
  [ 4, 2, 2 ] ])