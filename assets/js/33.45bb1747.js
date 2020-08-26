(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{378:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue框架常见问题-writing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue框架常见问题-writing"}},[t._v("#")]),t._v(" Vue框架常见问题 (writing)")]),t._v(" "),s("h2",{attrs:{id:"为什么使用vue作为前端框架？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用vue作为前端框架？"}},[t._v("#")]),t._v(" 为什么使用vue作为前端框架？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("双向数据绑定，在数据操作上更简单；")])]),t._v(" "),s("li",[s("p",[t._v("组件化")])]),t._v(" "),s("li",[s("p",[t._v("视图、数据、结构分离；")])]),t._v(" "),s("li",[s("p",[t._v("虚拟DOM，不再使用原生的dom操作节点，减少性能损耗；")])])]),t._v(" "),s("h2",{attrs:{id:"可以说一下vue的生命周期吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可以说一下vue的生命周期吗？"}},[t._v("#")]),t._v(" 可以说一下vue的生命周期吗？")]),t._v(" "),s("p",[t._v("分为8个阶段：创建前/后、挂载前/后、更新前/后、销毁前/后；")]),t._v(" "),s("blockquote",[s("p",[t._v("beforeCreate：vue实例的挂载元素el和数据对象data都为undefined；\ncreated：创建了vue实例的数据对象，但el为undefined；")])]),t._v(" "),s("blockquote",[s("p",[t._v("beforeMount：vue实例的el和data都初始化完成，为虚拟的dom节点，data.message还没替换；\nmounted：vue 实例挂载完成，data.message成功渲染；")])]),t._v(" "),s("blockquote",[s("p",[t._v("当data变化时，会触发beforeUpdate和updated方法；")])]),t._v(" "),s("blockquote",[s("p",[t._v("在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及dom绑定，但是dom结构依然存在。")])]),t._v(" "),s("h2",{attrs:{id:"为什么vue组件中data必须是一个函数？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么vue组件中data必须是一个函数？"}},[t._v("#")]),t._v(" 为什么vue组件中data必须是一个函数？")]),t._v(" "),s("p",[t._v("对象是引用类型，当复用组件时，由于数据对象都指向同一个data对象，当在一个组件中修改data时，其他复用的组件中的data会被同时修改；")]),t._v(" "),s("p",[t._v("使用返回对象的函数，由于每次返回的都是一个新对象，引用地址不同，所以不会出现上面的问题。")]),t._v(" "),s("h2",{attrs:{id:"vue中-v-if-和-v-show有什么区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue中-v-if-和-v-show有什么区别？"}},[t._v("#")]),t._v(" vue中 v-if 和 v-show有什么区别？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("v-if 在条件切换的时候，会对标签进行适当的创建和销毁，而v-show仅在初始化时加载一次。因此v-if比v-show的开销大。")])]),t._v(" "),s("li",[s("p",[t._v("v-if是惰性的，只有在条件为真时才会渲染标签；v-show 无论条件是否成立，都会渲染标签，只是修改了display的值，显示或隐藏；")])])]),t._v(" "),s("h2",{attrs:{id:"computed和watch的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed和watch的区别"}},[t._v("#")]),t._v(" computed和watch的区别")]),t._v(" "),s("h3",{attrs:{id:"computed-计算属性："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed-计算属性："}},[t._v("#")]),t._v(" computed 计算属性：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("支持缓存，只有依赖数据发生改变，才会重新进行计算；")])]),t._v(" "),s("li",[s("p",[t._v("不支持异步，当computed内有异步操作时无效，因此无法监听数据的变化；")])]),t._v(" "),s("li",[s("p",[t._v("computed属性值会默认走缓存，计算属性时基于它们的响应式依赖进行缓存的，也就是基于data中声明过，或者父组件传递的props中的数据通过计算得到的值；")])]),t._v(" "),s("li",[s("p",[t._v("如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般使用computed；")])]),t._v(" "),s("li",[s("p",[t._v("如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的属性都有一个set和一个get方法，当数据变化时，调用set方法；")])])]),t._v(" "),s("h3",{attrs:{id:"watch侦听属性："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch侦听属性："}},[t._v("#")]),t._v(" watch侦听属性：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("不支持缓存，数据发生变化，会直接触发相应的操作；")])]),t._v(" "),s("li",[s("p",[t._v("watch支持异步；")])]),t._v(" "),s("li",[s("p",[t._v("监听的函数接收两个参数，第一个参数是最新的值，第二个参数是输入之前的值；")])]),t._v(" "),s("li",[s("p",[t._v("当一个属性发生变化时，需要执行对应的操作；")])]),t._v(" "),s("li",[s("p",[t._v("监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数：")]),t._v(" "),s("ul",[s("li",[t._v("immediate：组件加载立即触发回调函数执行")])])])]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("watch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  firstName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示在watch里面声明了firstname这个方法之后立即执行handler方法")]),t._v("\n    immediate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("- deep：深入观察，监听器会一层层的向下遍历，给对象的所有属性都加上这个监听器，但是这样性能开销就会非常大，任何修改obj里面一个属性都会触发这个监听器的handler；\n")])])]),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("watch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj.a changed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    immediate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    deep"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优化 直到遇到属性a，才会给a设置监听函数")]),t._v("\nwatch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj.a'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj.a changed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    immediate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// deep: true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("h2",{attrs:{id:"？？？vue-loader-是什么？有哪些用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#？？？vue-loader-是什么？有哪些用途"}},[t._v("#")]),t._v(" ？？？vue-loader 是什么？有哪些用途")]),t._v(" "),s("h2",{attrs:{id:"nexttick是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick是什么？"}},[t._v("#")]),t._v(" $nextTick是什么？")]),t._v(" "),s("p",[t._v("vue实现响应式并不是数据发生变化后dom立即变化，而是按照一定的策略来进行dom更新。")]),t._v(" "),s("p",[t._v("nextTick是在下次DOM 更新循环结束之后执行延迟回调，在修改数据之后使用nextTick，则可以在回调中获取更新后的DOM。")]),t._v(" "),s("h2",{attrs:{id:"v-for-key-的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-for-key-的作用"}},[t._v("#")]),t._v(" v-for key 的作用")]),t._v(" "),s("p",[t._v("key可以用在virtual DOM的diff算法中，对比新旧Vnode。基于key的变化重新排列元素顺序，并且移除key不存在的元素。")]),t._v(" "),s("p",[t._v("key值具有唯一性，只能为String或者Number类型。")]),t._v(" "),s("h2",{attrs:{id:"vue的双向数据绑定原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的双向数据绑定原理"}},[t._v("#")]),t._v(" Vue的双向数据绑定原理")]),t._v(" "),s("p",[t._v("采用数据劫持和发布者-订阅者模式的方式。通过Object.defineProperty() 来劫持各个属性的setter、getter，在数据发生变动时发布消息给订阅者，触发相应的监听回调。")]),t._v(" "),s("blockquote",[s("p",[t._v("1、需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化")])]),t._v(" "),s("blockquote",[s("p",[t._v("2、compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图")])]),t._v(" "),s("blockquote",[s("p",[t._v("3、Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是: ①在自身实例化时往属性订阅器(dep)里面添加自己 ②自身必须有一个update()方法 ③待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。")])]),t._v(" "),s("blockquote",[s("p",[t._v("4、MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。")])]),t._v(" "),s("h2",{attrs:{id:"组件传值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件传值"}},[t._v("#")]),t._v(" 组件传值")]),t._v(" "),s("h3",{attrs:{id:"父传子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父传子"}},[t._v("#")]),t._v(" 父传子")]),t._v(" "),s("p",[t._v("通过props传递")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("父组件： "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("child value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'传递的数据'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n子组件"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("接收数据"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("接受之后使用和data中定义数据使用方式一样\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"子传父"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子传父"}},[t._v("#")]),t._v(" 子传父")]),t._v(" "),s("p",[t._v("在父组件中给子组件绑定一个自定义的事件，子组件通过$emit()触发该事件并传值")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("父组件： "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("child @receive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'receive'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n子组件"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'receive'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'传递的数据'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"兄弟间组件传值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兄弟间组件传值"}},[t._v("#")]),t._v(" 兄弟间组件传值")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("let bus = new Vue();")])]),t._v(" "),s("p",[t._v("A："),s("code",[t._v("methods :{ 函数{bus.$emit(‘自定义事件名’，数据)}")]),t._v(" 发送")]),t._v(" "),s("p",[t._v("B："),s("code",[t._v("created （）{bus.$on(‘A发送过来的自定义事件名’，函数)}")]),t._v(" 进行数据接收")])]),t._v(" "),s("li",[s("p",[t._v("通过vuex")])])]),t._v(" "),s("h2",{attrs:{id:"prop验证和默认值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prop验证和默认值"}},[t._v("#")]),t._v(" prop验证和默认值")]),t._v(" "),s("p",[t._v("在父组件给子组件传值的时候，可以指定该props的默认值及类型，当传递数据类型不正确的时候，会报错。")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    visible"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        required"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"常用的事件修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的事件修饰符"}},[t._v("#")]),t._v(" 常用的事件修饰符")]),t._v(" "),s("ul",[s("li",[s("p",[t._v(".stop 阻止冒泡；")])]),t._v(" "),s("li",[s("p",[t._v(".prevent阻止默认行为；")])]),t._v(" "),s("li",[s("p",[t._v(".self仅绑定元素自身触发；")])]),t._v(" "),s("li",[s("p",[t._v(".once 只触发一次；")])]),t._v(" "),s("li",[s("p",[t._v(".passive滚动事件的默认行为将会立即触发，不能和 .prevent一起使用；")])])]),t._v(" "),s("h2",{attrs:{id:"vue如何获取dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue如何获取dom"}},[t._v("#")]),t._v(" vue如何获取dom")]),t._v(" "),s("p",[t._v("先给标签设置一个ref值，在通过this.$refs.domName获取")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div ref"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"v-on可以监听多个方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-on可以监听多个方法"}},[t._v("#")]),t._v(" v-on可以监听多个方法")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("on"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{ input: onInput, focus: onFocus, blur: onBlur}"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);