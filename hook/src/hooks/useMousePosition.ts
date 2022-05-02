import { onBeforeUnmount, onMounted, ref } from "vue";
export default function () {
  const x = ref(-1);
  const y = ref(-1);

  // founction for tracking mounse position and update value
  const windowClickHandler = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  // track mounse click event after page rendered
  onMounted(() => {
    window.addEventListener("click", windowClickHandler);
  });
  // remove listener when page unmount
  onBeforeUnmount(() => {
    window.removeEventListener("click", windowClickHandler);
  });

  return { x, y };
}
