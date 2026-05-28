"""Render the Seaweed GAN 'how it works' flowchart.

Run from this directory:  python howitworks.py
Deps:  pip install diagrams cairosvg   (and Graphviz on PATH)
Icons: brand-colored PNGs under app/assets/_diagram_icons/ (run scripts/gen_diagram_icons.py once).
"""
import os
from diagrams import Diagram, Cluster, Edge
from diagrams.generic.storage import Storage
from diagrams.generic.compute import Rack
from diagrams.custom import Custom

ICONS = os.path.normpath(os.path.join(os.path.dirname(__file__), "..", "..", "_diagram_icons"))


def icon(name: str) -> str:
    return os.path.join(ICONS, f"{name}.png")


graph_attr = {"fontsize": "18", "bgcolor": "white", "pad": "0.4", "splines": "spline"}
node_attr = {"fontsize": "13"}
edge_attr = {"fontsize": "11"}

with Diagram(
    "Seaweed GAN — adversarial training loop",
    filename="howitworks",
    direction="LR",
    show=False,
    graph_attr=graph_attr,
    node_attr=node_attr,
    edge_attr=edge_attr,
):
    noise = Storage("Random\nnoise  z")
    real = Storage("Real seaweed\nimages")

    with Cluster("Adversarial loop  (TensorFlow / Keras)"):
        gen = Custom("Generator\n(DCGAN)", icon("tensorflow"))
        disc = Custom("Discriminator\n(DCGAN)", icon("keras"))
        loss = Rack("Loss\nreal vs fake")

        noise >> Edge(color="#0ea5e9", label="z") >> gen
        gen >> Edge(color="#0ea5e9", label="fake") >> disc
        real >> Edge(color="#10b981", label="real") >> disc
        disc >> Edge(color="#111111") >> loss

        loss >> Edge(color="#ef4444", style="dashed", label="update D") >> disc
        loss >> Edge(color="#ef4444", style="dashed", label="update G") >> gen

    samples = Storage("Generated\nseaweed samples")
    gen >> Edge(color="#8b5cf6", style="dotted", label="sample") >> samples
