const Skill = require('../models/skill.js');

module.exports = {
    index,
    show,
    new: addNewSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    })
}

function show (req, res) {
    res.render('skills/show', {
        skill:Skill.getOne(req.params.id)
    })
}

function addNewSkill (req, res) {
    res.render('skills/new');
}

function create (req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill (req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function update (req, res) {
    console.log('test');
    Skill.updateOne(req.params.id, req.body);
    res.redirect('/skills');
}

function edit (req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id)
    })
}