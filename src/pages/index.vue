<script setup lang="ts">
import { useTodosStore } from '~/stores/todos'
// import { useUserStore } from '~/stores/user'

// const user = useUserStore()
const todo = useTodosStore()
// const name = ref(user.savedName)
// const newTodo = reactive({ id: 0, text: 'Vue 3 Guide', isFinished: false })
const newTodo = ref('')

// const router = useRouter()
// const go = () => {
//   if (name.value)
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }
const addTodo = () => {
  if (newTodo.value !== '') {
    todo.addTodo(newTodo.value)
    newTodo.value = ''
  }
}

const { t } = useI18n()
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />

    <!-- <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label> -->

    <input
      id="input"
      v-model="newTodo"
      placeholder="Внесете текст"
      aria-label="Внесете текст"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="addTodo"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button class="m-3 text-sm btn" @click="addTodo">
        Внеси
      </button>
    </div>

    <div v-for="item in todo.todos" :key="item.id">
      <input v-model="item.isFinished" type="checkbox">

      <label for="checkbox">{{ item.text }}</label>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
