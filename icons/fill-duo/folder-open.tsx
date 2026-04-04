import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderOpen({
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
          d="M15.298 7C16.7769 7 17.8526 8.40119 17.4717 9.82923L16.3708 13.9578C16.0503 15.1626 14.9597 16 13.714 16H4.28698C3.04143 16 1.95093 15.1628 1.63032 13.9582L0.529335 9.82933C0.148492 8.40165 1.22442 7.00141 2.70077 7L15.298 7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V7.34742C1.8441 7.12889 2.25411 7.00043 2.70077 7L15.298 7C15.7452 7 16.1556 7.12816 16.5 7.34646V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34568 3.02826C7.82345 2.37824 7.0355 2 6.20099 2H4.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FolderOpen;
