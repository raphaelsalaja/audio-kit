import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapLock({
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
          d="M5.965 2.81297L2.533 3.57597C2.076 3.67697 1.75 4.08297 1.75 4.55197V13.004C1.75 13.644 2.342 14.119 2.967 13.98L5.965 13.314C6.151 13.272 6.345 13.285 6.524 13.35C6.74317 13.4287 9.02406 14.3142 9.05718 14.1398C9.22733 13.244 9.76519 12.4784 10.5078 12.0059C10.6336 10.049 12.2614 8.49997 14.25 8.49997C14.8483 8.49997 15.4139 8.64018 15.9158 8.88953C16.4615 9.1606 16.2599 5.3387 16.25 4.99597C16.25 4.35597 15.658 3.88097 15.033 4.01997L12.035 4.68597C11.849 4.72797 11.655 4.71497 11.476 4.64997L6.524 2.84897C6.345 2.78397 6.151 2.77197 5.965 2.81297Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.25 13.75H12.25C11.6977 13.75 11.25 14.1977 11.25 14.75V16.25C11.25 16.8023 11.6977 17.25 12.25 17.25H16.25C16.8023 17.25 17.25 16.8023 17.25 16.25V14.75C17.25 14.1977 16.8023 13.75 16.25 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 13.75H12.25C11.6977 13.75 11.25 14.1977 11.25 14.75V16.25C11.25 16.8023 11.6977 17.25 12.25 17.25H16.25C16.8023 17.25 17.25 16.8023 17.25 16.25V14.75C17.25 14.1977 16.8023 13.75 16.25 13.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 13.75V12.25C12.75 11.422 13.422 10.75 14.25 10.75C15.078 10.75 15.75 11.422 15.75 12.25V13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.24219V4.99709C16.25 4.35699 15.658 3.88209 15.033 4.02099L12.035 4.68699C11.849 4.72799 11.655 4.71608 11.476 4.65088L6.52399 2.85009C6.34499 2.78489 6.151 2.77198 5.965 2.81398L2.533 3.57689C2.075 3.67899 1.75 4.08498 1.75 4.55298V13.003C1.75 13.6431 2.342 14.118 2.967 13.9791L5.965 13.3131C6.151 13.2721 6.34499 13.284 6.52399 13.3492L8.32761 14.0054"
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

export default MapLock;
