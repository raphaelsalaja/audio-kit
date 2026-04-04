import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InboxArrowDown({
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
          d="M6.24475 9.75H1.75V13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25V9.75H11.727V10.7329C11.727 11.2852 11.2793 11.7329 10.727 11.7329H7.24475C6.69247 11.7329 6.24475 11.2852 6.24475 10.7329V9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.5 5.75L9 8.25L6.5 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.25V2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.214 9.75H11.75V10.75C11.75 11.302 11.302 11.75 10.75 11.75H7.24999C6.69799 11.75 6.24999 11.302 6.24999 10.75V9.75H1.78699"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 2.75H12.137C12.959 2.75 13.698 3.253 13.999 4.019L16.112 9.398C16.204 9.631 16.25 9.879 16.25 10.129V13.25C16.25 14.355 15.355 15.25 14.25 15.25H3.75C2.645 15.25 1.75 14.355 1.75 13.25V10.129C1.75 9.879 1.797 9.631 1.888 9.398L4.001 4.019C4.302 3.254 5.04 2.75 5.863 2.75H6"
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

export default InboxArrowDown;
