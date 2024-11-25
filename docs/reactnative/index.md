<script setup>
import { withBase } from 'vitepress';
import { reactNative } from './config';

const list = reactNative.items.filter((item) => item.link !== '/reactnative/');
</script>

## Список тем

<ul>
    <li v-for="li in list">
        <a :href="withBase(li.link)">{{ li.text }}</a>
    </li>
</ul>