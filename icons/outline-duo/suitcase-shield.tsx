import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseShield({
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
          d="M14.5 9.75L11.75 11V13.94C11.75 15.48 14.5 16.25 14.5 16.25V9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.5 9.75L17.25 11V13.94C17.25 15.48 14.5 16.25 14.5 16.25C14.5 16.25 11.75 15.48 11.75 13.94V11L14.5 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.49998 13.9399V11C9.49998 10.1196 10.0176 9.31592 10.8193 8.95172L13.5683 7.70172C13.8622 7.56792 14.1757 7.5 14.4999 7.5C14.8241 7.5 15.1376 7.56789 15.4325 7.70209L15.9174 7.92249L16.2499 7.71167V6.74988C16.2499 5.64488 15.3549 4.74988 14.2499 4.74988H3.74988C2.64488 4.74988 1.74988 5.64488 1.74988 6.74988V13.2499C1.74988 14.3549 2.64488 15.2499 3.74988 15.2499H9.35869C9.52339 15.2499 9.69729 15.1061 9.67339 15.0323C9.56509 14.6979 9.49998 14.3365 9.49998 13.9399Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.25018V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H8.96471"
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

export default SuitcaseShield;
