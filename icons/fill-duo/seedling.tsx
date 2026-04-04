import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Seedling({
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
          d="M15.25 4H13C11.6436 4 10.4261 4.5786 9.5598 5.4934C9.6712 5.8962 9.75 6.3122 9.75 6.75V8.25C9.75 8.6641 9.4141 9 9 9V11H10.25C13.4209 11 16 8.4204 16 5.25V4.75C16 4.3359 15.6641 4 15.25 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.75 9H7.75C4.5744 9 2 6.4256 2 3.25V2.75C2 2.3359 2.3359 2 2.75 2H5C7.6234 2 9.75 4.1266 9.75 6.75V9Z"
          fill={fill}
        />
        <path
          d="M9 16C8.5859 16 8.25 15.6641 8.25 15.25V8.75C8.25 8.3359 8.5859 8 9 8C9.4141 8 9.75 8.3359 9.75 8.75V15.25C9.75 15.6641 9.4141 16 9 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Seedling;
