import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBackToUpRight({
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
          d="M13.75 15H4.25C2.733 15 1.5 13.767 1.5 12.25V6.75C1.5 5.233 2.733 4 4.25 4H13.992C14.406 4 14.742 4.336 14.742 4.75C14.742 5.164 14.406 5.5 13.992 5.5H4.25C3.561 5.5 3 6.061 3 6.75V12.25C3 12.939 3.561 13.5 4.25 13.5H13.75C14.439 13.5 15 12.939 15 12.25V9.25C15 8.836 15.336 8.5 15.75 8.5C16.164 8.5 16.5 8.836 16.5 9.25V12.25C16.5 13.767 15.267 15 13.75 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.25 8.5C11.058 8.5 10.866 8.427 10.72 8.28C10.427 7.987 10.427 7.512 10.72 7.219L13.182 4.757L10.72 2.295C10.427 2.002 10.427 1.527 10.72 1.234C11.013 0.941002 11.488 0.941002 11.781 1.234L14.773 4.227C15.066 4.52 15.066 4.995 14.773 5.288L11.781 8.28C11.635 8.426 11.443 8.5 11.251 8.5H11.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowBackToUpRight;
