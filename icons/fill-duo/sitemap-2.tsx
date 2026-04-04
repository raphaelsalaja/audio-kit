import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sitemap2({
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
          d="M9.75 5.25C9.75 4.83579 9.41421 4.5 9 4.5C8.58579 4.5 8.25 4.83579 8.25 5.25V8H5.25C3.73079 8 2.5 9.23079 2.5 10.75V12.25C2.5 12.6642 2.83579 13 3.25 13C3.66421 13 4 12.6642 4 12.25V10.75C4 10.0592 4.55921 9.5 5.25 9.5H8.25V12.25C8.25 12.6642 8.58579 13 9 13C9.41421 13 9.75 12.6642 9.75 12.25V9.5H12.75C13.4408 9.5 14 10.0592 14 10.75V12.25C14 12.6642 14.3358 13 14.75 13C15.1642 13 15.5 12.6642 15.5 12.25V10.75C15.5 9.23079 14.2692 8 12.75 8H9.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 2.75C6.5 1.78379 7.28379 1 8.25 1H9.75C10.7162 1 11.5 1.78379 11.5 2.75V4.25C11.5 5.21621 10.7162 6 9.75 6H8.25C7.28379 6 6.5 5.21621 6.5 4.25V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.75 13.25C0.75 12.2838 1.53379 11.5 2.5 11.5H4C4.96621 11.5 5.75 12.2838 5.75 13.25V14.75C5.75 15.7162 4.96621 16.5 4 16.5H2.5C1.53379 16.5 0.75 15.7162 0.75 14.75V13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.5 13.25C6.5 12.2838 7.28379 11.5 8.25 11.5H9.75C10.7162 11.5 11.5 12.2838 11.5 13.25V14.75C11.5 15.7162 10.7162 16.5 9.75 16.5H8.25C7.28379 16.5 6.5 15.7162 6.5 14.75V13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 13.25C12.25 12.2838 13.0338 11.5 14 11.5H15.5C16.4662 11.5 17.25 12.2838 17.25 13.25V14.75C17.25 15.7162 16.4662 16.5 15.5 16.5H14C13.0338 16.5 12.25 15.7162 12.25 14.75V13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Sitemap2;
