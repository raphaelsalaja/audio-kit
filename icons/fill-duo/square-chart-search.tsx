import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartSearch({
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
          d="M9.52745 2.5H3.75C2.23079 2.5 1 3.73079 1 5.25V13.75C1 15.2692 2.23079 16.5 3.75 16.5H12.25C13.7692 16.5 15 15.2692 15 13.75V7.38821C14.6779 7.46139 14.3431 7.5 14 7.5C11.5144 7.5 9.5 5.48564 9.5 3C9.5 2.83099 9.50931 2.66416 9.52745 2.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.75 7.75C5.16421 7.75 5.5 8.08579 5.5 8.5V12.75C5.5 13.1642 5.16421 13.5 4.75 13.5C4.33579 13.5 4 13.1642 4 12.75V8.5C4 8.08579 4.33579 7.75 4.75 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.25 10C11.6642 10 12 10.3358 12 10.75V12.75C12 13.1642 11.6642 13.5 11.25 13.5C10.8358 13.5 10.5 13.1642 10.5 12.75V10.75C10.5 10.3358 10.8358 10 11.25 10Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8 5.5C8.41421 5.5 8.75 5.83579 8.75 6.25V12.75C8.75 13.1642 8.41421 13.5 8 13.5C7.58579 13.5 7.25 13.1642 7.25 12.75V6.25C7.25 5.83579 7.58579 5.5 8 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14 0C12.3428 0 11 1.34279 11 3C11 4.65721 12.3428 6 14 6C14.5565 6 15.0775 5.8486 15.5241 5.58475L16.7197 6.78033C17.0126 7.07322 17.4874 7.07322 17.7803 6.78033C18.0732 6.48743 18.0732 6.01256 17.7803 5.71967L16.5847 4.52409C16.8486 4.07746 17 3.55646 17 3C17 1.34279 15.6572 0 14 0ZM15.0889 4.03198C15.3437 3.76315 15.5 3.39992 15.5 3C15.5 2.17121 14.8288 1.5 14 1.5C13.1712 1.5 12.5 2.17121 12.5 3C12.5 3.82879 13.1712 4.5 14 4.5C14.3999 4.5 14.7631 4.34372 15.032 4.08885C15.0409 4.07894 15.0501 4.06921 15.0597 4.05967C15.0692 4.05013 15.0789 4.0409 15.0889 4.03198Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareChartSearch;
