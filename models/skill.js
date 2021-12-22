const skills = [
    {id: 115114, skill: 'JavaScript', months: 2, learned: 'Codecademy'},
    {id: 238957, skill: 'Typing', months: 144, learned: 'High School'},
    {id: 190077, skill: 'Documentation', months: 60, learned: 'BYU'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    if (isNaN(parseInt(skill.months))) {
        skill.months = 0;
    }
    else {
        skill.months = parseInt(skill.months);
    }
    if (skill.learned === '') {
        skill.learned = 'Unknown';
    }
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function updateOne(id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id = parseInt(id);
    if (isNaN(parseInt(skill.months))) {
        skill.months = 0;
    }
    else {
        skill.months = parseInt(skill.months);
    }
    skills.splice(idx, 1, skill);
}