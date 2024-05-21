import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import {
  Counter,
  Hello
} from './components'

export default defineComponent({
  name: 'App',
  components: {
    Counter,
    Hello,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user.data);
    const name = user.value.name

    return {
      name,
    };
  },
  render() {
    return (
      <div>
        <h1>{this.name}</h1>
        <Counter />
        <Hello msg="Hello" />
      </div>
    );
  },
});