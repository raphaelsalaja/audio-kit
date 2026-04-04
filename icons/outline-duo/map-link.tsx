import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapLink({
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
          d="M5.96484 2.81317C6.15084 2.77217 6.34541 2.78431 6.52441 2.84931L11.4756 4.65009C11.6546 4.71509 11.8492 4.72822 12.0352 4.68622L15.0332 4.0202C15.6581 3.88132 16.2499 4.35593 16.25 4.99579L16.1006 9.79462C15.9047 9.76512 15.7041 9.7497 15.5 9.7497C14.1667 9.7497 12.8333 9.7497 11.5 9.7497C9.37559 9.7497 7.63797 11.4061 7.50781 13.4977L6.52441 13.3503C6.34541 13.2853 6.15084 13.2721 5.96484 13.3141L2.9668 13.9802C2.34188 14.119 1.75 13.6435 1.75 13.0036V4.55243C1.75 4.08343 2.0762 3.67687 2.5332 3.57587L5.96484 2.81317Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12 16.5H11.5C10.5335 16.5 9.75 15.7165 9.75 14.75V13.75C9.75 12.7835 10.5335 12 11.5 12H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 16.5H15.5C16.4665 16.5 17.25 15.7165 17.25 14.75V13.75C17.25 12.7835 16.4665 12 15.5 12H15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9.07592V4.99701C16.25 4.35691 15.658 3.88202 15.033 4.02092L12.035 4.68692C11.849 4.72792 11.655 4.71602 11.476 4.65082L6.524 2.85003C6.345 2.78483 6.151 2.77192 5.965 2.81392L2.533 3.57682C2.075 3.67892 1.75 4.08492 1.75 4.55292V13.0029C1.75 13.643 2.342 14.1179 2.967 13.979L5.965 13.313C6.151 13.272 6.345 13.2839 6.524 13.3491L6.7811 13.4424"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 14.25H14.75"
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

export default MapLink;
