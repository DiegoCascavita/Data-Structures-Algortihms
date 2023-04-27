import heapq

class Graph:
    def __init__(self):
        self.nodes = set()
        self.edges = {}
        self.weights = {}
        
    def add_node(self, node):
        self.nodes.add(node)
        self.edges[node] = []
        
    def add_edge(self, node1, node2, weight):
        self.edges[node1].append(node2)
        self.weights[(node1, node2)] = weight
        
    def dijkstra(self, start_node, end_node):
        distances = {node: float('inf') for node in self.nodes}
        distances[start_node] = 0
        pq = [(0, start_node)]
        previous_nodes = {node: None for node in self.nodes}
        
        while len(pq) > 0:
            current_distance, current_node = heapq.heappop(pq)
            
            if current_node == end_node:
                path = []
                while current_node is not None:
                    path.append(current_node)
                    current_node = previous_nodes[current_node]
                return path[::-1]
            
            for neighbor in self.edges[current_node]:
                distance = current_distance + self.weights[(current_node, neighbor)]
                if distance < distances[neighbor]:
                    distances[neighbor] = distance
                    previous_nodes[neighbor] = current_node
                    heapq.heappush(pq, (distance, neighbor))
                    
        return None
