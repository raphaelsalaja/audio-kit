import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowPaintbrush({
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
          d="M5.75 11.82C7.912 12.47 9.667 12.5201 11.101 11.0501C11.966 10.1801 11.966 8.78004 11.101 7.91004C10.236 7.04004 8.84 7.03004 7.968 7.91004C6.55 9.33994 7.788 10.7 5.75 11.82Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.75 9.25002L16.836 4.16006C17.388 3.61006 17.388 2.71996 16.836 2.16006C16.284 1.61006 15.388 1.61006 14.836 2.16006L9.742 7.26003"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 11.82C7.912 12.47 9.667 12.5201 11.101 11.0501C11.966 10.1801 11.966 8.78004 11.101 7.91004C10.236 7.04004 8.84 7.03004 7.968 7.91004C6.55 9.33994 7.788 10.7 5.75 11.82Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.99084V13.25C16.25 14.36 15.355 15.25 14.25 15.25H3.75C2.645 15.25 1.75 14.36 1.75 13.25V4.75C1.75 3.64 2.645 2.75 3.75 2.75H10.0065"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 6C4.664 6 5 5.66 5 5.25C5 4.84 4.664 4.5 4.25 4.5C3.836 4.5 3.5 4.84 3.5 5.25C3.5 5.66 3.836 6 4.25 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 6C7.164 6 7.5 5.66 7.5 5.25C7.5 4.84 7.164 4.5 6.75 4.5C6.336 4.5 6 4.84 6 5.25C6 5.66 6.336 6 6.75 6Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default WindowPaintbrush;
