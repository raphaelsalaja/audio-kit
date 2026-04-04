import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Yoga({
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
          d="M15.75 17.5H2.25C1.836 17.5 1.5 17.164 1.5 16.75C1.5 16.336 1.836 16 2.25 16H15.75C16.164 16 16.5 16.336 16.5 16.75C16.5 17.164 16.164 17.5 15.75 17.5Z"
          fill={fill}
        />
        <path
          d="M9 4.5C10.1046 4.5 11 3.60457 11 2.5C11 1.39543 10.1046 0.5 9 0.5C7.89543 0.5 7 1.39543 7 2.5C7 3.60457 7.89543 4.5 9 4.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.25 9.293C12.929 9.293 12.607 9.171 12.363 8.927L11.497 8.061V10.994L13.451 11.781C14.086 12.036 14.497 12.644 14.497 13.33C14.497 14.25 13.748 15 12.827 15H11.1536C11.4796 14.494 11.7069 13.6649 11.2815 12.3888C10.9351 14.0185 10.0712 15 8.95694 15H5.167C4.247 15 3.497 14.251 3.497 13.33C3.497 12.645 3.908 12.036 4.544 11.781L6.497 10.994V8.061L5.631 8.927C5.143 9.414 4.35 9.414 3.863 8.927L2.217 7.281C1.924 6.988 1.924 6.513 2.217 6.22C2.51 5.927 2.985 5.927 3.278 6.22L4.748 7.69L6.132 6.306C6.652 5.786 7.342 5.5 8.077 5.5H9.92C10.655 5.5 11.345 5.786 11.865 6.306L13.249 7.69L14.719 6.22C15.012 5.927 15.487 5.927 15.78 6.22C16.073 6.513 16.073 6.988 15.78 7.281L14.134 8.927C13.89 9.171 13.571 9.293 13.25 9.293Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Yoga;
