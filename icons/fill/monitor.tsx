import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Monitor({
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
          d="M9.75 12.75C9.75 12.3358 9.41421 12 9 12C8.58579 12 8.25 12.3358 8.25 12.75V14.5244C7.12269 14.5976 6.19231 14.8241 5.52446 15.0347C5.12941 15.1593 4.91014 15.5805 5.0347 15.9755C5.15926 16.3706 5.58048 16.5898 5.97552 16.4653C6.68077 16.2429 7.72315 16 8.99999 16C9.73958 16 10.8063 16.0819 12.0248 16.4654C12.4199 16.5898 12.841 16.3703 12.9654 15.9752C13.0897 15.5801 12.8703 15.159 12.4752 15.0346C11.446 14.7107 10.511 14.5741 9.75 14.5244V12.75Z"
          fill={secondaryfill}
        />
        <path
          d="M1 4.75C1 3.23122 2.23122 2 3.75 2H14.25C15.7688 2 17 3.23122 17 4.75V10.75C17 12.2688 15.7688 13.5 14.25 13.5H3.75C2.23122 13.5 1 12.2688 1 10.75V4.75ZM3.75 3.5C3.05964 3.5 2.5 4.05964 2.5 4.75V10.75C2.5 11.4404 3.05964 12 3.75 12H14.25C14.9404 12 15.5 11.4404 15.5 10.75V4.75C15.5 4.05964 14.9404 3.5 14.25 3.5H3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Monitor;
