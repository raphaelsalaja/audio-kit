import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldLeftToLine({
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
          d="M10.457 4.57398L4.90201 8.59498C4.62601 8.79498 4.62601 9.20498 4.90201 9.40498L10.457 13.426C10.788 13.665 11.25 13.429 11.25 13.021V10.75H15.25C15.802 10.75 16.25 10.302 16.25 9.74998V8.24998C16.25 7.69798 15.802 7.24998 15.25 7.24998H11.25V4.97898C11.25 4.57098 10.787 4.33498 10.457 4.57398Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.457 4.57398L4.90201 8.59498C4.62601 8.79498 4.62601 9.20498 4.90201 9.40498L10.457 13.426C10.788 13.665 11.25 13.429 11.25 13.021V10.75H15.25C15.802 10.75 16.25 10.302 16.25 9.74998V8.24998C16.25 7.69798 15.802 7.24998 15.25 7.24998H11.25V4.97898C11.25 4.57098 10.787 4.33498 10.457 4.57398Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 3.75V14.25"
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

export default ArrowBoldLeftToLine;
