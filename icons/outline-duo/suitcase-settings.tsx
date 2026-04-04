import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseSettings({
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
          d="M8.99988 14.6757C8.53998 14.2633 8.24998 13.6648 8.24998 13C8.24998 12.2241 8.64498 11.5386 9.24408 11.1338C9.10638 10.4238 9.31198 9.6597 9.86078 9.1109C10.2856 8.6856 10.8505 8.45172 11.4516 8.45172C11.5986 8.45172 11.7436 8.46593 11.8847 8.49323C12.2895 7.89463 12.9745 7.5 13.7499 7.5C14.5253 7.5 15.2103 7.89453 15.6151 8.49323C15.7562 8.46593 15.9012 8.45172 16.0482 8.45172C16.1167 8.45172 16.1825 8.4654 16.2499 8.4715V6.75012C16.2499 5.64512 15.3549 4.75012 14.2499 4.75012H3.74988C2.64488 4.75012 1.74988 5.64512 1.74988 6.75012V13.2501C1.74988 14.3551 2.64488 15.2501 3.74988 15.2501H8.60579C8.87639 15.2501 9.07668 14.7446 8.99988 14.6757Z"
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
          d="M13.75 9.75V10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.0482 10.7019L15.3411 11.409"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17 13H16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.0482 15.2981L15.3411 14.591"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 16.25V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.4519 15.2981L12.159 14.591"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 13H11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.4519 10.7019L12.159 11.409"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.7312V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H8.5412"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 15C14.8546 15 15.75 14.1046 15.75 13C15.75 11.8954 14.8546 11 13.75 11C12.6454 11 11.75 11.8954 11.75 13C11.75 14.1046 12.6454 15 13.75 15Z"
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

export default SuitcaseSettings;
