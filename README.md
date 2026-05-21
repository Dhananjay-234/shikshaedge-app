ShikshaEdge — Offline Multilingual AI Tutor

ShikshaEdge is an offline AI tutoring system built for Indian students using the NCERT curriculum. The project uses a fine-tuned Gemma 3 model to answer educational questions in Hindi, Marathi, and English without requiring internet access.

The system is designed for schools and rural areas where internet connectivity is limited or unavailable.

--------------------------------------------------

PROJECT OVERVIEW

ShikshaEdge allows students to connect through local WiFi and access an AI tutor directly from their phones, tablets, or computers.

Key Features:

- Answers NCERT-based Class 1–12 questions
- Supports Hindi, Marathi, and English
- Runs completely offline using Ollama
- Works on laptops and Raspberry Pi devices
- No login or subscription required

--------------------------------------------------

SYSTEM WORKFLOW

Student Device → Local WiFi → ShikshaEdge Server → AI Response

The AI model runs locally on the device, so internet access is not required after setup.

--------------------------------------------------

TECH STACK

- AI Model: Gemma 3 4B (Fine-tuned on NCERT curriculum)
- Local Inference: Ollama
- Backend: Node.js + Express
- Frontend: HTML, CSS, JavaScript
- Training: Unsloth QLoRA on Google Colab

--------------------------------------------------

HARDWARE SUPPORT

Supported Devices:

- Raspberry Pi 5 (8GB)
- Budget laptops (8GB RAM)
- Standard laptops (16GB RAM)
- Android devices with Linux support

--------------------------------------------------

PROJECT LINKS

Fine-tuned Model:
https://huggingface.co/dhananjayyy23/shikshaedge-gemma3-gguf

LoRA Weights:
https://huggingface.co/dhananjayyy23/shikshaedge-gemma4-e4b

Training Dataset:
https://www.kaggle.com/datasets/dhananjayyyyyy/shikshaedge-ncert-curriculum-dataset

Data Pipeline:
https://github.com/dhananjay-234/shikshaedge-data

--------------------------------------------------

CONCLUSION

ShikshaEdge is a multilingual offline AI tutor created to make educational AI accessible for students without reliable internet access. The project combines local AI inference, multilingual support, and curriculum-based training to provide a low-cost educational solution for schools and rural communities.
