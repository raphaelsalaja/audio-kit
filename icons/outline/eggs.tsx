import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Eggs({
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
          d="M1.74997 11.375C1.74997 8.125 3.87697 3.25 6.49997 3.25C9.12297 3.25 11.25 8.125 11.25 11.375C11.284 14.033 9.15797 16.215 6.49997 16.25C3.84197 16.215 1.71597 14.033 1.74997 11.375Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 13.5C7.6046 13.5 8.5 12.6046 8.5 11.5C8.5 10.3954 7.6046 9.5 6.5 9.5C5.3954 9.5 4.5 10.3954 4.5 11.5C4.5 12.6046 5.3954 13.5 6.5 13.5Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.1522 12.6453C15.4357 11.876 16.2567 10.482 16.25 8.938C16.25 6.062 14.347 1.75 12 1.75C11.5392 1.7808 11.1017 1.9312 10.7188 2.1724"
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

export default Eggs;
