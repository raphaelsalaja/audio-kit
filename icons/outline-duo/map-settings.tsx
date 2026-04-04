import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapSettings({
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
          d="M6.52441 2.84931C6.34541 2.78431 6.15084 2.77217 5.96484 2.81317L2.5332 3.57587C2.0762 3.67687 1.75 4.08343 1.75 4.55243V13.0036C1.75 13.6435 2.34188 14.119 2.9668 13.9802L5.96484 13.3141C6.15084 13.2721 6.34541 13.2853 6.52441 13.3503L8.07422 13.9414L8.50535 13.8436C8.55436 13.1302 8.93596 12.5082 9.49609 12.1315C9.35845 11.4219 9.56218 10.6602 10.1113 10.111L10.2705 9.96552C10.8024 9.52596 11.4886 9.37095 12.1318 9.49579C12.5358 8.89519 13.2217 8.4997 14 8.4997C14.6595 8.4997 15.2749 8.75667 15.6932 9.20059H16.25V4.99579C16.2499 4.35593 15.6581 3.88132 15.0332 4.0202L12.0352 4.68622C11.8492 4.72822 11.6546 4.71509 11.4756 4.65009L6.52441 2.84931Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 10.75V11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.2981 11.7019L15.591 12.409"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 14H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.2981 16.2981L15.591 15.591"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 17.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7019 16.2981L12.409 15.591"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 14H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7019 11.7019L12.409 12.409"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.71531V4.99701C16.25 4.35691 15.658 3.88202 15.033 4.02092L12.035 4.68692C11.849 4.72792 11.655 4.71602 11.476 4.65082L6.524 2.85003C6.345 2.78483 6.151 2.77192 5.965 2.81392L2.533 3.57682C2.075 3.67892 1.75 4.08492 1.75 4.55292V13.0029C1.75 13.643 2.342 14.1179 2.967 13.979L5.965 13.313C6.151 13.272 6.345 13.2839 6.524 13.3491L7.7711 13.8027"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z"
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

export default MapSettings;
