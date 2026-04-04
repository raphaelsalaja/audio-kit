import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowSymbolUpLeft({
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
          d="M14.25 15C14.058 15 13.866 14.927 13.72 14.78L3.46999 4.52999C3.17699 4.23699 3.17699 3.76199 3.46999 3.46899C3.76299 3.17599 4.23799 3.17599 4.53099 3.46899L14.78 13.72C15.073 14.013 15.073 14.488 14.78 14.781C14.634 14.927 14.442 15.001 14.25 15.001V15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75 10.51C3.645 10.51 3.538 10.488 3.437 10.441C3.06 10.268 2.896 9.822 3.07 9.446C4.435 6.483 3.159 4.22501 3.104 4.13001C2.932 3.83501 2.981 3.459 3.224 3.218C3.466 2.977 3.839 2.931 4.134 3.105C4.226 3.158 6.483 4.43499 9.447 3.06799C9.819 2.89499 10.267 3.058 10.442 3.435C10.615 3.811 10.451 4.25699 10.074 4.42999C8.022 5.37599 6.221 5.284 5.004 5.002C5.285 6.22 5.377 8.021 4.431 10.073C4.305 10.347 4.034 10.51 3.75 10.51Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowSymbolUpLeft;
