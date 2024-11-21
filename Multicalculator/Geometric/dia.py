import matplotlib.pyplot as plt
import networkx as nx
# Data Flow Diagram - Level 0
G = nx.DiGraph()
G.add_edges_from([
    ("User", "Multi-Calculator Platform"),
    ("Multi-Calculator Platform", "User"),
])
pos = {
    "User": (0, 1),
    "Multi-Calculator Platform": (2, 1)
}
# Draw the graph
plt.figure(figsize=(8, 6))
nx.draw(G, pos, with_labels=True, node_size=4000, node_color="skyblue", font_size=10, font_weight="bold", arrowsize=20)
plt.title("Level 0 Data Flow Diagram", fontsize=16)
plt.savefig("/mnt/data/level_0_dfd.png", format="png", bbox_inches="tight")
plt.show()
