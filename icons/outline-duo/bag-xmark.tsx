import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagXmark({
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
          d="M5.334 4.75H12.667C13.704 4.75 14.57 5.543 14.659 6.577L15.0312 10.7842C14.7408 10.9716 14.4951 11.3229 14.25 11.568L13.841 11.159C12.9623 10.2803 11.5377 10.2803 10.659 11.159C9.78033 12.0377 9.78033 13.4623 10.659 14.341L11.068 14.75L10.659 15.159C10.3477 15.4703 10.1337 15.8502 10.043 16.25H4.681C3.508 16.25 2.587 15.245 2.689 14.077L3.341 6.577C3.431 5.543 4.297 4.75 5.334 4.75Z"
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
          d="M12.25 12.75L16.25 16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 12.75L12.25 16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.9623 10.0664L14.659 6.5769C14.569 5.5439 13.704 4.75 12.667 4.75H5.33399C4.29699 4.75 3.43099 5.543 3.34209 6.5769L2.69009 14.0769C2.58809 15.2451 3.51009 16.25 4.68209 16.25H9.30189"
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

export default BagXmark;
