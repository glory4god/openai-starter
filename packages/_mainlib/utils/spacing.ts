export function margin({ x, top }: { x?: number; top?: number }) {
  const style: { marginTop?: number; marginRight?: number; marginBottom?: number; marginLeft?: number } = {};
  if (x != null) {
    style.marginLeft = x;
    style.marginRight = x;
  }
  if (top) {
    style.marginTop = top;
  }
  return style;
}

export const marginX24 = margin({ x: 24 });
