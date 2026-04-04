import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VolumeDown({
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
          d="M7 5.75H3.75C2.922 5.75 2.25 6.422 2.25 7.25V10.75C2.25 11.578 2.922 12.25 3.75 12.25H7L12.48 15.758C12.813 15.971 13.25 15.732 13.25 15.337V2.664C13.25 2.269 12.813 2.03 12.48 2.243L7 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7 5.75H3.75C2.922 5.75 2.25 6.422 2.25 7.25V10.75C2.25 11.578 2.922 12.25 3.75 12.25H7L12.48 15.758C12.813 15.971 13.25 15.732 13.25 15.337V2.664C13.25 2.269 12.813 2.03 12.48 2.243L7 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 7.586C16.531 8.367 16.531 9.633 15.75 10.414"
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

export default VolumeDown;
