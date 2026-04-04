import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Frame({
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
          d="M4.75 0C5.16421 0 5.5 0.335786 5.5 0.75V2.25C5.5 2.66421 5.16421 3 4.75 3C4.33579 3 4 2.66421 4 2.25V0.75C4 0.335786 4.33579 0 4.75 0Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.25 0C13.6642 0 14 0.335786 14 0.75V2.25C14 2.66421 13.6642 3 13.25 3C12.8358 3 12.5 2.66421 12.5 2.25V0.75C12.5 0.335786 12.8358 0 13.25 0Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.75 15C5.16421 15 5.5 15.3358 5.5 15.75V17.25C5.5 17.6642 5.16421 18 4.75 18C4.33579 18 4 17.6642 4 17.25V15.75C4 15.3358 4.33579 15 4.75 15Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.25 15C13.6642 15 14 15.3358 14 15.75V17.25C14 17.6642 13.6642 18 13.25 18C12.8358 18 12.5 17.6642 12.5 17.25V15.75C12.5 15.3358 12.8358 15 13.25 15Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15 4.75C15 4.33579 15.3358 4 15.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H15.75C15.3358 5.5 15 5.16421 15 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15 13.25C15 12.8358 15.3358 12.5 15.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H15.75C15.3358 14 15 13.6642 15 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0 4.75C0 4.33579 0.335786 4 0.75 4H2.25C2.66421 4 3 4.33579 3 4.75C3 5.16421 2.66421 5.5 2.25 5.5H0.75C0.335786 5.5 0 5.16421 0 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0 13.25C0 12.8358 0.335786 12.5 0.75 12.5H2.25C2.66421 12.5 3 12.8358 3 13.25C3 13.6642 2.66421 14 2.25 14H0.75C0.335786 14 0 13.6642 0 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 6.75C4 5.23079 5.23079 4 6.75 4H11.25C12.7692 4 14 5.23079 14 6.75V11.25C14 12.7692 12.7692 14 11.25 14H6.75C5.23079 14 4 12.7692 4 11.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Frame;
