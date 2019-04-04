const app = getApp();

Page({
  data: {},

  onLoad() {
    app.getUserInfo().then(
      user => {
        this.setData({
          user,
        });
      },
      () => {
        // 获取用户信息失败
      }
    );
  },

  onShow() {
    this.setData({ todos: app.todos });
  },

  onTodoChanged(e) {
    // my.httpRequest({
    //   url: 'http://localhost:8080/bljy/front/bindQRCode', // 目标服务器url
    //   success: (res) => {
    //     console.log(res.data.code)
    //   },
    // });
    console.log(e)
    const checkedTodos = e.detail.value;
    app.todos = app.todos.map(todo => ({
      ...todo,
      // text: "ff",
      completed: checkedTodos.indexOf(todo.text) > -1,
    }));
    this.setData({ todos: app.todos });
  },

  addTodo() {
    my.navigateTo({ url: '../add-todo/add-todo' });
  },
});
