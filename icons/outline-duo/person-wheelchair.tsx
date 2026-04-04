import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonWheelchair({
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
          d="M5.69634 9.3956C4.27824 9.84272 3.25 11.1684 3.25 12.7342C3.25 14.6672 4.817 16.2342 6.75 16.2342C8.42771 16.2342 9.82972 15.0538 10.1708 13.4781L8.98087 13.3311C7.00416 13.0872 5.58212 11.3472 5.69634 9.3956Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.25 3.75C11.0784 3.75 11.75 3.07843 11.75 2.25C11.75 1.42157 11.0784 0.75 10.25 0.75C9.42157 0.75 8.75 1.42157 8.75 2.25C8.75 3.07843 9.42157 3.75 10.25 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.25 3.75C11.0784 3.75 11.75 3.07843 11.75 2.25C11.75 1.42157 11.0784 0.75 10.25 0.75C9.42157 0.75 8.75 1.42157 8.75 2.25C8.75 3.07843 9.42157 3.75 10.25 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.565 5.75H6.833C6.617 5.75 6.406 5.82 6.233 5.95L4.5 7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.46 9.502C4.167 10.016 3.25 11.273 3.25 12.75C3.25 14.683 4.817 16.25 6.75 16.25C8.343 16.25 9.673 15.178 10.096 13.722"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.551 8.74L10.787 7.17C10.899 6.423 10.32 5.75 9.565 5.75C8.953 5.75 8.433 6.198 8.343 6.803L7.957 9.388C7.832 10.222 8.42 10.995 9.256 11.098L11.951 11.431C12.293 11.473 12.589 11.688 12.734 12.001L14.25 15.249"
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

export default PersonWheelchair;
