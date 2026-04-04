import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardPlus({
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
          d="M1 5.75C1 4.23079 2.23079 3 3.75 3H14.25C15.7692 3 17 4.23079 17 5.75V12.128C16.7654 12.0451 16.513 12 16.25 12H16V11.75C16 10.5074 14.9926 9.5 13.75 9.5C12.5074 9.5 11.5 10.5074 11.5 11.75V12H11.25C10.0074 12 9 13.0074 9 14.25C9 14.513 9.04512 14.7654 9.12803 15H3.75C2.23079 15 1 13.7692 1 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path d="M17 6.5H1V8H17V6.5Z" fill={fill} />
        <path
          d="M3.5 11.25C3.5 10.8358 3.83579 10.5 4.25 10.5H7.25C7.66421 10.5 8 10.8358 8 11.25C8 11.6642 7.66421 12 7.25 12H4.25C3.83579 12 3.5 11.6642 3.5 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 11.75C14.5 11.3358 14.1642 11 13.75 11C13.3358 11 13 11.3358 13 11.75V13.5H11.25C10.8358 13.5 10.5 13.8358 10.5 14.25C10.5 14.6642 10.8358 15 11.25 15H13V16.75C13 17.1642 13.3358 17.5 13.75 17.5C14.1642 17.5 14.5 17.1642 14.5 16.75V15H16.25C16.6642 15 17 14.6642 17 14.25C17 13.8358 16.6642 13.5 16.25 13.5H14.5V11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CreditCardPlus;
