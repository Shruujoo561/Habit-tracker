document.getElementById('add-habit-btn').addEventListener('click', () => {
    const habitName = document.getElementById('habit-name').value;
    const habitColor = document.getElementById('habit-color').value;
    if (habitName) {
        addHabit(habitName, habitColor);
        document.getElementById('habit-name').value = '';
    }
});

function addHabit(name, color) {
    const habitList = document.getElementById('habit-list');
    const habit = document.createElement('div');
    habit.classList.add('habit');
    habit.style.backgroundColor = color;

    const habitName = document.createElement('div');
    habitName.classList.add('habit-name');
    habitName.textContent = name;

    const habitDays = document.createElement('div');
    habitDays.classList.add('habit-days');

    for (let i = 0; i < 7; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.textContent = 'S M T W T F S'.split(' ')[i];
        day.addEventListener('click', () => {
            day.classList.toggle('completed');
        });
        habitDays.appendChild(day);
    }

    habit.appendChild(habitName);
    habit.appendChild(habitDays);
    habitList.appendChild(habit);
}

