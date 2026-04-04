import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapStar({
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
          d="M2.533 3.57597L5.965 2.81297C6.151 2.77197 6.345 2.78397 6.524 2.84897L11.476 4.64997C11.655 4.71497 11.849 4.72797 12.035 4.68597L15.033 4.01997C15.658 3.88097 16.25 4.35597 16.25 4.99597V10.2083H15.5921L15.5178 10.0725C15.1388 9.30431 14.3566 8.81797 13.5 8.81797C12.6435 8.81797 11.8612 9.30431 11.4822 10.0725L11.0018 11.0463L9.92681 11.2023C9.07919 11.3254 8.37493 11.919 8.11018 12.7335C8.02186 13.0052 7.98044 13.2835 7.9925 13.5576C8.01108 13.98 6.70779 13.41 6.524 13.35C6.345 13.285 6.151 13.272 5.965 13.314L2.967 13.98C2.342 14.119 1.75 13.644 1.75 13.004V4.55197C1.75 4.08297 2.076 3.67697 2.533 3.57597Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.5 11.068L14.504 13.103L16.75 13.429L15.125 15.013L15.509 17.25L13.5 16.194L11.491 17.25L11.875 15.013L10.25 13.429L12.496 13.103L13.5 11.068Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.5 11.068L14.504 13.103L16.75 13.429L15.125 15.013L15.509 17.25L13.5 16.194L11.491 17.25L11.875 15.013L10.25 13.429L12.496 13.103L13.5 11.068Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9.86159V4.99709C16.25 4.35699 15.658 3.88209 15.033 4.02099L12.035 4.68699C11.849 4.72799 11.655 4.71608 11.476 4.65088L6.524 2.85009C6.345 2.78489 6.151 2.77198 5.965 2.81398L2.533 3.57689C2.075 3.67899 1.75 4.08498 1.75 4.55298V13.003C1.75 13.6431 2.342 14.118 2.967 13.9791L5.965 13.3131C6.151 13.2721 6.345 13.284 6.524 13.3492L7.2617 13.6173"
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

export default MapStar;
