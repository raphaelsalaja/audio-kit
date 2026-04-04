import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Purse({
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
          d="M3.98649 4.49365L2.10018 11.235C1.4281 13.6262 3.22531 16 5.71018 16H12.2902C14.7752 16 16.5727 13.6275 15.9002 11.2351L13.9955 4.49188L3.98649 4.49365Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.5 3C8.052 3 8.5 2.552 8.5 2C8.5 1.448 8.052 1 7.5 1C6.948 1 6.5 1.448 6.5 2C6.5 2.552 6.948 3 7.5 3Z"
          fill={fill}
        />
        <path
          d="M10.5 3C11.052 3 11.5 2.552 11.5 2C11.5 1.448 11.052 1 10.5 1C9.948 1 9.5 1.448 9.5 2C9.5 2.552 9.948 3 10.5 3Z"
          fill={fill}
        />
        <path
          d="M8.99995 5.375C6.73299 5.375 4.66606 5.52482 2.83957 5.74463C2.42832 5.79412 2.05482 5.50086 2.00533 5.08961C1.95583 4.67837 2.24909 4.30486 2.66034 4.25537C4.53984 4.02918 6.66691 3.875 8.99995 3.875C11.333 3.875 13.4601 4.02918 15.3396 4.25537C15.7508 4.30486 16.0441 4.67837 15.9946 5.08961C15.9451 5.50086 15.5716 5.79412 15.1603 5.74463C13.3338 5.52482 11.2669 5.375 8.99995 5.375Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Purse;
