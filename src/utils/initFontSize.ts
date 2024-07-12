/*
 * @Author: Siydti 1570297098@qq.com
 * @Date: 2024-07-11 14:19:18
 * @LastEditors: Siydti 1570297098@qq.com
 * @LastEditTime: 2024-07-11 16:52:48
 * @FilePath: \S-noCode-view\src\utils\initFontSize.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { onMounted, onUnmounted, ref } from "vue";
import { isMobile } from "@/utils/index";

export default () => {
  // 防止频繁触发
  const flag = ref(false);
  const onWindowResize = () => {
    if (!flag.value) {
      flag.value = true;
      setTimeout(() => {
        initFontSize();
        flag.value = false;
      }, 300);
    }
  };

  const initFontSize = () => {
    const _html = document.getElementsByTagName("html")[0];
    if (isMobile()) {
      const viewWidth = document
        .getElementsByTagName("html")[0]
        .getBoundingClientRect().width;
      _html.style.fontSize = viewWidth / (750 / 2) + "px";
    } else {
      _html.style.fontSize = "auto";
    }
  };

  onMounted(() => {
    initFontSize();
    window.addEventListener("resize", onWindowResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", onWindowResize);
  });

  return {};
};
