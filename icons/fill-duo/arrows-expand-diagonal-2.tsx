import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsExpandDiagonal2({
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
          d="M7.5303 10.4697C7.2373 10.1767 6.7627 10.1767 6.4698 10.4697L3.50011 13.4394V10.9999C3.50011 10.5858 3.16421 10.2499 2.75011 10.2499C2.33601 10.2499 2.00011 10.5858 2.00011 10.9999V15.2499C2.00011 15.664 2.33601 15.9999 2.75011 15.9999H7.00011C7.41421 15.9999 7.75011 15.664 7.75011 15.2499C7.75011 14.8358 7.41421 14.4999 7.00011 14.4999H4.56059L7.5303 11.5302C7.8233 11.2372 7.8233 10.7626 7.5303 10.4697Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 2H11C10.5859 2 10.25 2.3359 10.25 2.75C10.25 3.1641 10.5859 3.5 11 3.5H13.4395L10.4698 6.4697C10.1768 6.7627 10.1768 7.23731 10.4698 7.53021C10.6163 7.67671 10.8077 7.74991 11.0001 7.74991C11.1925 7.74991 11.3839 7.67671 11.5304 7.53021L14.5001 4.56049V7C14.5001 7.4141 14.836 7.75 15.2501 7.75C15.6642 7.75 16.0001 7.4141 16.0001 7V2.75C16.0001 2.3359 15.6641 2 15.25 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsExpandDiagonal2;
