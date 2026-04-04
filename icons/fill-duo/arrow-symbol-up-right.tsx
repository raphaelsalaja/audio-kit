import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowSymbolUpRight({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M3.74999 15C3.55799 15 3.36599 14.927 3.21999 14.78C2.92699 14.487 2.92699 14.012 3.21999 13.719L13.47 3.46999C13.763 3.17699 14.238 3.17699 14.531 3.46999C14.824 3.76299 14.824 4.238 14.531 4.531L4.27999 14.78C4.13399 14.926 3.94199 15 3.74999 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.25 10.51C13.966 10.51 13.695 10.348 13.568 10.074C12.622 8.02201 12.714 6.22101 12.996 5.00301C11.777 5.28501 9.977 5.376 7.925 4.431C7.549 4.258 7.384 3.81201 7.558 3.43601C7.731 3.06001 8.176 2.894 8.553 3.069C11.517 4.435 13.774 3.15901 13.869 3.10401C14.165 2.93301 14.54 2.98 14.781 3.224C15.021 3.467 15.069 3.84101 14.894 4.13401C14.841 4.22501 13.565 6.484 14.931 9.446C15.104 9.822 14.94 10.268 14.564 10.441C14.462 10.488 14.355 10.51 14.25 10.51Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowSymbolUpRight;
