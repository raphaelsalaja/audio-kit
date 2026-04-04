import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseLink({
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
          d="M11.75 5.5C11.336 5.5 11 5.164 11 4.75V2.25C11 2.112 10.888 2 10.75 2H7.25C7.112 2 7 2.112 7 2.25V4.75C7 5.164 6.664 5.5 6.25 5.5C5.836 5.5 5.5 5.164 5.5 4.75V2.25C5.5 1.285 6.285 0.5 7.25 0.5H10.75C11.715 0.5 12.5 1.285 12.5 2.25V4.75C12.5 5.164 12.164 5.5 11.75 5.5Z"
          fill={fill}
        />
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
          d="M7.5 14.5C7.5 15.0305 7.60325 15.5368 7.79076 16H3.75C2.233 16 1 14.767 1 13.25V6.75C1 5.233 2.233 4 3.75 4H14.25C15.767 4 17 5.233 17 6.75V9.79076C16.5368 9.60325 16.0305 9.5 15.5 9.5H11.5C9.29086 9.5 7.5 11.2909 7.5 13.5V14.5Z"
          fill={fill}
        />
        <path
          d="M11.5 14C11.5 13.5858 11.8358 13.25 12.25 13.25H14.75C15.1642 13.25 15.5 13.5858 15.5 14C15.5 14.4142 15.1642 14.75 14.75 14.75H12.25C11.8358 14.75 11.5 14.4142 11.5 14Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SuitcaseLink;
