import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LessThan({
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
          d="M14.8945 2.36639C15.1063 2.72232 14.9895 3.18261 14.6336 3.39447L5.21632 9L14.6336 14.6055C14.9895 14.8174 15.1063 15.2777 14.8945 15.6336C14.6826 15.9895 14.2223 16.1063 13.8664 15.8945L3.36639 9.64447C3.1392 9.50924 3 9.26438 3 9C3 8.73561 3.1392 8.49076 3.36639 8.35553L13.8664 2.10553C14.2223 1.89367 14.6826 2.01046 14.8945 2.36639Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LessThan;
