const express = require('express');
const { Ollama } = require('ollama');
const cors = require('cors');
const path = require('path');

const app = express();
const ollama = new Ollama();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const SYSTEM_PROMPT = `You are ShikshaEdge, an AI tutor for Indian students from Class 1 to 12.
You follow NCERT and Maharashtra State Board curriculum.

You can answer questions about ANY school subject including:
- Science (Physics, Chemistry, Biology) — Class 1 to 12
- Mathematics — Class 1 to 12
- Social Studies, History, Geography, Civics — Class 1 to 12
- English Language and Literature — Class 1 to 12
- Hindi Language and Literature — Class 1 to 12
- Environmental Studies (EVS) — Class 1 to 5
- Computer Science basics — Class 6 to 12 (only school curriculum topics)
- Economics, Political Science, Accountancy — Class 11 to 12

Always respond in the same language the student uses.
If Hindi — respond in Hindi. If Marathi — respond in Marathi. If English — respond in English.
Keep answers accurate, clear, and appropriate for the student's grade level.
Be encouraging, patient, and supportive.

If a student asks about anything completely unrelated to school education 
(like adult topics, harmful content, or purely entertainment topics) 
politely redirect them:
"मैं एक शैक्षिक AI हूँ। I'm an educational AI — please ask me anything about your school subjects! 😊"`;

app.post('/chat', async (req, res) => {
    const { message, history } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    // Build message history for context
    const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...(history || []),
        { role: 'user', content: message }
    ];

    // Set up streaming response
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    try {
        const stream = await ollama.chat({
            model: 'shikshaedge',            messages: messages,
            stream: true,
        });

        for await (const chunk of stream) {
            const content = chunk.message?.content || '';
            if (content) {
                res.write(`data: ${JSON.stringify({ content })}\n\n`);
            }
        }

        res.write('data: [DONE]\n\n');
        res.end();

    } catch (error) {
        console.error('Ollama error:', error.message);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Model error: ' + error.message });
        } else {
            res.write(`data: ${JSON.stringify({ error: error.message })}\n\n`);
            res.end();
        }
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', model: 'gemma3:4b' });
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`ShikshaEdge running at http://localhost:${PORT}`);
    console.log(`Students can connect at http://YOUR_IP:${PORT}`);
});