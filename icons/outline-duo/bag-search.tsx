import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagSearch({
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
          d="M12.667 4.75H5.334C4.297 4.75 3.431 5.543 3.341 6.577L2.689 14.077C2.587 15.245 3.508 16.25 4.681 16.25C5.14919 16.25 9.94127 16.4329 9.94127 15.9458C9.65845 15.3569 9.5 14.6969 9.5 14C9.5 11.5147 11.5147 9.5 14 9.5C14.2418 9.5 14.4791 9.51907 14.7105 9.55578C15.1018 9.61785 14.6879 6.88347 14.659 6.577C14.57 5.543 13.704 4.75 12.667 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.75 4.75V3C6.75 1.757 7.757 0.75 9 0.75C10.243 0.75 11.25 1.757 11.25 3V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 16.25C15.2426 16.25 16.25 15.2426 16.25 14C16.25 12.7574 15.2426 11.75 14 11.75C12.7574 11.75 11.75 12.7574 11.75 14C11.75 15.2426 12.7574 16.25 14 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.59 15.59L17.25 17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8552 8.8364L14.659 6.5769C14.569 5.5439 13.704 4.75 12.667 4.75H5.33399C4.29699 4.75 3.43099 5.543 3.34209 6.5769L2.69009 14.0769C2.58809 15.2451 3.51009 16.25 4.68209 16.25H9.27649"
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

export default BagSearch;
