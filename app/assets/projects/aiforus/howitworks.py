"""Render the AIFORUS 'how it works' flowchart.

Run from this directory:  python howitworks.py
Deps:  pip install diagrams   (and Graphviz on PATH)
"""
from diagrams import Diagram, Cluster, Edge
from diagrams.generic.storage import Storage
from diagrams.programming.language import Python
from diagrams.programming.framework import FastAPI, React
from diagrams.onprem.database import PostgreSQL

graph_attr = {
    "fontsize": "18",
    "bgcolor": "white",
    "pad": "0.4",
    "splines": "spline",
}
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
            clt = Python("clt\nURL discovery")
            scr = Python("scr\nfetch + normalize")
            clt >> Edge(color="#0ea5e9") >> scr

        ml = Python("ML scoring\n(zero-shot)")
        db = PostgreSQL("Postgres\narticles + tags")
        api = FastAPI("FastAPI\nAPI")

        scr >> Edge(color="#0ea5e9", label="articles") >> ml
        ml >> Edge(color="#10b981", label="scored") >> db
        db >> Edge(color="#10b981") >> api

    ui = React("React + Vite\nLeaflet map · Recharts\n(aicerti.co.kr)")

    sources >> Edge(color="#0ea5e9", label="news URLs") >> clt
    api >> Edge(color="#f59e0b", label="JSON") >> ui
