import { defineComponent } from 'vue';

import {
  Counter,
  Hello
} from './components'
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    Counter,
    Hello,
  },
  render() {
    return (
      <div>
        <Hello msg="Hello" />
        <RouterView />
      </div>
    );
  },
});