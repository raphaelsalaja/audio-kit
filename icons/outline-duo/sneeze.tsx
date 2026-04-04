import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sneeze({
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
          d="M5.25 13.75V16.25L5.24983 16.2491L5.25371 16.5H3.49785C2.94556 16.5 2.49785 16.0523 2.49785 15.5V1.75391L2.76859 1.8628L2.75 1.75501C6.177 1.61601 9 4.35301 9 7.75001L10.5 9.75001L8.996 10.351L8.884 11.894C8.808 12.94 7.938 13.75 6.889 13.75H5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.25 8C6.66421 8 7 7.66421 7 7.25C7 6.83579 6.66421 6.5 6.25 6.5C5.83579 6.5 5.5 6.83579 5.5 7.25C5.5 7.66421 5.83579 8 6.25 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.75 12.5C13.1642 12.5 13.5 12.1642 13.5 11.75C13.5 11.3358 13.1642 11 12.75 11C12.3358 11 12 11.3358 12 11.75C12 12.1642 12.3358 12.5 12.75 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 10.5C15.6642 10.5 16 10.1642 16 9.75C16 9.33579 15.6642 9 15.25 9C14.8358 9 14.5 9.33579 14.5 9.75C14.5 10.1642 14.8358 10.5 15.25 10.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 14.5C15.6642 14.5 16 14.1642 16 13.75C16 13.3358 15.6642 13 15.25 13C14.8358 13 14.5 13.3358 14.5 13.75C14.5 14.1642 14.8358 14.5 15.25 14.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.25 16.25V13.75H6.889C7.938 13.75 8.808 12.94 8.884 11.894L8.996 10.351L10.5 9.75001L9 7.75001C9 4.35301 6.177 1.61601 2.75 1.75501"
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

export default Sneeze;
