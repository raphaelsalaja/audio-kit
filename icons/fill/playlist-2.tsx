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
          d="M10.75 2H7.25C5.733 2 4.5 3.233 4.5 4.75V13.25C4.5 14.767 5.733 16 7.25 16H10.75C12.267 16 13.5 14.767 13.5 13.25V4.75C13.5 3.233 12.267 2 10.75 2ZM10.715 9.516L8.407 10.903C8.004 11.145 7.491 10.855 7.491 10.384V7.613C7.491 7.143 8.004 6.853 8.407 7.094L10.715 8.479C11.106 8.714 11.106 9.281 10.715 9.516Z"
          fill={fill}
        />
        <path
          d="M2.75 5C2.33621 5 2 5.33621 2 5.75V12.25C2 12.6638 2.33621 13 2.75 13C3.16421 13 3.5 13.3358 3.5 13.75C3.5 14.1642 3.16421 14.5 2.75 14.5C1.50779 14.5 0.5 13.4922 0.5 12.25V5.75C0.5 4.50779 1.50779 3.5 2.75 3.5C3.16421 3.5 3.5 3.83579 3.5 4.25C3.5 4.66421 3.16421 5 2.75 5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 4.25C14.5 3.83579 14.8358 3.5 15.25 3.5C16.4922 3.5 17.5 4.50779 17.5 5.75V12.25C17.5 13.4922 16.4922 14.5 15.25 14.5C14.8358 14.5 14.5 14.1642 14.5 13.75C14.5 13.3358 14.8358 13 15.25 13C15.6638 13 16 12.6638 16 12.25V5.75C16 5.33621 15.6638 5 15.25 5C14.8358 5 14.5 4.66421 14.5 4.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Playlist2;
