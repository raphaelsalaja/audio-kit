import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FillLoader({
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
          d="M14.0001 5H4.00012C1.79402 5 0.00012207 6.7944 0.00012207 9C0.00012207 11.2056 1.79402 13 4.00012 13H14.0001C16.2062 13 18.0001 11.2056 18.0001 9C18.0001 6.7944 16.2062 5 14.0001 5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75012 11C3.33602 11 3.00012 10.6641 3.00012 10.25V7.75C3.00012 7.3359 3.33602 7 3.75012 7C4.16422 7 4.50012 7.3359 4.50012 7.75V10.25C4.50012 10.6641 4.16422 11 3.75012 11Z"
          fill={fill}
        />
        <path
          d="M6.75012 11C6.33602 11 6.00012 10.6641 6.00012 10.25V7.75C6.00012 7.3359 6.33602 7 6.75012 7C7.16422 7 7.50012 7.3359 7.50012 7.75V10.25C7.50012 10.6641 7.16422 11 6.75012 11Z"
          fill={fill}
        />
        <path
          d="M9.75012 11C9.33602 11 9.00012 10.6641 9.00012 10.25V7.75C9.00012 7.3359 9.33602 7 9.75012 7C10.1642 7 10.5001 7.3359 10.5001 7.75V10.25C10.5001 10.6641 10.1642 11 9.75012 11Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FillLoader;
