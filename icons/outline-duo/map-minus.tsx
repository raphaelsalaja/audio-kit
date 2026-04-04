import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapMinus({
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
          d="M5.965 2.81297L2.533 3.57597C2.076 3.67697 1.75 4.08297 1.75 4.55197V13.004C1.75 13.644 2.342 14.119 2.967 13.98L5.965 13.314C6.151 13.272 6.345 13.285 6.524 13.35C6.85299 13.4719 9.98578 14.7168 10.0181 14.4632C10.159 13.3559 11.1045 12.5 12.25 12.5H16.25V4.99597C16.25 4.35597 15.658 3.88097 15.033 4.01997L12.035 4.68597C11.849 4.72797 11.655 4.71497 11.476 4.64997L6.524 2.84897C6.345 2.78397 6.151 2.77197 5.965 2.81297Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.25 11.75V4.99709C16.25 4.35699 15.658 3.88209 15.033 4.02099L12.035 4.68699C11.849 4.72799 11.655 4.71608 11.476 4.65088L6.52399 2.85009C6.34499 2.78489 6.151 2.77198 5.965 2.81398L2.53299 3.57689C2.07499 3.67899 1.75 4.08498 1.75 4.55298V13.003C1.75 13.6431 2.34201 14.118 2.96701 13.9791L5.965 13.3131C6.151 13.2721 6.34499 13.284 6.52399 13.3492L9.28989 14.3546"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 14.75H12.25"
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

export default MapMinus;
