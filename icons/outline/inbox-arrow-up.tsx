import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InboxArrowUp({
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
          d="M6.51562 5.5L9.01562 3L11.4844 5.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 3.30591V8.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.214 9.75H11.75V10.75C11.75 11.302 11.302 11.75 10.75 11.75H7.25C6.698 11.75 6.25 11.302 6.25 10.75V9.75H1.78699"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.482 2.78C13.161 2.899 13.741 3.36201 13.999 4.01901L16.112 9.39801C16.204 9.63101 16.25 9.879 16.25 10.129V13.25C16.25 14.355 15.355 15.25 14.25 15.25H3.75C2.645 15.25 1.75 14.355 1.75 13.25V10.129C1.75 9.879 1.797 9.63101 1.888 9.39801L4.00101 4.01901C4.25901 3.36301 4.83901 2.899 5.51801 2.78"
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

export default InboxArrowUp;
