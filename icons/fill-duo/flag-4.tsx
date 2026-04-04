import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag4({
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
          d="M3.32133 1.88457C3.52266 1.74434 3.77985 1.71145 4.00999 1.7965L14.2408 5.57743C15.3303 5.97976 15.3304 7.52004 14.241 7.92249L4.00999 11.7035C3.77985 11.7885 3.52266 11.7557 3.32133 11.6154C3.12001 11.4752 3 11.2453 3 11V2.5C3 2.25465 3.12001 2.02481 3.32133 1.88457Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.75 1C4.16421 1 4.5 1.33579 4.5 1.75V16.25C4.5 16.6642 4.16421 17 3.75 17C3.33579 17 3 16.6642 3 16.25V1.75C3 1.33579 3.33579 1 3.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Flag4;
