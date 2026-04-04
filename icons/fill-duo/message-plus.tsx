import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessagePlus({
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
          d="M14.5 11.25C14.5 10.8358 14.1642 10.5 13.75 10.5C13.3358 10.5 13 10.8358 13 11.25V13H11.25C10.8358 13 10.5 13.3358 10.5 13.75C10.5 14.1642 10.8358 14.5 11.25 14.5H13V16.25C13 16.6642 13.3358 17 13.75 17C14.1642 17 14.5 16.6642 14.5 16.25V14.5H16.25C16.6642 14.5 17 14.1642 17 13.75C17 13.3358 16.6642 13 16.25 13H14.5V11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 4.25C1 2.73203 2.23054 1.5 3.75 1.5H14.25C15.7695 1.5 17 2.73203 17 4.25V11.25C17 11.3753 16.9916 11.4986 16.9754 11.6195C16.7478 11.542 16.5038 11.5 16.25 11.5H16V11.25C16 10.0074 14.9926 9 13.75 9C12.5074 9 11.5 10.0074 11.5 11.25V11.5H11.25C10.0074 11.5 9 12.5074 9 13.75C9 14.0153 9.04592 14.2699 9.13025 14.5063L6.21852 16.8357C5.99339 17.0158 5.68496 17.0509 5.42511 16.926C5.16526 16.8011 5 16.5383 5 16.25V14H3.75C2.23054 14 1 12.768 1 11.25V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MessagePlus;
