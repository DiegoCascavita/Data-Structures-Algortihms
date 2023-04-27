class Graph {
    constructor() {
      this.nodes = new Set();
      this.edges = new Map();
      this.weights = new Map();
    }
    
    addNode(node) {
      this.nodes.add(node);
      this.edges.set(node, []);
    }
    
    addEdge(node1, node2, weight) {
      this.edges.get(node1).push(node2);
      this.weights.set(`${node1}-${node2}`, weight);
    }
    
    dijkstra(startNode, endNode) {
      const distances = new Map();
      const previousNodes = new Map();
      const queue = new PriorityQueue();
      
      // Initialize distances and queue
      for (const node of this.nodes) {
        if (node === startNode) {
          distances.set(node, 0);
          queue.enqueue(node, 0);
        } else {
          distances.set(node, Infinity);
          queue.enqueue(node, Infinity);
        }
        previousNodes.set(node, null);
      }
      
      // Main loop
      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();
        
        if (currentNode === endNode) {
          // We found the shortest path, so exit
          const path = [];
          while (previousNodes.get(currentNode) !== null) {
            path.unshift(currentNode);
            currentNode = previousNodes.get(currentNode);
          }
          return path;
        }
        
        for (const neighbor of this.edges.get(currentNode)) {
          const weight = this.weights.get(`${currentNode}-${neighbor}`);
          const distance = distances.get(currentNode) + weight;
          if (distance < distances.get(neighbor)) {
            distances.set(neighbor, distance);
            previousNodes.set(neighbor, currentNode);
            queue.changePriority(neighbor, distance);
          }
        }
      }
      
      // There is no path from startNode to endNode
      return null;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.items = [];
    }
    
    enqueue(item, priority) {
      this.items.push({item, priority});
      this.items.sort((a, b) => a.priority - b.priority);
    }
    
    dequeue() {
      return this.items.shift().item;
    }
    
    changePriority(item, priority) {
      const index = this.items.findIndex(i => i.item === item);
      this.items[index].priority = priority;
      this.items.sort((a, b) => a.priority - b.priority);
    }
    
    isEmpty() {
      return this.items.length === 0;
    }
  }
  