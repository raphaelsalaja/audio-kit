import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhotoFrame({
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
          d="M13.25 1.75C13.25 2.854 14.145 3.75 15.25 3.75V14.25C14.145 14.25 13.25 15.146 13.25 16.25H4.75C4.75 15.146 3.855 14.25 2.75 14.25V3.75C3.855 3.75 4.75 2.854 4.75 1.75H13.25ZM12.75 9C12.75 11.6234 11.0711 13.75 9 13.75C6.92893 13.75 5.25 11.6234 5.25 9C5.25 6.37665 6.92893 4.25 9 4.25C11.0711 4.25 12.75 6.37665 12.75 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M15.25 14.25V3.75C14.145 3.75 13.25 2.854 13.25 1.75H4.75C4.75 2.854 3.855 3.75 2.75 3.75V14.25C3.855 14.25 4.75 15.146 4.75 16.25H13.25C13.25 15.146 14.145 14.25 15.25 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25C10.795 13.25 12.25 11.3469 12.25 9C12.25 6.6531 10.795 4.75 9 4.75C7.205 4.75 5.75 6.6531 5.75 9C5.75 11.3469 7.2051 13.25 9 13.25Z"
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

export default PhotoFrame;
