import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowSymbolDown({
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
          d="M9 15.75C8.586 15.75 8.25 15.414 8.25 15V2.75C8.25 2.336 8.586 2 9 2C9.414 2 9.75 2.336 9.75 2.75V15C9.75 15.414 9.414 15.75 9 15.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00101 15.998H8.996C8.654 15.996 8.357 15.766 8.273 15.434C8.246 15.332 7.55001 12.833 4.49001 11.704C4.10101 11.56 3.90301 11.129 4.04601 10.741C4.19101 10.353 4.62 10.154 5.01 10.297C7.13 11.079 8.338 12.417 9 13.478C9.662 12.417 10.87 11.08 12.99 10.297C13.383 10.154 13.81 10.353 13.954 10.741C14.097 11.13 13.898 11.561 13.51 11.704C10.449 12.833 9.754 15.333 9.726 15.438C9.639 15.767 9.34101 15.998 9.00101 15.998Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowSymbolDown;
