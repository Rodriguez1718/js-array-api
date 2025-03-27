const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(express.json());

// array to store data
let pets = [
    { id : 1, name : 'Rex', type : "Dog"},
    { id : 2, name : 'Xella', type : "Cat"}
];

// get all pets
app.get("/pets", (req, res) => {
    res.json(pets);
});

// get a specific pet
app.get("/pets/:id", (req, res) => {
    const pet = pets.find(p => p.id === parseInt(req.params.id));
    pet ? res.json(pet) : res.status(404).json({ message : "Pet not found"});
});

// add a new pet
app.post("/pets", (req, res) => {
    const { name, type } = req.body;
    const newPet = { id: pets.length + 1, name, type };
    pets.push(newPet);
    res.status(201).json(newPet);
});

// update a pet
app.put("/pets/:id", (req, res) => {
    const pet = pets.find(p => p.id === parseInt(req.params.id));
    if (pet) {
        pet.name = req.body.name || pet.name;
        pet.type = req.body.type || pet.type;
        res.json(pet);
    } else {
        res.status(404).json({ message : "Pet not found"});
    }
});

// delete a pet
app.delete("/pets/:id", (req, res) => {
    const petIndex = pets.findIndex(p => p.id === parseInt(req.params.id));
    if (petIndex !== -1) {
        pets.splice(petIndex, 1);
        res.json({ message : "Pet removed"});
    } else {
        res.status(404).json({ message : "Pet not found"});
    }
});

// start server
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));