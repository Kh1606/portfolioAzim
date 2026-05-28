"""Render the AIFORUS 'how it works' flowchart.

Run from this directory:  python howitworks.py
Deps:  pip install diagrams cairosvg   (and Graphviz on PATH)
Icons: brand-colored PNGs under app/assets/_diagram_icons/ (run scripts/gen_diagram_icons.py once).
"""
import os
from diagrams import Diagram, Cluster, Edge
from diagrams.generic.storage import Storage
from diagrams.custom import Custom

ICONS = os.path.normpath(os.path.join(os.path.dirname(__file__), "..", "..", "_diagram_icons"))


def icon(name: str) -> str:
    return os.path.join(ICONS, f"{name}.png")


graph_attr = {"fontsize": "18", "bgcolor": "white", "pad": "0.4", "splines": "spline"}
node_attr = {"fontsize": "13"}
edge_attr = {"fontsize": "11"}

with Diagram(
    "AIFORUS — AI News Intelligence Platform",
    filename="howitworks",
    direction="LR",
    show=False,
    graph_attr=graph_attr,
    node_attr=node_attr,
    edge_attr=edge_attr,
):
    sources = Storage("Global\nnews sites")

    with Cluster("Backend  (Python · FastAPI · Docker)"):
        with Cluster("Collector  (scheduled)"):
            clt = Custom("clt\nURL discovery", icon("python"))
            scr = Custom("scr\nfetch + normalize", icon("python"))
            clt >> Edge(color="#0ea5e9") >> scr

        ml = Custom("ML scoring\n(zero-shot)", icon("pytorch"))
        db = Custom("Postgres\narticles + tags", icon("postgresql"))
        api = Custom("FastAPI\nAPI", icon("fastapi"))

        scr >> Edge(color="#0ea5e9", label="articles") >> ml
        ml >> Edge(color="#10b981", label="scored") >> db
        db >> Edge(color="#10b981") >> api

    ui = Custom("React + Vite\nLeaflet map · Recharts\n(aicerti.co.kr)", icon("react"))

    sources >> Edge(color="#0ea5e9", label="news URLs") >> clt
    api >> Edge(color="#f59e0b", label="JSON") >> ui
