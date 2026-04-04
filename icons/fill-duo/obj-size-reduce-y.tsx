import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjSizeReduceY({
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
          d="M15.25 6H2.75C1.7835 6 1 6.7835 1 7.75V10.25C1 11.2165 1.7835 12 2.75 12H15.25C16.2165 12 17 11.2165 17 10.25V7.75C17 6.7835 16.2165 6 15.25 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.47001 4.28005C8.61601 4.42605 8.80801 4.50002 9.00001 4.50002C9.19201 4.50002 9.38401 4.42705 9.53001 4.28005L11.78 2.03005C12.073 1.73705 12.073 1.26202 11.78 0.969018C11.487 0.676018 11.012 0.676018 10.719 0.969018L8.99901 2.68899L7.27901 0.969018C6.98601 0.676018 6.51101 0.676018 6.21801 0.969018C5.92501 1.26202 5.92501 1.73705 6.21801 2.03005L8.46801 4.28005H8.47001Z"
          fill={fill}
        />
        <path
          d="M9.53 13.72C9.237 13.427 8.762 13.427 8.469 13.72L6.219 15.97C5.926 16.263 5.926 16.738 6.219 17.031C6.512 17.324 6.987 17.324 7.28 17.031L9 15.3111L10.72 17.031C10.866 17.177 11.058 17.251 11.25 17.251C11.442 17.251 11.634 17.178 11.78 17.031C12.073 16.738 12.073 16.263 11.78 15.97L9.53 13.72Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ObjSizeReduceY;
