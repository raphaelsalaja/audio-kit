import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pyramid({
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
          d="M8.96334 1.75043C8.67465 1.76097 8.38978 1.8945 8.198 2.151L2.341 9.989C2.014 10.427 2.102 11.046 2.539 11.376L8.395 15.798C8.56376 15.9253 8.76274 15.9926 8.96334 15.9998V1.75043Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 1.751V15.999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.802 2.151L15.659 9.989C15.986 10.427 15.898 11.046 15.461 11.376L9.604 15.798C9.247 16.068 8.753 16.068 8.395 15.798L2.539 11.376C2.102 11.046 2.014 10.427 2.341 9.989L8.198 2.151C8.598 1.616 9.403 1.616 9.803 2.151H9.802Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Pyramid;
