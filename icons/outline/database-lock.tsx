import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DatabaseLock({
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
          d="M9 6.5C12.452 6.5 15.25 5.493 15.25 4.25C15.25 3.007 12.452 2 9 2C5.548 2 2.75 3.007 2.75 4.25C2.75 5.493 5.548 6.5 9 6.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.8627V4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 4.25V13.75C2.75 14.9105 5.1884 15.8651 8.3208 15.9867"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 9C2.75 10.243 5.548 11.25 9 11.25C9.0493 11.25 9.09849 11.2498 9.14749 11.2494"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 12.75H12.25C11.698 12.75 11.25 13.198 11.25 13.75V15.25C11.25 15.802 11.698 16.25 12.25 16.25H16.25C16.802 16.25 17.25 15.802 17.25 15.25V13.75C17.25 13.198 16.802 12.75 16.25 12.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 12.75V11.25C12.75 10.422 13.422 9.75 14.25 9.75C15.078 9.75 15.75 10.422 15.75 11.25V12.75"
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

export default DatabaseLock;
