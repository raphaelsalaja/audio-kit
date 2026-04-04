import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapSearch({
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
          d="M2.533 3.57597L5.965 2.81297C6.151 2.77197 6.345 2.78397 6.524 2.84897L11.476 4.64997C11.655 4.71497 11.849 4.72797 12.035 4.68597L15.033 4.01997C15.658 3.88097 16.25 4.35597 16.25 4.99597C16.25 5.43973 16.3236 9.62138 15.9345 9.43584C15.3484 9.1564 14.6925 8.99997 14 8.99997C11.5147 8.99997 9.5 11.0147 9.5 13.5C9.5 13.6935 9.51222 13.8842 9.53593 14.0713L9.22353 14.3318L6.524 13.35C6.345 13.285 6.151 13.272 5.965 13.314L2.967 13.98C2.342 14.119 1.75 13.644 1.75 13.004V4.55197C1.75 4.08297 2.076 3.67697 2.533 3.57597Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 15.75C15.2426 15.75 16.25 14.7426 16.25 13.5C16.25 12.2574 15.2426 11.25 14 11.25C12.7574 11.25 11.75 12.2574 11.75 13.5C11.75 14.7426 12.7574 15.75 14 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.59 15.09L17.25 16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.77639V4.99709C16.25 4.35699 15.658 3.88209 15.033 4.02099L12.035 4.68699C11.849 4.72799 11.655 4.71608 11.476 4.65088L6.524 2.85009C6.345 2.78489 6.151 2.77198 5.965 2.81398L2.533 3.57689C2.075 3.67899 1.75 4.08498 1.75 4.55298V13.003C1.75 13.6431 2.342 14.118 2.967 13.9791L5.965 13.3131C6.151 13.2721 6.345 13.284 6.524 13.3492L8.81911 14.1834"
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

export default MapSearch;
