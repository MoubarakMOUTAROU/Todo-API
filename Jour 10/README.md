# API ToDo

Une API REST simple pour gérer une liste de tâches, avec stockage en mémoire.

## Technologies utilisées

- Node.js
- Express
- Stockage en mémoire (tableau JavaScript)

## Installation

\`\`\`bash
git clone https://github.com/MoubarakMOUTAROU/Jour10-TodoAPI.git
cd "Jour10-TodoAPI/Jour 10"
npm install
node index.js
\`\`\`

Le serveur démarre sur : `http://localhost:3000`

## 📋 Endpoints (Routes)

| Méthode | URL | Description |
|---------|-----|-------------|
| GET | `/taches` | Récupérer toutes les tâches |
| GET | `/taches/:id` | Récupérer une tâche par ID |
| POST | `/taches` | Créer une nouvelle tâche |
| PUT | `/taches/:id` | Modifier une tâche existante |
| DELETE | `/taches/:id` | Supprimer une tâche |

## 📥 Exemples d'utilisation

### Créer une tâche (POST)

\`\`\`json
POST /taches
{
    "titre": "Apprendre Postman",
    "priorite": "haute"
}
\`\`\`

### Modifier une tâche (PUT)

\`\`\`json
PUT /taches/1
{
    "termine": true
}
\`\`\`

## 🧪 Tests

Les tests ont été effectués avec **Postman**. La collection est disponible dans le dossier `/postman`.

## 👤 Auteur

MoubarakMOUTAROU - [MoubarakMOUTAROU](https://github.com/MoubarakMOUTAROU)