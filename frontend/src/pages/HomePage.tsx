import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'HomePage',
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
        <h1 className="bold text-red-500">Home</h1>
        <h2 className="text-blue-500 bold">{props.msg} {user.value.name}</h2>
      </div>
    );
  }
});