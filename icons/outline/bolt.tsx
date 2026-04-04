import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bolt({
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
          d="M14.7505 7.25H9.49905L9.81065 1.9868C9.82325 1.7732 9.55085 1.6734 9.42255 1.8446L3.04965 10.3501C2.92615 10.5149 3.04376 10.75 3.24976 10.75H8.50115L8.18955 16.0132C8.17695 16.2268 8.44935 16.3266 8.57765 16.1554L14.9506 7.6499C15.0741 7.4851 14.9565 7.25 14.7505 7.25Z"
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

export default Bolt;
