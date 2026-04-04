import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VolumeDisabled({
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
          d="M2.25 5.75H5L10.48 2.243C10.813 2.03 11.25 2.269 11.25 2.664V4.2358C9.60605 5.18678 8.5 6.96422 8.5 9C8.5 11.0358 9.60605 12.8132 11.25 13.7642V15.337C11.25 15.732 10.813 15.971 10.48 15.758L5 12.25H2.25C1.422 12.25 0.75 11.578 0.75 10.75V7.25C0.75 6.422 1.422 5.75 2.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.25 3.952V2.664C11.25 2.269 10.813 2.03 10.48 2.243L5 5.751H2.25C1.422 5.751 0.75 6.423 0.75 7.251V10.751C0.75 11.579 1.422 12.251 2.25 12.251H5L10.48 15.759C10.813 15.972 11.25 15.733 11.25 15.338V14.05"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 12.25C15.7949 12.25 17.25 10.7949 17.25 9C17.25 7.20507 15.7949 5.75 14 5.75C12.2051 5.75 10.75 7.20507 10.75 9C10.75 10.7949 12.2051 12.25 14 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.702 11.298L16.292 6.708"
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

export default VolumeDisabled;
