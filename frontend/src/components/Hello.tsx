import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Test',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const user = computed(() => store.state.user.data);

    return () => (
      <div>
        <h1 class="text-blue-500 bold">{props.msg} {user.value.name}</h1>
      </div>
    );
  }
});