import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderImport({
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
          d="m2.25,6.75v-2c0-1.1046.8954-2,2-2h1.825c.5871,0,1.1444.258,1.5244.7055l1.5236,1.7945h4.627c1.1046,0,2,.8954,2,2v5.5c0,1.1046-.8954,2-2,2H4.25c-1.1046,0-2-.8954-2-2v-6Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m2.25,6.75v-2c0-1.1046.8954-2,2-2h1.825c.5871,0,1.1444.258,1.5244.7055l1.5236,1.7945h4.627c1.1046,0,2,.8954,2,2v5.5c0,1.1046-.8954,2-2,2H4.25c-1.1046,0-2-.8954-2-2v-2c0-.5523.4477-1,1-1h5.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="6.5 7.5 8.75 9.75 6.5 12"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default FolderImport;
