import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Signature2({
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
          d="M1.75 12.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.355 7.04302C1.527 5.78502 2.084 2.17602 5.004 2.52302C7.467 2.81602 9.086 8.46802 8.684 12.895C8.601 13.808 8.277 15.257 6.993 15.468C6.033 15.626 5.014 15.192 4.575 14.275C2.984 10.778 8.632 5.01302 10.741 6.11702C11.873 6.71002 11.16 8.69102 12.048 8.88602C12.693 9.02802 13.164 7.75902 13.757 7.90902C14.307 8.04802 14.206 8.91602 14.796 9.08202C15.059 9.15602 15.331 9.12902 15.5 8.95702"
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

export default Signature2;
