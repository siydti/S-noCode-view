/*
 * @Author: Siydti 1570297098@qq.com
 * @Date: 2024-07-11 13:52:14
 * @LastEditors: Siydti 1570297098@qq.com
 * @LastEditTime: 2024-07-12 14:59:28
 * @FilePath: \S-noCode-view\src\utils\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 判断当前运行环境是不是移动端
 */
export const isMobile = (): boolean => {
  const userAgent: string =
    navigator.userAgent ?? navigator.vendor ?? (window as any).opera ?? "";

  // 常见的移动端浏览器User-Agent片段
  const mobileAgents = [
    "Android",
    "BlackBerry",
    "iPhone",
    "iPad",
    "iPod",
    "Opera Mini",
    "IEMobile",
    "Windows Phone",
    "Nokia",
    "Samsung",
    "Chrome/Blink", // 某些Chrome on Android设备
  ];

  // 检查User-Agent是否包含上述任何一个片段
  return mobileAgents.some((agent) => userAgent.includes(agent));
};
