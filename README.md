# 3D Driving & Theory Simulation Engine (Tech Spike)

An interactive 3D driving simulation prototype built with **React Three Fiber** and **Three.js** to explore spatial logic and camera physics for web-based driver education.

## 💡 The Vision
The ultimate goal of this project is to create an immersive, gamified environment that helps students prepare for driving theory tests through interactive, real-life driving scenarios and real-time feedback.

## 🚀 Current State: Phase 1 (Core Engine & Logic Prototype)
As a technical exploration of advanced web graphics and 3D rendering, this initial phase focuses on core architectural and mathematical mechanics rather than visual polish:
* **3D Vehicle Physics:** Custom driving, acceleration, and steering logic mapped to keyboard controls.
* **Dynamic Camera Trailing:** A smooth follow-camera system engineered using vector math, quaternions, and linear interpolation (`lerp`) to match the vehicle's heading.
* **Theory Rule Validation:** Real-time spatial tracking (`distanceTo`) to detect traffic signs (e.g., the Stop Sign) and evaluate user compliance (e.g., stopping completely vs. triggering infractions).

## 🗺️ Future Roadmap
* **Phase 2: Modular Level System** – Segmenting the simulation into structured lessons (e.g., Right of Way, Traffic Signs, Parallel Parking).
* **Phase 3: Visual & Asset Integration** – Replacing geometric primitives with realistic 3D GLTF models for vehicles, pedestrians, and urban environments.

## 🛠️ Technologies Used
* React / JSX
* React Three Fiber (R3F)
* Three.js
* @react-three/drei (Keyboard Controls)
* Vite
