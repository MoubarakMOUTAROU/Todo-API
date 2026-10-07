const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// --- BASE DE DONNÉES EN MÉMOIRE ---
let taches = [
    { id: 1, titre: "Apprendre Express", termine: false, priorite: "haute", dateCreation: "2026-10-07" },
    { id: 2, titre: "Faire les courses", termine: true, priorite: "basse", dateCreation: "2026-10-06" },
    { id: 3, titre: "Réviser le CRUD", termine: false, priorite: "moyenne", dateCreation: "2026-10-07" }
];
let prochainId = 4;

// --- ROUTES CRUD ---

// 1. GET - Voir toutes les tâches
app.get('/taches', (req, res) => {
    res.status(200).json({
        nombre: taches.length,
        taches: taches
    });
});

// 2. GET - Voir une tâche par ID
app.get('/taches/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tache = taches.find(t => t.id === id);
    if (!tache) {
        return res.status(404).json({ message: "Tâche non trouvée" });
    }
    res.status(200).json(tache);
});

// 3. POST - Créer une nouvelle tâche
app.post('/taches', (req, res) => {
    const { titre, priorite } = req.body;
    if (!titre) {
        return res.status(400).json({ message: "Le titre est obligatoire" });
    }
    const nouvelleTache = {
        id: prochainId++,
        titre: titre,
        termine: false,
        priorite: priorite || "moyenne",
        dateCreation: new Date().toISOString().split('T')[0]
    };
    taches.push(nouvelleTache);
    res.status(201).json(nouvelleTache);
});

// 4. PUT - Modifier une tâche
app.put('/taches/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { titre, termine, priorite } = req.body;
    const index = taches.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Tâche non trouvée" });
    }
    if (titre) taches[index].titre = titre;
    if (termine !== undefined) taches[index].termine = termine;
    if (priorite) taches[index].priorite = priorite;
    res.status(200).json(taches[index]);
});

// 5. DELETE - Supprimer une tâche
app.delete('/taches/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = taches.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Tâche non trouvée" });
    }
    const supprime = taches.splice(index, 1);
    res.status(200).json({ message: "Tâche supprimée", tache: supprime[0] });
});

// --- DÉMARRAGE ---
app.listen(PORT, () => {
    console.log(`✅ API ToDo démarrée sur http://localhost:${PORT}`);
});