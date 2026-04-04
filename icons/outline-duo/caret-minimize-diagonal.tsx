import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMinimizeDiagonal({
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
          d="M15.146 7.74999H10.5C10.362 7.74999 10.25 7.63799 10.25 7.49999V2.85399C10.25 2.63099 10.519 2.51999 10.677 2.67699L15.323 7.32299C15.48 7.47999 15.369 7.74999 15.146 7.74999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.146 7.74999H10.5C10.362 7.74999 10.25 7.63799 10.25 7.49999V2.85399C10.25 2.63099 10.519 2.51999 10.677 2.67699L15.323 7.32299C15.48 7.47999 15.369 7.74999 15.146 7.74999Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.85403 10.25H7.50003C7.63803 10.25 7.75003 10.362 7.75003 10.5V15.146C7.75003 15.369 7.48103 15.48 7.32303 15.323L2.67703 10.677C2.52003 10.52 2.63103 10.25 2.85403 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.85403 10.25H7.50003C7.63803 10.25 7.75003 10.362 7.75003 10.5V15.146C7.75003 15.369 7.48103 15.48 7.32303 15.323L2.67703 10.677C2.52003 10.52 2.63103 10.25 2.85403 10.25Z"
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

export default CaretMinimizeDiagonal;
