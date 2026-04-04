import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScooterDelivery({
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
          d="M16.75 6.25H15C14.0335 6.25 13.25 5.4665 13.25 4.5C13.25 3.5335 14.0335 2.75 15 2.75H16.75V6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 1.25H2.75C2.198 1.25 1.75 1.698 1.75 2.25V5.25C1.75 5.802 2.198 6.25 2.75 6.25H5.75C6.302 6.25 6.75 5.802 6.75 5.25V2.25C6.75 1.698 6.302 1.25 5.75 1.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.8703 12.25C15.1129 12.6091 15.25 13.034 15.25 13.5C15.25 14.7426 14.2426 15.75 13 15.75C11.7574 15.75 10.75 14.7426 10.75 13.5C10.75 13.0372 10.8897 12.607 11.1294 12.2493"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.8703 12.25C7.1129 12.6091 7.25 13.034 7.25 13.5C7.25 14.7426 6.2426 15.75 5 15.75C3.7574 15.75 2.75 14.7426 2.75 13.5C2.75 13.0372 2.88969 12.607 3.12939 12.2493"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.9254 8.75C16.162 9.7958 16.2715 10.9613 16.25 12.25H1.75V11.25C1.75 8.4886 3.9886 6.25 6.75 6.25H8.75V9.75H10.25C11.9069 9.75 13.25 8.4069 13.25 6.75V4.25H11"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 1.25H2.75C2.198 1.25 1.75 1.698 1.75 2.25V5.25C1.75 5.802 2.198 6.25 2.75 6.25H5.75C6.302 6.25 6.75 5.802 6.75 5.25V2.25C6.75 1.698 6.302 1.25 5.75 1.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 1.25V2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 6.25H15C14.0335 6.25 13.25 5.4665 13.25 4.5C13.25 3.5335 14.0335 2.75 15 2.75H16.75V6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8703 12.25C15.1129 12.6091 15.25 13.034 15.25 13.5C15.25 14.7426 14.2426 15.75 13 15.75C11.7574 15.75 10.75 14.7426 10.75 13.5C10.75 13.0372 10.8897 12.607 11.1294 12.2493"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.8703 12.25C7.1129 12.6091 7.25 13.034 7.25 13.5C7.25 14.7426 6.2426 15.75 5 15.75C3.7574 15.75 2.75 14.7426 2.75 13.5C2.75 13.0372 2.88969 12.607 3.12939 12.2493"
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

export default ScooterDelivery;
