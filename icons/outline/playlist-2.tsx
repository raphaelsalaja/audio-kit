import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Playlist2({
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
          d="M10.715 8.482L8.40697 7.09701C8.00397 6.85501 7.49097 7.14501 7.49097 7.61501V10.386C7.49097 10.856 8.00397 11.146 8.40697 10.904L10.715 9.519C11.106 9.284 11.106 8.717 10.715 8.482Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M2.75 13.75C1.922 13.75 1.25 13.078 1.25 12.25V5.75C1.25 4.922 1.922 4.25 2.75 4.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 13.75C16.078 13.75 16.75 13.078 16.75 12.25V5.75C16.75 4.922 16.078 4.25 15.25 4.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 15.25H10.75C11.855 15.25 12.75 14.355 12.75 13.25V4.75C12.75 3.645 11.855 2.75 10.75 2.75H7.25C6.145 2.75 5.25 3.645 5.25 4.75V13.25C5.25 14.355 6.145 15.25 7.25 15.25Z"
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

export default Playlist2;
