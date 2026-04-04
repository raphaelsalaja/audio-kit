import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MaximizeWindow({
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
          d="M5.75 11H3.75C3.0605 11 2.5 10.4395 2.5 9.75V4.75C2.5 4.0605 3.0605 3.5 3.75 3.5H12.25C12.9395 3.5 13.5 4.0605 13.5 4.75V7.75C13.5 8.1641 13.8359 8.5 14.25 8.5C14.6641 8.5 15 8.1641 15 7.75V4.75C15 3.2334 13.7666 2 12.25 2H3.75C2.2334 2 1 3.2334 1 4.75V9.75C1 11.2666 2.2334 12.5 3.75 12.5H5.75C6.1641 12.5 6.5 12.1641 6.5 11.75C6.5 11.3359 6.1641 11 5.75 11Z"
          fill={fill}
        />
        <path
          d="M14.75 10H10.25C9.00736 10 8 11.0074 8 12.25V13.75C8 14.9926 9.00736 16 10.25 16H14.75C15.9926 16 17 14.9926 17 13.75V12.25C17 11.0074 15.9926 10 14.75 10Z"
          fill={fill}
        />
        <path
          d="M8.03032 7.96973L6.56062 6.5H7.75012C8.16422 6.5 8.50012 6.1641 8.50012 5.75C8.50012 5.3359 8.16422 5 7.75012 5H4.75012C4.33602 5 4.00012 5.3359 4.00012 5.75V8.75C4.00012 9.1641 4.33602 9.5 4.75012 9.5C5.16422 9.5 5.50012 9.1641 5.50012 8.75V7.56049L6.96982 9.03021C7.11632 9.17671 7.30822 9.24988 7.50012 9.24988C7.69202 9.24988 7.88392 9.17671 8.03042 9.03021C8.32342 8.73721 8.32332 8.26263 8.03032 7.96973Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MaximizeWindow;
