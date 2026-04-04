import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMinimizeDiagonal2({
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
          d="M2.85403 7.74999H7.50003C7.63803 7.74999 7.75003 7.63799 7.75003 7.49999V2.85399C7.75003 2.63099 7.48103 2.51999 7.32303 2.67699L2.67703 7.32299C2.52003 7.47999 2.63103 7.74999 2.85403 7.74999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.85403 7.74999H7.50003C7.63803 7.74999 7.75003 7.63799 7.75003 7.49999V2.85399C7.75003 2.63099 7.48103 2.51999 7.32303 2.67699L2.67703 7.32299C2.52003 7.47999 2.63103 7.74999 2.85403 7.74999Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.146 10.25H10.5C10.362 10.25 10.25 10.362 10.25 10.5V15.146C10.25 15.369 10.519 15.48 10.677 15.323L15.323 10.677C15.48 10.52 15.369 10.25 15.146 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.146 10.25H10.5C10.362 10.25 10.25 10.362 10.25 10.5V15.146C10.25 15.369 10.519 15.48 10.677 15.323L15.323 10.677C15.48 10.52 15.369 10.25 15.146 10.25Z"
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

export default CaretMinimizeDiagonal2;
