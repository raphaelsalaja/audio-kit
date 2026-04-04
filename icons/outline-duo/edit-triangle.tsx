import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EditTriangle({
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
          d="M7.57429 5.65512C7.70346 5.71598 7.84776 5.75 8.00001 5.75H10C10.1681 5.75 10.3264 5.70855 10.4654 5.63531L14.5285 12.25H13.25C12.6977 12.25 12.25 12.6977 12.25 13.25V14.2938L5.75001 14.2467V13.25C5.75001 12.6977 5.3023 12.25 4.75001 12.25H3.48706L7.57429 5.65512Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.638 5.67999L3.5 12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.362 5.67999L14.5 12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 14.25H12.181"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 1.75H8C7.44772 1.75 7 2.19772 7 2.75V4.75C7 5.30228 7.44772 5.75 8 5.75H10C10.5523 5.75 11 5.30228 11 4.75V2.75C11 2.19772 10.5523 1.75 10 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 12.25H2.75C2.19772 12.25 1.75 12.6977 1.75 13.25V15.25C1.75 15.8023 2.19772 16.25 2.75 16.25H4.75C5.30228 16.25 5.75 15.8023 5.75 15.25V13.25C5.75 12.6977 5.30228 12.25 4.75 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 16.25H15.25C15.8023 16.25 16.25 15.8023 16.25 15.25V13.25C16.25 12.6977 15.8023 12.25 15.25 12.25H13.25C12.6977 12.25 12.25 12.6977 12.25 13.25V15.25C12.25 15.8023 12.6977 16.25 13.25 16.25Z"
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

export default EditTriangle;
