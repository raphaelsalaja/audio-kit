import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LaptopMobile({
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
          d="M4.75 2C3.23079 2 2 3.23079 2 4.75V11.375C2 12.8252 3.17479 14 4.625 14H13.25C14.7688 14 16 12.7688 16 11.25V4.75C16 3.23079 14.7692 2 13.25 2H4.75ZM14.25 9H12.75C12.3358 9 12 8.66421 12 8.25V8H15V8.25C15 8.66421 14.6642 9 14.25 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 13.25C1 12.8358 1.33579 12.5 1.75 12.5H10.75C11.1642 12.5 11.5 12.8358 11.5 13.25C11.5 13.6642 11.1642 14 10.75 14H1.75C1.33579 14 1 13.6642 1 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 7C11.0078 7 10 8.00779 10 9.25V14.75C10 15.9922 11.0078 17 12.25 17H14.75C15.9922 17 17 15.9922 17 14.75V9.25C17 8.00779 15.9922 7 14.75 7H12.25ZM14.25 9H12.75C12.3358 9 12 8.66421 12 8.25V8H15V8.25C15 8.66421 14.6642 9 14.25 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LaptopMobile;
