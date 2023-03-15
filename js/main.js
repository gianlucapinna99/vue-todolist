const app = Vue.createApp({
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (!this.newTask) return;
      this.tasks.push({ text: this.newTask, done: false });
      this.newTask = '';
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
});

app.mount('#app');
