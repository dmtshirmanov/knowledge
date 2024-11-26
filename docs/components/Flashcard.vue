<template>
    <h1>Проверка понимания материала</h1>
    <div class="flashcard">
        <div v-if="currentCardIndex < cards.length">
            <div class="card">
                <p class="card__text">{{ showAnswer ? currentCard.answer : currentCard.question }}</p>
            </div>
            <button @click="toggleAnswer">{{ showAnswer ? 'Скрыть ответ' : 'Показать ответ' }}</button>

            <div v-if="showAnswer" class="controls">
                <p>Оцените сложность:</p>
                <button @click="markCard(1)">Трудно</button>
                <button @click="markCard(2)">Нормально</button>
                <button @click="markCard(3)">Легко</button>
            </div>
        </div>
        <div v-else>
            <h2>Поздравляем, вы повторили все карточки!</h2>
            <button @click="restart">Начать заново</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed  } from 'vue';

// Пропсы
const props = defineProps({
    cards: {
        type: Array,
        required: true,
    },
});

// Состояние
const currentCardIndex = ref(0);
const showAnswer = ref(false);
const repeatQueue = ref([]);

// Текущая карточка
const currentCard = computed(() => props.cards[currentCardIndex.value]);

// Переключение вопрос/ответ
const toggleAnswer = () => {
    showAnswer.value = !showAnswer.value;
};

// Обработка оценки карточки
const markCard = (difficulty) => {
    // Алгоритм интервального повторения (упрощённый)
    const interval = difficulty === 1 ? 1 : difficulty === 2 ? 3 : 7;

    // Добавляем карточку в очередь повторений через заданный интервал
    const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000; // дни в миллисекундах
    repeatQueue.value.push({ ...currentCard.value, nextReview });

    // Переходим к следующей карточке
    currentCardIndex.value++;
    showAnswer.value = false;
};

// Сброс
const restart = () => {
    currentCardIndex.value = 0;
    showAnswer.value = false;
    repeatQueue.value = [];
};
</script>

<style scoped>
.flashcard {
    font-family: Arial, sans-serif;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.card {
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-size: 1.5rem;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.controls button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    font-size: 1rem;
    margin: 10px;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
}

button:hover {
    background-color: #0056b3;
}

button:focus {
    outline: none;
}

h2 {
    margin-top: 20px;
}

.card__text {
    color: #000;
}
</style>