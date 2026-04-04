import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapXmark({
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
          d="M2.533 3.57597L5.965 2.81297C6.151 2.77197 6.345 2.78397 6.524 2.84897L11.476 4.64997C11.655 4.71497 11.849 4.72797 12.035 4.68597L15.033 4.01997C15.658 3.88097 16.25 4.35597 16.25 4.99597V10.1211L15.25 11.068L14.841 10.659C13.9623 9.7803 12.5377 9.7803 11.659 10.659C10.7803 11.5377 10.7803 12.9623 11.659 13.841L12.068 14.25C11.7977 14.5523 11.581 14.779 11.3191 15.0939L6.524 13.35C6.345 13.285 6.151 13.272 5.965 13.314L2.967 13.98C2.342 14.119 1.75 13.644 1.75 13.004V4.55197C1.75 4.08297 2.076 3.67697 2.533 3.57597Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.25 12.25L17.25 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 12.25L13.25 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9.43332V4.99701C16.25 4.35691 15.658 3.88202 15.033 4.02092L12.035 4.68692C11.849 4.72792 11.655 4.71602 11.476 4.65082L6.52399 2.85003C6.34499 2.78483 6.151 2.77192 5.965 2.81392L2.533 3.57682C2.075 3.67892 1.75 4.08492 1.75 4.55292V13.0029C1.75 13.643 2.342 14.1179 2.967 13.979L5.965 13.313C6.151 13.272 6.34499 13.2839 6.52399 13.3491L10.6249 14.8403"
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

export default MapXmark;
