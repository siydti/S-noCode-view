/*
 * @Author: Siydti 1570297098@qq.com
 * @Date: 2024-07-11 16:28:34
 * @LastEditors: Siydti 1570297098@qq.com
 * @LastEditTime: 2024-07-12 14:57:18
 * @FilePath: \S-noCode-view\src\components\mobile\PageHeader.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => <header class="page-header">{props.title}</header>;
  },
});
