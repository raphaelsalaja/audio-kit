import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SplitObjX({
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
          d="M4.75 16C3.23079 16 2 14.7692 2 13.25L2 4.75C2 3.23079 3.23079 2 4.75 2L8.75 2C9.16421 2 9.5 2.33579 9.5 2.75L9.5 15.25C9.5 15.6642 9.16421 16 8.75 16L4.75 16Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 2.75C11 2.33579 11.3358 2 11.75 2L13.25 2C14.7692 2 16 3.23079 16 4.75L16 6.75C16 7.16421 15.6642 7.5 15.25 7.5C14.8358 7.5 14.5 7.16421 14.5 6.75L14.5 4.75C14.5 4.05921 13.9408 3.5 13.25 3.5L11.75 3.5C11.3358 3.5 11 3.16421 11 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11 15.25C11 14.8358 11.3358 14.5 11.75 14.5L13.25 14.5C13.9408 14.5 14.5 13.9408 14.5 13.25L14.5 11.25C14.5 10.8358 14.8358 10.5 15.25 10.5C15.6642 10.5 16 10.8358 16 11.25L16 13.25C16 14.7692 14.7692 16 13.25 16L11.75 16C11.3358 16 11 15.6642 11 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.75 17.5C8.33579 17.5 8 17.1642 8 16.75L8 1.25C8 0.835787 8.33579 0.5 8.75 0.5C9.16421 0.5 9.5 0.835787 9.5 1.25L9.5 16.75C9.5 17.1642 9.16421 17.5 8.75 17.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SplitObjX;
