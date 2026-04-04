import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AddItem({
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
          d="M10.128 2.5H4.25C2.73079 2.5 1.5 3.73079 1.5 5.25V13.75C1.5 15.2692 2.73079 16.5 4.25 16.5H12.75C14.2692 16.5 15.5 15.2692 15.5 13.75V7.87197C15.2654 7.95488 15.013 8 14.75 8C13.5074 8 12.5 6.99264 12.5 5.75V5.5H12.25C11.0074 5.5 10 4.49264 10 3.25C10 2.98702 10.0451 2.73458 10.128 2.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.5 0.75C15.5 0.335786 15.1642 0 14.75 0C14.3358 0 14 0.335786 14 0.75V2.5H12.25C11.8358 2.5 11.5 2.83579 11.5 3.25C11.5 3.66421 11.8358 4 12.25 4H14V5.75C14 6.16421 14.3358 6.5 14.75 6.5C15.1642 6.5 15.5 6.16421 15.5 5.75V4H17.25C17.6642 4 18 3.66421 18 3.25C18 2.83579 17.6642 2.5 17.25 2.5H15.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.5 12.0143H1.5V13.75C1.5 15.2692 2.73079 16.5 4.25 16.5H12.75C14.2692 16.5 15.5 15.2692 15.5 13.75V12.0143Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AddItem;
