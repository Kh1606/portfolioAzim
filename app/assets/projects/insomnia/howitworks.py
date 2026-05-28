"""Render the Insomnia 'how it works' flowchart.

Run from this directory:  python howitworks.py
Deps:  pip install diagrams cairosvg   (and Graphviz on PATH)
"""
import os
from diagrams import Diagram, Cluster, Edge
from diagrams.generic.storage import Storage
from diagrams.custom import Custom

ICONS = os.path.normpath(os.path.join(os.path.dirname(__file__), "..", "..", "_diagram_icons"))


def icon(name: str) -> str:
    return os.path.join(ICONS, f"{name}.png")


graph_attr = {"fontsize": "18", "bgcolor": "white", "pad": "0.4",
              "splines": "spline", "nodesep": "0.7", "ranksep": "1.0"}
node_attr = {"fontsize": "13"}
edge_attr = {"fontsize": "11"}

with Diagram(
    "Insomnia — sleep data from app screenshots",
    filename="howitworks",
    direction="LR",
    show=False,
    graph_attr=graph_attr,
    node_attr=node_attr,
    edge_attr=edge_attr,
):
    shot = Storage("Sleep-app\nscreenshot")

    with Cluster("OpenCV pipeline"):
        crop = Custom("crop\nsleep-stage graph", icon("opencv"))
        gray = Custom("grayscale", icon("opencv"))
        extract = Custom("extract\nper-minute stages", icon("opencv"))
        crop >> Edge(color="#0ea5e9") >> gray >> Edge(color="#0ea5e9") >> extract

    csv = Custom("CSV\nminute · sleep status", icon("files"))
    analysis = Custom("pandas\nanalysis", icon("pandas"))
    charts = Custom("matplotlib\ncharts", icon("plotly"))

    shot >> Edge(color="#10b981") >> crop
    extract >> Edge(color="#f59e0b") >> csv
    csv >> Edge(color="#8b5cf6") >> analysis
    analysis >> Edge(color="#ef4444") >> charts
