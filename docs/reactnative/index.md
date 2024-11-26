<script setup>
import { withBase } from 'vitepress';
import { reactNative } from './config';
import Flashcard from '../components/Flashcard.vue';

const list = reactNative.items.filter((item) => item.link !== '/reactnative/');
</script>

# Что такое ReactNative?

Это фреймворк для написания нативных приложений для iOS и Android приложений, где вы можете писать код на React.
Плюсы использования ReactNative это то, что наши React компоненты визиулизируются с помощью host-платформы где запускается наш код.
Это означает, что любой элемент Text, Input будет создан самой платформой iOS или Android и etc.

## Какие нужны базовые знания

- JavaScript
- CSS
- React
- GIT
- [Документация](https://reactnative.dev/docs/getting-started)

В целом это достаточно для старта

## Пример компонента

Самый простой пример отображения текста

```tsx
import React from "react";
import { Text, View } from "react-native";

function Component() {
  return (
    <View>
      <Text>Мой первый текст!</Text>
    </View>
  );
}
```

Таким простым способом мы можем вывести текст в RN

## Roadmap

<ul>
    <li v-for="li in list">
        <a :href="withBase(li.link)">{{ li.text }}</a>
    </li>
</ul>

<Flashcard :cards="reactNative.cards" />
