import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BatteryLow({
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
          d="M1 6.25C1 4.73128 2.23069 3.5 3.75 3.5H13.75C15.2693 3.5 16.5 4.73128 16.5 6.25V11.75C16.5 13.2687 15.2693 14.5 13.75 14.5H3.75C2.23069 14.5 1 13.2687 1 11.75V6.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.5 11H17.25C17.6642 11 18 10.6642 18 10.25V7.75C18 7.33579 17.6642 7 17.25 7H16.5V11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.75 6.5C5.16421 6.5 5.5 6.83579 5.5 7.25V10.75C5.5 11.1642 5.16421 11.5 4.75 11.5C4.33579 11.5 4 11.1642 4 10.75V7.25C4 6.83579 4.33579 6.5 4.75 6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BatteryLow;
