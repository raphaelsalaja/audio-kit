import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowForward({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M9 11V7.60107L12.3135 9.14559L9 11Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M5.5 19V16.5L16 11V14L5.5 19Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M18.9724 15.3439V12.4324L21.9185 10.9481V13.995L18.9724 15.3439Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M16.0012 11.0249L16 14L6.17082 18.9146C5.74853 19.1257 5.25147 19.1257 4.82918 18.9146L2.55279 17.7764C2.21401 17.607 2 17.2607 2.00001 16.882L2.00003 15.1164C2.00003 14.7385 2.21308 14.3928 2.5507 14.223L12.0025 9.46914C12.1857 9.37699 12.1862 9.11558 12.0033 9.02283L9 7.5"
          stroke={fill}
        />
        <path
          d="M2.00004 14.5L5.5 16.2518L15.7797 11.1351C15.9193 11.0657 16.0833 11.0653 16.2232 11.1341L19 12.5L22 11"
          stroke={fill}
        />
        <path
          d="M9.41029 10.7294C9.12906 10.5888 8.95142 10.3014 8.95142 9.98697V8.11803C8.95142 7.73926 9.16542 7.393 9.5042 7.22361L11.6699 6.14077C11.8555 6.04793 12.0585 5.99465 12.2658 5.98428L21.4264 5.52625C21.712 5.51197 21.9514 5.73968 21.9514 6.02562V13.382C21.9514 13.7607 21.7374 14.107 21.3986 14.2764L19.6222 15.1646C19.1999 15.3757 18.7029 15.3757 18.2806 15.1646L15.8131 13.9308"
          stroke={fill}
        />
        <path d="M18.9514 15.5V12.5" stroke={fill} />
        <path d="M5.5 16V19" stroke={fill} />
      </g>
    </svg>
  );
}

export default ArrowForward;
