import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColMergeLeftRight({
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
          d="M13.2499 2H4.99992C4.15222 2 3.36512 2.38476 2.84072 3.05566C2.58582 3.38186 2.64341 3.8536 2.96961 4.1084C3.29481 4.3647 3.76842 4.30369 4.02232 3.97949C4.26062 3.67479 4.61701 3.5 4.99981 3.5H8.99981V14.5H4.99981C4.61601 14.5 4.25961 14.3252 4.02131 14.0205C3.76741 13.6943 3.29382 13.6343 2.96862 13.8916C2.64242 14.1465 2.58481 14.6182 2.83971 14.9443C3.36411 15.6152 4.15122 16 4.99992 16H13.2499C14.7665 16 15.9999 14.7666 15.9999 13.25V4.75C15.9999 3.2334 14.7665 2 13.2499 2Z"
          fill={fill}
        />
        <path
          d="M0.219994 9.53003L2.71999 12.03C3.01299 12.3199 3.488 12.3199 3.781 12.03C4.074 11.74 4.074 11.2599 3.781 10.9698L2.561 9.74988H6.24999C6.66399 9.74988 6.99999 9.40988 6.99999 8.99988C6.99999 8.58988 6.66399 8.24988 6.24999 8.24988H2.561L3.781 7.02991C4.074 6.73991 4.074 6.25995 3.781 5.96985C3.635 5.81985 3.443 5.74976 3.251 5.74976C3.059 5.74976 2.86699 5.81975 2.72099 5.96985L0.219994 8.46985C-0.0730059 8.75985 -0.0730059 9.23993 0.219994 9.53003Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TableColMergeLeftRight;
