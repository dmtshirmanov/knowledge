const path = "/reactnative";

enum ReactNativePaths {
  BASE = path,
  CORE = `${path}/core`,
}

const CORE = {
  text: "Базовые элементы",
  link: ReactNativePaths.CORE,
  items: [],
};

const items = [CORE];

export const reactNative = {
  text: "ReactNative",
  link: ReactNativePaths.BASE,
  items,
  cards: [
    {
      question: "Что такое ReactNative?",
      answer: "Фреймворк для написания нативных приложений для iOS и Android",
    },
  ],
};
