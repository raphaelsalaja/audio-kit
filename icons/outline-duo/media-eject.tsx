import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaEject({
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
          d="M3.67698 10.95L8.24698 2.697C8.57698 2.102 9.42398 2.102 9.75298 2.697L14.323 10.951C14.645 11.533 14.229 12.251 13.57 12.251H4.42998C3.76998 12.251 3.35498 11.533 3.67698 10.951V10.95Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.67698 10.95L8.24698 2.697C8.57698 2.102 9.42398 2.102 9.75298 2.697L14.323 10.951C14.645 11.533 14.229 12.251 13.57 12.251H4.42998C3.76998 12.251 3.35498 11.533 3.67698 10.951V10.95Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 15.25H3.5"
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

export default MediaEject;
