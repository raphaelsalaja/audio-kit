import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane4Link({
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
          d="M11.5 12.5C10.9477 12.5 10.5 12.9477 10.5 13.5V14.5C10.5 15.0523 10.9477 15.5 11.5 15.5H12C12.4142 15.5 12.75 15.8358 12.75 16.25C12.75 16.6642 12.4142 17 12 17H11.5C10.1193 17 9 15.8807 9 14.5V13.5C9 12.1193 10.1193 11 11.5 11H12C12.4142 11 12.75 11.3358 12.75 11.75C12.75 12.1642 12.4142 12.5 12 12.5H11.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M14.25 11.75C14.25 11.3358 14.5858 11 15 11H15.5C16.8807 11 18 12.1193 18 13.5V14.5C18 15.8807 16.8807 17 15.5 17H15C14.5858 17 14.25 16.6642 14.25 16.25C14.25 15.8358 14.5858 15.5 15 15.5H15.5C16.0523 15.5 16.5 15.0523 16.5 14.5V13.5C16.5 12.9477 16.0523 12.5 15.5 12.5H15C14.5858 12.5 14.25 12.1642 14.25 11.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 14C11.5 13.5858 11.8358 13.25 12.25 13.25H14.75C15.1642 13.25 15.5 13.5858 15.5 14C15.5 14.4142 15.1642 14.75 14.75 14.75H12.25C11.8358 14.75 11.5 14.4142 11.5 14Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M15.2172 8.0844L3.35091 1.92254C2.35843 1.40693 1.23727 2.33685 1.55292 3.40612L2.98848 8.25H8.38598C8.80019 8.25 9.13598 8.58579 9.13598 9C9.13598 9.41421 8.80019 9.75 8.38598 9.75H2.98848L1.55269 14.5947C1.23707 15.6638 2.35851 16.5927 3.35091 16.0775L7.5 13.9255V13.5C7.5 11.2909 9.29086 9.5 11.5 9.5H15.0929L15.2787 9.37988C15.5031 9.23483 15.6334 8.98134 15.6208 8.71444C15.6081 8.44754 15.4544 8.20754 15.2172 8.0844Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PaperPlane4Link;
