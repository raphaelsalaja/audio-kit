import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSleeping({
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
        <circle cx="9.5" cy="12" fill={secondaryfill} r="1" stroke="none" />
        <path
          d="M6.985,8c-.126,.119-.554,.496-1.228,.559-.636,.06-1.105-.195-1.258-.286"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.015,8c.126,.119,.554,.496,1.228,.559,.636,.06,1.105-.195,1.258-.286"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.173,2.757c-1.078-.636-2.331-1.007-3.673-1.007C4.496,1.75,1.25,4.996,1.25,9s3.246,7.25,7.25,7.25,7.25-3.246,7.25-7.25c0-.604-.082-1.188-.222-1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="13.75 .75 17.25 .75 13.75 4.75 17.25 4.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default FaceSleeping;
