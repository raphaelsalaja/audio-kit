import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chair2({
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
          d="M9 12C9.41421 12 9.75 12.3358 9.75 12.75V14.052L12.6056 15.5896C12.9703 15.786 13.1068 16.2409 12.9104 16.6056C12.714 16.9703 12.2592 17.1067 11.8944 16.9104L9.75 15.7557V16.75C9.75 17.1642 9.41421 17.5 9 17.5C8.58579 17.5 8.25 17.1642 8.25 16.75V15.7557L6.1056 16.9104C5.7409 17.1067 5.28605 16.9703 5.08967 16.6056C4.89329 16.2409 5.02975 15.786 5.39445 15.5896L8.25 14.052V12.75C8.25 12.3358 8.58579 12 9 12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.26812 4.07161C4.07569 2.4369 5.3529 1 6.99898 1H11.001C12.6471 1 13.9243 2.4369 13.7318 4.07161L13.0536 9.83761C13.0092 10.2153 12.6891 10.5 12.3088 10.5H5.69118C5.31086 10.5 4.99075 10.2153 4.94632 9.83761L4.26812 4.07161Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.46995 7.0208C2.88096 6.96944 3.2558 7.26099 3.30716 7.67201L3.71107 10.9043C3.71106 10.9042 3.71108 10.9044 3.71107 10.9043C3.79006 11.5308 4.32169 12 4.95195 12H13.0479C13.6789 12 14.2106 11.5305 14.2887 10.9051L14.6927 7.67201C14.7441 7.26099 15.1189 6.96944 15.5299 7.0208C15.941 7.07216 16.2325 7.44699 16.1812 7.85801L15.7772 11.0909C15.7772 11.091 15.7772 11.0909 15.7772 11.0909C15.6052 12.4675 14.435 13.5 13.0479 13.5H4.95195C3.56429 13.5 2.39594 12.4671 2.22282 11.0917L1.81873 7.85801C1.76737 7.44699 2.05893 7.07216 2.46995 7.0208Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Chair2;
