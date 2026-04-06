# 📚 ShikshaEdge — Offline Multilingual AI Tutor

> Gemma 3, fine-tuned on NCERT curriculum, running fully offline via Ollama.  
> One device. One school. No internet. No subscription.

---

## The Problem

600 million Indian students. 40% of rural schools with no reliable internet.
AI tutoring tools that require cloud connections, English fluency, and monthly subscriptions.

ShikshaEdge was built for the students those tools forgot.

---

## What it does

- Answers Class 1–12 NCERT Science, Math, and other curriculum questions
- Responds in **Hindi, Marathi, or English** — whichever the student writes in
- Runs **completely offline** on a laptop or Raspberry Pi
- Students connect over local WiFi — no internet required
- No login. No subscription. Works forever after setup.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| AI Model | Gemma 3 4B — fine-tuned on NCERT curriculum |
| Local inference | Ollama |
| Backend | Node.js + Express |
| Frontend | Vanilla HTML/CSS/JS (PWA-ready) |
| Training | Unsloth QLoRA on Google Colab T4 |

---

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org) v18+
- [Ollama](https://ollama.com/download)

### 1. Pull the ShikshaEdge model
```bash
ollama pull hf.co/dhananjayyy23/shikshaedge-gemma3-gguf
```

### 2. Create the Modelfile
Create a file called `Modelfile` in the project root:
FROM hf.co/dhananjayyy23/shikshaedge-gemma3-gguf
SYSTEM "You are ShikshaEdge, an AI tutor for Indian students Class 1-12.
Follow NCERT and Maharashtra State Board curriculum.
Always respond in the same language the student uses."
PARAMETER temperature 0.7
PARAMETER top_p 0.9

### 3. Register the model
```bash
ollama create shikshaedge -f Modelfile
```

### 4. Install and run
```bash
npm install
node server.js
```

### 5. Open in browser
[Laptop/Pi running ShikshaEdge]
↓
[WiFi Hotspot]
↓
[Student phones/tablets] → browser → http://SERVER_IP:3000

No internet required at any point after initial setup.

---

## Project Links

| Resource | Link |
|----------|------|
| Fine-tuned Model (GGUF) | [HuggingFace](https://huggingface.co/dhananjayyy23/shikshaedge-gemma3-gguf) |
| LoRA Weights | [HuggingFace](https://huggingface.co/dhananjayyy23/shikshaedge-gemma4-e4b) |
| Training Dataset | [Kaggle](https://www.kaggle.com/datasets/dhananjayyyyyy/shikshaedge-ncert-curriculum-dataset) |
| Data Pipeline | [GitHub](https://github.com/dhananjay-234/shikshaedge-data) |

---

## Hardware Requirements

| Device | RAM | Works? |
|--------|-----|--------|
| Raspberry Pi 5 | 8GB | ✅ with Q4 model |
| Budget laptop | 8GB | ✅ |
| Standard laptop | 16GB | ✅ |
| Android phone (Linux) | 6GB+ | ✅ with Q4 model |

---

## License

Apache 2.0 — free to use, modify, and deploy in any school.
