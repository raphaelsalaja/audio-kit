import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseLink({
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
          d="M7.94127 1.36281C8.56694 0.887445 9.4333 0.886569 10.0591 1.36312L15.3088 5.35287C15.7448 5.68398 16 6.20008 16 6.746V10.5309C15.8362 10.5105 15.6693 10.5 15.5 10.5C14.1667 10.5 12.8333 10.5 11.5 10.5C9.29086 10.5 7.5 12.2909 7.5 14.5V15.5C7.5 16.0304 7.60325 16.5368 7.79076 17H4.75C3.23079 17 2 15.7692 2 14.25V6.746C2 6.19867 2.2559 5.68346 2.69155 5.3526L7.94127 1.36281Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.5 13.5C10.9477 13.5 10.5 13.9477 10.5 14.5V15.5C10.5 16.0523 10.9477 16.5 11.5 16.5H12C12.4142 16.5 12.75 16.8358 12.75 17.25C12.75 17.6642 12.4142 18 12 18H11.5C10.1193 18 9 16.8807 9 15.5V14.5C9 13.1193 10.1193 12 11.5 12H12C12.4142 12 12.75 12.3358 12.75 12.75C12.75 13.1642 12.4142 13.5 12 13.5H11.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.25 12.75C14.25 12.3358 14.5858 12 15 12H15.5C16.8807 12 18 13.1193 18 14.5V15.5C18 16.8807 16.8807 18 15.5 18H15C14.5858 18 14.25 17.6642 14.25 17.25C14.25 16.8358 14.5858 16.5 15 16.5H15.5C16.0523 16.5 16.5 16.0523 16.5 15.5V14.5C16.5 13.9477 16.0523 13.5 15.5 13.5H15C14.5858 13.5 14.25 13.1642 14.25 12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 15C11.5 14.5858 11.8358 14.25 12.25 14.25H14.75C15.1642 14.25 15.5 14.5858 15.5 15C15.5 15.4142 15.1642 15.75 14.75 15.75H12.25C11.8358 15.75 11.5 15.4142 11.5 15Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseLink;
