import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserArrowLeft({
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
          d="M14.7803 10.7803C15.0732 10.4874 15.0732 10.0126 14.7803 9.71967C14.4874 9.42678 14.0126 9.42678 13.7197 9.71967L11.2197 12.2197C10.9268 12.5126 10.9268 12.9874 11.2197 13.2803L13.7197 15.7803C14.0126 16.0732 14.4874 16.0732 14.7803 15.7803C15.0732 15.4874 15.0732 15.0126 14.7803 14.7197L13.5607 13.5L16.75 13.5C17.1642 13.5 17.5 13.1642 17.5 12.75C17.5 12.3358 17.1642 12 16.75 12L13.5607 12L14.7803 10.7803Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.1589 11.159C9.28026 12.0377 9.28026 13.4623 10.1589 14.341L12.4535 16.6356C11.4484 16.8499 10.2878 17 8.99993 17C6.99277 17 5.29497 16.6354 4.01253 16.2313C2.74419 15.8317 2.05155 14.4186 2.60511 13.1674C3.69052 10.7157 6.14161 9 8.99993 9C9.9785 9 10.9093 9.2011 11.754 9.56398L10.1589 11.159Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UserArrowLeft;
