# Doctype作用？标准模式与兼容模式？

- 声明位于HTML文档的第一行，处于标签之前。用来告知浏览器的解析器用什么文档标准解析这个文档。Doctype不存在或者格式不正确会导致文档以兼容模式呈现；

- 标准模式：排版和js运作方式都是以该浏览器支持的最高标准运行；

- 兼容模式：页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法运行；

能否举例说明：

**width不同，**

在标准模式中，width是内容宽度（content）；

在兼容模式中，width是元素的宽度。

---

## 延伸

### html 5中为什么只写 <!DOCTYPE>？

HTML5 不基于SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器行为。

### 那么可以说一下 SGML DTD 分别是什么吗？

