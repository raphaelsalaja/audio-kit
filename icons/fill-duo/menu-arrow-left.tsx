import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MenuArrowLeft({
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
          d="M15.75 14H8.75C8.336 14 8 14.336 8 14.75C8 15.164 8.336 15.5 8.75 15.5H15.75C16.164 15.5 16.5 15.164 16.5 14.75C16.5 14.336 16.164 14 15.75 14Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.75 4H15.75C16.164 4 16.5 3.664 16.5 3.25C16.5 2.836 16.164 2.5 15.75 2.5H8.75C8.336 2.5 8 2.836 8 3.25C8 3.664 8.336 4 8.75 4Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.75 8.25002H4.06099L6.03099 6.28005C6.32399 5.98705 6.32399 5.51202 6.03099 5.21902C5.73799 4.92602 5.26299 4.92602 4.96999 5.21902L1.71999 8.46902C1.42699 8.76202 1.42699 9.23705 1.71999 9.53005L4.96999 12.7801C5.11599 12.9261 5.30799 13 5.49999 13C5.69199 13 5.88399 12.9271 6.02999 12.7801C6.32299 12.4871 6.32299 12.012 6.02999 11.719L4.05999 9.74905H15.75C16.164 9.74905 16.5 9.41305 16.5 8.99905C16.5 8.58505 16.164 8.25002 15.75 8.25002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MenuArrowLeft;
