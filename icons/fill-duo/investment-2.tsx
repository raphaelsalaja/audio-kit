import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Investment2({
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
          d="M9.75 5.25C9.75 4.83579 9.41421 4.5 9 4.5C8.58579 4.5 8.25 4.83579 8.25 5.25V10.75C8.25 10.8377 8.26504 10.9218 8.29268 11H9.70732C9.73496 10.9218 9.75 10.8377 9.75 10.75V5.25Z"
          fill={fill}
        />
        <path
          d="M3.00009 1.2376C3.00686 0.828277 3.34061 0.5 3.74999 0.5H4.99999C7.62321 0.5 9.74999 2.62679 9.74999 5.25C9.74999 5.57835 9.53641 5.86852 9.22291 5.96611C8.92638 6.05841 7.12426 6.59311 5.34813 5.54608C3.84875 4.66226 2.97092 3.00186 3.00009 1.2376Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.788 7.9894C8.469 7.8954 8.25 7.60255 8.25 7.26999C8.25 4.64678 10.3768 2.51999 13 2.51999H14.25C14.6594 2.51999 14.9931 2.84827 14.9999 3.25759C15.0291 5.02184 14.1513 6.68227 12.6519 7.5661C11.7411 8.10301 10.7642 8.19784 10.0522 8.17304C9.62614 8.15821 9.19807 8.10983 8.788 7.9894Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 11H6C5.448 11 5 11.448 5 12V13C5 13.552 5.448 14 6 14H12C12.552 14 13 13.552 13 13V12C13 11.448 12.552 11 12 11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 13H2C1.448 13 1 13.448 1 14V15C1 15.552 1.448 16 2 16H6.5V14H6C5.448 14 5 13.552 5 13Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M11.5 14H12C12.552 14 13 13.552 13 13H16C16.552 13 17 13.448 17 14V15C17 15.552 16.552 16 16 16H11.5V14Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M12 14H6C5.448 14 5 14.448 5 15V16C5 16.552 5.448 17 6 17H12C12.552 17 13 16.552 13 16V15C13 14.448 12.552 14 12 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Investment2;
