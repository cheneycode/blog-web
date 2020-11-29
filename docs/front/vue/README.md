# 1.v-if和v-show的区别

**共同点：**

`v-if` 和 `v-show` 都是动态显示DOM元素。

**区别：**

`1、编译过程： ` v-if 是 真正 的 条件渲染，因为它会确保在切换过程中条件块内的`事件监听器`和`子组件`适当地`被销毁`和`重建`。`v-show` 的元素`始终会`被渲染并保留`在 DOM 中`。`v-show` 只是简单地`切换`元素的 CSS 属性` display`。

`2、编译条件：` v-if 是惰性的：如果在初始渲染时条件为假，则什么也不做。直到条件第一次变为真时，才会开始渲染条件块。`v-show`不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

`3、性能消耗：`  v-if有更高的切换消耗。v-show有更高的`初始渲染消耗`。

`4、应用场景：`  v-if适合运行时条件很少改变时使用。v-show适合频繁切换。


# 2.vue常用的修饰符

**v-on 指令常用修饰符：**
* .stop - 调用 event.stopPropagation()，禁止事件冒泡。
* .prevent - 调用 event.preventDefault()，阻止事件默认行为。
* .capture - 添加事件侦听器时使用 capture 模式。
* .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
* .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
* .native - 监听组件根元素的原生事件。
* .once - 只触发一次回调。
* .left - (2.2.0) 只当点击鼠标左键时触发。
* .right - (2.2.0) 只当点击鼠标右键时触发。
* .middle - (2.2.0) 只当点击鼠标中键时触发。
* .passive - (2.3.0) 以 { passive: true } 模式添加侦听器

**注意：** 如果是在自己封装的组件或者是使用一些第三方的UI库时，会发现并不起效果，这时就需要用`·.native修饰符了，如：
```
//使用示例：
&lt;el-input
  v-model=&quot;inputName&quot;
  placeholder=&quot;搜索你的文件&quot;
  @keyup.enter.native=&quot;searchFile(params)&quot;
  &gt;
&lt;/el-input&gt;
```

**v-bind 指令常用修饰符：**

* .prop - 被用于绑定 DOM 属性 (property)。(差别在哪里？)
* .camel - (2.1.0+) 将 kebab-case 特性名转换为 camelCase. (从 2.1.0 开始支持)
* .sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器。

**v-model 指令常用修饰符：**

* .lazy - 取代 input 监听 change 事件
* .number - 输入字符串转为数字
* .trim - 输入首尾空格过滤



# 3.vue中key值的作用


&lt;span style=&quot;color:#4183c4;&quot;&gt; key值：&lt;/span&gt;用于 管理可复用的元素。因为`Vue` 会尽可能高效地渲染元素，通常会&lt;span style=&quot;color:#4183c4;&quot;&gt;复用已有元素&lt;/span&gt;而不是从头开始渲染。这么做使 Vue 变得非常快，但是这样也不总是符合实际需求。

&gt; 2.2.0+ 的版本里，当在组件中使用 v-for 时，key 现在是必须的。


**例如，如果你允许用户在不同的登录方式之间切换：**
```
&lt;template v-if=&quot;loginType === &#039;username&#039;&quot;&gt;
  &lt;label&gt;Username&lt;/label&gt;
  &lt;input placeholder=&quot;Enter your username&quot;&gt;
&lt;/template&gt;

&lt;template v-else&gt;
  &lt;label&gt;Email&lt;/label&gt;
  &lt;input placeholder=&quot;Enter your email address&quot;&gt;
&lt;/template&gt;
```
那么在上面的代码中切换&lt;span style=&quot;color:#4183c4;&quot;&gt;loginType&lt;/span&gt;` loginType` 将&lt;span style=&quot;color:#4183c4;&quot;&gt;不会清除用户已经输入的内容&lt;/span&gt;。因为两个模板使用了&lt;span style=&quot;color:#4183c4;&quot;&gt;相同的元素&lt;/span&gt;，&lt;span style=&quot;color:#4183c4;&quot;&gt;&lt;input&gt; `&lt;/span&gt;不会被替换掉，仅仅是`替换了它的 placeholder`。

这样也不总是符合实际需求，所以` Vue `为你提供了一种方式来表达&lt;span style=&quot;color:#4183c4;&quot;&gt;`这两个元素是完全独立的，不要复用它们`&lt;/span&gt;。只需&lt;span style=&quot;color:#4183c4;&quot;&gt;`添加`&lt;/span&gt;一个具有&lt;span style=&quot;color:#4183c4;&quot;&gt;`唯一值的 key 属性`&lt;/span&gt;即可：

```
&lt;template v-if=&quot;loginType === &#039;username&#039;&quot;&gt;
  &lt;label&gt;Username&lt;/label&gt;
  &lt;input placeholder=&quot;Enter your username&quot; key=&quot;username-input&quot;&gt;
&lt;/template&gt;

&lt;template v-else&gt;
  &lt;label&gt;Email&lt;/label&gt;
  &lt;input placeholder=&quot;Enter your email address&quot; key=&quot;email-input&quot;&gt;
&lt;/template&gt;
```
现在，每次切换时，输入框都将被&lt;span style=&quot;color:#4183c4;&quot;&gt;`重新渲染`&lt;/span&gt;。