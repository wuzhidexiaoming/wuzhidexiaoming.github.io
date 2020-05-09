# vuex使用

- 首先他是单一状态树。

- 使用就是 `new vuex.Store({...options})`

- 使用的话，就是把store对象提供给store选项，所以再main.js中的vue实例需要store选项。可以通过`this.$store`访问这个对象

  ## `vuex.Store`构造器的五个选项

- `state`

  - 存放数据的

- `getters`

  - 存放类似于计算属性的数据，特点带缓存

- `mutations`

  - 在`mutations`中修改`state`的数据

- `actions`

  - 在`actions`中可以异步请求数据并修改`state`或者整合`mutations`
  - 接收`context`参数(包括`state` `rotoState` `commit`等)和第二个参数`payload`

- `modules`

## 如何使用Store中的东西

### 使用state数据

- `this.$store.state.xxx`直接使用
  - 带有`namespaced:true`的，`this.$store.state.moudels.xxx`
- 

### 更改state数据--mutations

- `this.$store.commit('type')` 提交mutation
- `this.$store.commit('modules/type')`

### actions可以做异步请求处理，也可以整合mutations

- `this.$store.dispatch('xxx')` 分发action（**不知道是不是分发这个说法？**）
- `this.$store.dispatch('modules/type')`
  - 在局部中使用`dispatch` `commit`也是将其局部化，就是说`this.$store.dispatch('xxx')`这样直接写使用的都是局部的`xxx`，可以`this.$store.dispatch('xxx',null,{root:true})`这样写就是触发全局的了。
    - 而且局部中的`commit` `dispatch`也不用写模块前缀

## 注意

- 要是state状态中的一个对象添加新属性，可以采用`oldObj={...oldObj,newKey:'value'}` 或者就用`Vue.set(obj,newKey,value)`
- muation就是做原子处理，action可以将其整合起来。

## 疑问

- 带有命名空间`namespaced`的模块，`mutations`中`type`接收的第一个参数为局部`state`,第二个参数`payload`，有没有可以直接访问全局`state`的办法？	
  - 想了想，好像没有模块中mutation操作全局state的需求（这样想的，既然操作全局state那就不要去弄成模块或者直接将全局state中的数据写到局部中）
  - 可以通过`Store`对象解决或者直接在局部中的`mutation`中使用`this` （默认情况下`this`就是全局`Store`对象）