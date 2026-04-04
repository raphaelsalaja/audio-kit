import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AutomatedLogistics({
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
          d="M5.5 11.75C5.5 10.7835 6.28349 10 7.25 10H10.75C11.7165 10 12.5 10.7835 12.5 11.75V15.25C12.5 16.2165 11.7165 17 10.75 17H7.25C6.28349 17 5.5 16.2165 5.5 15.25V11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 10V13C9.75 13.4142 9.41421 13.75 9 13.75C8.58579 13.75 8.25 13.4142 8.25 13V10H9.75Z"
          fill={fill}
        />
        <path
          d="M4.5 11.75C4.5 10.7835 3.71651 10 2.75 10H1.75C1.33579 10 1 10.3358 1 10.75V16.25C1 16.6642 1.33579 17 1.75 17H2.75C3.71651 17 4.5 16.2165 4.5 15.25V11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.75 0.75C9.75 0.335786 9.41421 0 9 0C8.58579 0 8.25 0.335786 8.25 0.75V2.84957L6.12197 4.26797C5.54928 4.64976 5.25413 5.33192 5.366 6.01007L5.76022 8.37341C5.82837 8.78198 6.21483 9.05794 6.6234 8.98979C7.03197 8.92163 7.30793 8.53517 7.23977 8.12661L6.84592 5.76549C6.82999 5.66782 6.87287 5.57018 6.95402 5.51605L8.99999 5L11.0468 5.51663C11.1286 5.57096 11.1703 5.66833 11.1542 5.76461L10.7602 8.12661C10.6921 8.53517 10.968 8.92163 11.3766 8.98979C11.7852 9.05794 12.1716 8.78198 12.2398 8.37341L12.6338 6.01141C12.7474 5.33206 12.4509 4.64903 11.8771 4.26738L9.75 2.84958V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.5 11.75C13.5 10.7835 14.2835 10 15.25 10H16.25C16.6642 10 17 10.3358 17 10.75V16.25C17 16.6642 16.6642 17 16.25 17H15.25C14.2835 17 13.5 16.2165 13.5 15.25V11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default AutomatedLogistics;
