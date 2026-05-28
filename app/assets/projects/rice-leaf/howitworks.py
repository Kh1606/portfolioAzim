"""Render the Rice Leaf Classifier 'how it works' flowchart.

Run from this directory:  python howitworks.py
Deps:  pip install diagrams cairosvg   (and Graphviz on PATH)
"""
import os
from diagrams import Diagram, Cluster, Edge
from diagrams.custom import Custom

ICONS = os.path.normpath(os.path.join(os.path.dirname(__file__), "..", "..", "_diagram_icons"))


def icon(name: str) -> str:
    return os.path.join(ICONS, f"{name}.png")


graph_attr = {"fontsize": "18", "bgcolor": "white", "pad": "0.4",
              "splines": "spline", "nodesep": "0.7", "ranksep": "1.0"}
node_attr = {"fontsize": "13"}
edge_attr = {"fontsize": "11"}

with Diagram(
    "Rice Leaf Classifier — ResNet18 disease classification",
    filename="howitworks",
    direction="LR",
    show=False,
    graph_attr=graph_attr,
    node_attr=node_attr,
    edge_attr=edge_attr,
):
    dataset = Custom("Kaggle dataset\nrice-leaf diseases", icon("kaggle"))
    prep = Custom("torchvision\nresize · normalize · augment", icon("pytorch"))

    with Cluster("Training (Jupyter)"):
        model = Custom("ResNet18\ntransfer learning", icon("pytorch"))
        loop = Custom("train / val loop\nCE loss · Adam", icon("jupyter"))
        model >> Edge(color="#0ea5e9", label="fine-tune") >> loop
        loop >> Edge(color="#888888", style="dashed", label="update weights") >> model

    curves = Custom("loss / accuracy\ncurves", icon("plotly"))
    preds = Custom("predictions\non held-out leaves", icon("files"))

    dataset >> Edge(color="#10b981") >> prep
    prep >> Edge(color="#f59e0b") >> model
    loop >> Edge(color="#8b5cf6") >> curves
    loop >> Edge(color="#ef4444", label="best model") >> preds
