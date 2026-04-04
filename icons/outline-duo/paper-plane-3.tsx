import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane3({
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
          d="M9.45799 2.528L15.412 13.994C15.622 14.398 15.244 14.857 14.807 14.727L8.99999 13.006L3.19299 14.727C2.75599 14.856 2.37799 14.398 2.58799 13.994L8.54199 2.528C8.73499 2.157 9.26499 2.157 9.45799 2.528Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 8.614V13.007"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.45799 2.528L15.412 13.994C15.622 14.398 15.244 14.857 14.807 14.727L8.99999 13.006L3.19299 14.727C2.75599 14.856 2.37799 14.398 2.58799 13.994L8.54199 2.528C8.73499 2.157 9.26499 2.157 9.45799 2.528Z"
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

export default PaperPlane3;
