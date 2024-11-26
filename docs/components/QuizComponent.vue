<template>
    <div class="quiz">
      <div v-if="currentQuestionIndex < questions.length">
        <h2>Вопрос {{ currentQuestionIndex + 1 }} из {{ questions.length }}</h2>
        <p>{{ questions[currentQuestionIndex].question }}</p>
        
        <ul>
          <li v-for="(answer, index) in questions[currentQuestionIndex].answers" :key="index">
            <button @click="selectAnswer(index)">{{ answer }}</button>
          </li>
        </ul>
        
        <p v-if="feedback">{{ feedback }}</p>
      </div>
      
      <div v-else>
        <h2>Вы завершили викторину!</h2>
        <p>Ваш результат: {{ score }} из {{ questions.length }}</p>
        <button @click="resetQuiz">Начать заново</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Получаем props
  const props = defineProps({
    questions: {
      type: Array,
      required: true,
    },
  });
  
  // Состояние
  const currentQuestionIndex = ref(0);
  const score = ref(0);
  const feedback = ref('');
  
  // Методы
  const selectAnswer = (index) => {
    const correctAnswer = props.questions[currentQuestionIndex.value].correct; // Используем props.questions
    if (index === correctAnswer) {
      feedback.value = 'Правильно!';
      score.value++;
    } else {
      feedback.value = 'Неправильно. Попробуйте следующий вопрос.';
    }
  
    // Переход к следующему вопросу
    setTimeout(() => {
      feedback.value = '';
      currentQuestionIndex.value++;
    }, 1000);
  };
  
  const resetQuiz = () => {
    currentQuestionIndex.value = 0;
    score.value = 0;
    feedback.value = '';
  };
  </script>
  
  <style scoped>
  .quiz {
    font-family: Arial, sans-serif;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  h2 {
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  button:focus {
    outline: none;
  }
  
  p {
    margin-top: 1rem;
  }
  </style>
  