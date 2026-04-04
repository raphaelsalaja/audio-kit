import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Investment3({
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
          d="M8.25 11H9.75V16.75C9.75 17.1642 9.41421 17.5 9 17.5C8.58579 17.5 8.25 17.1642 8.25 16.75V11Z"
          fill={fill}
        />
        <path
          d="M3.75 1C2.50779 1 1.5 2.00779 1.5 3.25V8.75C1.5 9.99221 2.50779 11 3.75 11H14.25C15.4922 11 16.5 9.99221 16.5 8.75V3.25C16.5 2.00779 15.4922 1 14.25 1H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.75 6.75C5.164 6.75 5.5 6.414 5.5 6C5.5 5.586 5.164 5.25 4.75 5.25C4.336 5.25 4 5.586 4 6C4 6.414 4.336 6.75 4.75 6.75Z"
          fill={fill}
        />
        <path
          d="M13.25 6.75C13.664 6.75 14 6.414 14 6C14 5.586 13.664 5.25 13.25 5.25C12.836 5.25 12.5 5.586 12.5 6C12.5 6.414 12.836 6.75 13.25 6.75Z"
          fill={fill}
        />
        <path
          d="M7 6C7 4.89583 7.89583 4 9 4C10.1042 4 11 4.89583 11 6C11 7.10417 10.1042 8 9 8C7.89583 8 7 7.10417 7 6Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.25 16.75C8.25 14.1268 10.3768 12 13 12H14.25C14.6642 12 15 12.3358 15 12.75C15 15.3732 12.8732 17.5 10.25 17.5H9C8.58579 17.5 8.25 17.1642 8.25 16.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Investment3;
