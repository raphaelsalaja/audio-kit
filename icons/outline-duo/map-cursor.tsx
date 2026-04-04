import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapCursor({
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
          d="M5.965 2.81297L2.533 3.57597C2.076 3.67697 1.75 4.08297 1.75 4.55197V13.004C1.75 13.644 2.342 14.119 2.967 13.98L5.965 13.314C6.151 13.272 6.345 13.285 6.524 13.35L8.839 14.1876L9.31776 13.8558L8.65525 11.9035C7.9096 9.86857 9.89461 7.93008 11.8981 8.65457L15.9793 10.1055L16.25 9.71586V4.99597C16.25 4.35597 15.658 3.88097 15.033 4.01997L12.035 4.68597C11.849 4.72797 11.655 4.71497 11.476 4.64997L6.524 2.84897C6.345 2.78397 6.151 2.77197 5.965 2.81297Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.126 10.768L17.066 12.938C17.316 13.029 17.309 13.386 17.055 13.467L14.336 14.337L13.466 17.056C13.385 17.31 13.028 17.317 12.937 17.067L10.767 11.127C10.685 10.904 10.902 10.687 11.126 10.768Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.126 10.768L17.066 12.938C17.316 13.029 17.309 13.386 17.055 13.467L14.336 14.337L13.466 17.056C13.385 17.31 13.028 17.317 12.937 17.067L10.767 11.127C10.685 10.904 10.902 10.687 11.126 10.768Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9.44602V4.99701C16.25 4.35691 15.658 3.88202 15.033 4.02092L12.035 4.68692C11.849 4.72792 11.655 4.71602 11.476 4.65082L6.524 2.85003C6.345 2.78483 6.151 2.77192 5.965 2.81392L2.533 3.57682C2.075 3.67892 1.75 4.08492 1.75 4.55292V13.0029C1.75 13.643 2.342 14.1179 2.967 13.979L5.965 13.313C6.151 13.272 6.345 13.2839 6.524 13.3491L8.6699 14.1294"
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

export default MapCursor;
