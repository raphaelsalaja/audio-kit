import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wallet2({
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
          d="M11.8952 2.61429C12.0034 2.59589 12.1118 2.65071 12.1612 2.74939L11.8952 2.61429ZM11.8952 2.61429L5.33339 3.73425C5.33332 3.73426 5.33345 3.73424 5.33339 3.73425C3.98557 3.96477 3 5.13263 3 6.49998C3 6.91419 2.66421 7.24998 2.25 7.24998C1.83579 7.24998 1.5 6.91419 1.5 6.49998C1.5 4.40139 3.01253 2.60926 5.08061 2.2557L11.6428 1.13567C12.4025 1.00613 13.1582 1.38928 13.5028 2.07857C13.6881 2.44905 13.5379 2.89956 13.1674 3.0848C12.7969 3.27004 12.3464 3.11987 12.1612 2.74939"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5 11.5H14C13.172 11.5 12.5 10.828 12.5 10C12.5 9.172 13.172 8.5 14 8.5H16.5C17.052 8.5 17.5 8.948 17.5 9.5V10.5C17.5 11.052 17.052 11.5 16.5 11.5Z"
          fill={secondaryfill}
        />
        <path
          d="M16.5 13H14C12.3436 13 11 11.6564 11 10C11 8.34357 12.3436 7 14 7H16.5V6.75C16.5 5.233 15.267 4 13.75 4H4.25C2.733 4 1.5 5.233 1.5 6.75V13.25C1.5 14.767 2.733 16 4.25 16H13.75C15.267 16 16.5 14.767 16.5 13.25V13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Wallet2;
