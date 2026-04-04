import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BasketShopping({
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
          d="M2.44809 5.74216C2.59011 5.58782 2.79026 5.5 3 5.5H15C15.2097 5.5 15.4099 5.58782 15.5519 5.74216C15.6939 5.8965 15.7648 6.10325 15.7474 6.31227L15.1504 13.478C15.032 14.9041 13.8397 16 12.41 16H5.59C4.16033 16 2.968 14.9044 2.84959 13.4783L2.25259 6.31227C2.23518 6.10325 2.30608 5.8965 2.44809 5.74216Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.61423 1.0944C7.97632 1.29556 8.10678 1.75216 7.90562 2.11425L6.02464 5.5H11.9754L10.0944 2.11425C9.89322 1.75216 10.0237 1.29556 10.3858 1.0944C10.7479 0.893237 11.2045 1.02369 11.4056 1.38578L13.6913 5.5H16.25C16.6642 5.5 17 5.83579 17 6.25C17 6.66421 16.6642 7 16.25 7H1.75C1.33579 7 1 6.66421 1 6.25C1 5.83579 1.33579 5.5 1.75 5.5H4.3087L6.59438 1.38578C6.79554 1.02369 7.25214 0.893237 7.61423 1.0944Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BasketShopping;
