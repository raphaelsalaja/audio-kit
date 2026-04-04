import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseModern4({
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
          d="M3.75 3.3509L14.25 6.44508V15.25L11.25 15.25V11.5C11.25 10.81 10.69 10.25 10 10.25C9.31 10.25 8.75 10.81 8.75 11.5V15.25L6.76612 15.25C6.76636 15.2343 6.76648 15.2186 6.76648 15.2029C6.76648 13.5415 5.41964 12.1946 3.75824 12.1946C3.75549 12.1946 3.75275 12.1946 3.75 12.1946V3.3509Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.25 5.822V3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 15.25V11.5C8.75 10.81 9.31 10.25 10 10.25C10.69 10.25 11.25 10.81 11.25 11.5V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 6.405V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 12.25V3.345"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 2.762L16.25 6.988"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 9C7.55228 9 8 8.55228 8 8C8 7.44772 7.55228 7 7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.234 13C16.857 13.55 17.25 14.354 17.25 15.25H0.75C0.75 13.593 2.093 12.25 3.75 12.25C5.407 12.25 6.75 13.593 6.75 15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HouseModern4;
