import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapDownload({
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
          d="M5.965 2.81297L2.533 3.57597C2.076 3.67697 1.75 4.08297 1.75 4.55197V13.004C1.75 13.644 2.342 14.119 2.967 13.98L5.965 13.314C6.151 13.272 6.345 13.285 6.524 13.35L8.59456 14.103C8.69794 13.7575 8.88609 13.4319 9.15901 13.159C9.66204 12.656 10.344 12.4409 11 12.5138V12.25C11 11.0074 12.0074 9.99997 13.25 9.99997C14.3773 9.99997 15.3433 10.8291 15.5129 11.9107L16.25 12.2666V4.99597C16.25 4.35597 15.658 3.88097 15.033 4.01997L12.035 4.68597C11.849 4.72797 11.655 4.71497 11.476 4.64997L6.524 2.84897C6.345 2.78397 6.151 2.77197 5.965 2.81297Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 14.75L13.25 17.25L10.75 14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 11.804V4.99709C16.25 4.35699 15.658 3.88209 15.033 4.02099L12.035 4.68699C11.849 4.72799 11.655 4.71608 11.476 4.65088L6.524 2.85009C6.345 2.78489 6.151 2.77198 5.965 2.81398L2.533 3.57689C2.075 3.67899 1.75 4.08498 1.75 4.55298V13.003C1.75 13.6431 2.342 14.118 2.967 13.9791L5.965 13.3131C6.151 13.2721 6.345 13.284 6.524 13.3492L7.9019 13.8499"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 17.25V12.25"
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

export default MapDownload;
