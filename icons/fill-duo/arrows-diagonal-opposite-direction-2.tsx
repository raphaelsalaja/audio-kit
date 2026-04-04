import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsDiagonalOppositeDirection2({
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
          d="M11.25 10.49C10.836 10.49 10.5 10.826 10.5 11.24V13.94L3.27999 6.71999C2.98699 6.42699 2.51199 6.42699 2.21899 6.71999C1.92599 7.01299 1.92599 7.488 2.21899 7.781L9.43899 15.001H6.73899C6.32499 15.001 5.98899 15.337 5.98899 15.751C5.98899 16.165 6.32499 16.501 6.73899 16.501H11.25C11.664 16.501 12 16.165 12 15.751V11.241C12 10.827 11.664 10.491 11.25 10.491V10.49Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.78 10.22L8.561 3H11.261C11.675 3 12.011 2.664 12.011 2.25C12.011 1.836 11.675 1.5 11.261 1.5H6.75C6.336 1.5 6 1.836 6 2.25V6.76001C6 7.17401 6.336 7.51001 6.75 7.51001C7.164 7.51001 7.5 7.17401 7.5 6.76001V4.06L14.72 11.28C14.866 11.426 15.058 11.5 15.25 11.5C15.442 11.5 15.634 11.427 15.78 11.28C16.073 10.987 16.073 10.512 15.78 10.219V10.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsDiagonalOppositeDirection2;
