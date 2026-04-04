import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Users4({
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
          d="M5.25 7.00049C6.3546 7.00049 7.25 6.10549 7.25 5.00049C7.25 3.89549 6.3546 3.00049 5.25 3.00049C4.1454 3.00049 3.25 3.89549 3.25 5.00049C3.25 6.10549 4.1454 7.00049 5.25 7.00049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.05102 13.7765C1.56202 13.6285 1.23302 13.1415 1.34202 12.6415C1.73502 10.8445 3.33502 9.49951 5.25002 9.49951C7.16502 9.49951 8.76501 10.8445 9.15801 12.6415C9.26701 13.1405 8.93901 13.6285 8.44901 13.7765C7.62801 14.0245 6.53802 14.2505 5.25002 14.2505C3.96202 14.2505 2.87202 14.0255 2.05102 13.7765Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 7.00049C13.8546 7.00049 14.75 6.10549 14.75 5.00049C14.75 3.89549 13.8546 3.00049 12.75 3.00049C11.6454 3.00049 10.75 3.89549 10.75 5.00049C10.75 6.10549 11.6454 7.00049 12.75 7.00049Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.9243 14.2039C12.1946 14.2247 12.4587 14.2515 12.75 14.2515C14.038 14.2515 15.128 14.0254 15.949 13.7774C16.439 13.6295 16.767 13.1417 16.658 12.6426C16.265 10.8455 14.665 9.50049 12.75 9.50049C12.1982 9.50049 11.6823 9.63041 11.2042 9.83231"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Users4;
