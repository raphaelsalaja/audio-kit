import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapPosition({
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
          d="M2.533 3.57597L5.965 2.81297C6.151 2.77197 6.345 2.78397 6.524 2.84897L11.476 4.64997C11.655 4.71497 11.849 4.72797 12.035 4.68597L15.033 4.01997C15.658 3.88097 16.25 4.35597 16.25 4.99597C16.25 5.33659 16.2977 8.62598 16.1182 8.58873C15.8379 8.53055 15.5475 8.49997 15.25 8.49997C12.9028 8.49997 11 10.4028 11 12.75C11 13.4048 11.1481 14.025 11.4126 14.579L11.0416 14.993L6.524 13.35C6.345 13.285 6.151 13.272 5.965 13.314L2.967 13.98C2.342 14.119 1.75 13.644 1.75 13.004V4.55197C1.75 4.08297 2.076 3.67697 2.533 3.57597Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 14.75C16.3546 14.75 17.25 13.8546 17.25 12.75C17.25 11.6454 16.3546 10.75 15.25 10.75C14.1454 10.75 13.25 11.6454 13.25 12.75C13.25 13.8546 14.1454 14.75 15.25 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 14.75C16.3546 14.75 17.25 13.8546 17.25 12.75C17.25 11.6454 16.3546 10.75 15.25 10.75C14.1454 10.75 13.25 11.6454 13.25 12.75C13.25 13.8546 14.1454 14.75 15.25 14.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 14.75V17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.85109V4.99709C16.25 4.35699 15.658 3.88209 15.033 4.02099L12.035 4.68699C11.849 4.72799 11.655 4.71608 11.476 4.65088L6.524 2.85009C6.345 2.78489 6.151 2.77198 5.965 2.81398L2.533 3.57689C2.075 3.67899 1.75 4.08498 1.75 4.55298V13.003C1.75 13.6431 2.342 14.118 2.967 13.9791L5.965 13.3131C6.151 13.2721 6.345 13.284 6.524 13.3492L10.7432 14.8831"
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

export default MapPosition;
