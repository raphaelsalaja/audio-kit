import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Check3({
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
          d="M6.50011 15C6.23741 14.9834 5.96302 14.8438 5.83412 14.5952C4.78042 12.563 3.5987 10.9062 2.2198 9.5307C1.9268 9.2382 1.92683 8.7631 2.21883 8.4702C2.51083 8.1773 2.98642 8.1763 3.28032 8.4692C4.48242 9.6699 5.54301 11.0605 6.50001 12.6958C8.76461 8.7539 11.5537 5.5454 14.8047 3.1465C15.1377 2.9004 15.6074 2.9722 15.8535 3.3047C16.0996 3.6377 16.0283 4.1074 15.6953 4.3535C12.3027 6.8574 9.4316 10.3047 7.1631 14.6001C7.0332 14.8462 6.77841 15 6.50011 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Check3;
