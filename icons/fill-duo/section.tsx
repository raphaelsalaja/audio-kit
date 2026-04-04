import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Section({
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
          d="M14.2501 15H3.75012C3.33602 15 3.00012 15.3359 3.00012 15.75C3.00012 16.1641 3.33602 16.5 3.75012 16.5H14.2501C14.6642 16.5 15.0001 16.1641 15.0001 15.75C15.0001 15.3359 14.6642 15 14.2501 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75012 3H14.2501C14.6642 3 15.0001 2.6641 15.0001 2.25C15.0001 1.8359 14.6642 1.5 14.2501 1.5H3.75012C3.33602 1.5 3.00012 1.8359 3.00012 2.25C3.00012 2.6641 3.33602 3 3.75012 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 5H3.75012C2.23134 5 1.00012 6.23122 1.00012 7.75V10.25C1.00012 11.7688 2.23134 13 3.75012 13H14.2501C15.7689 13 17.0001 11.7688 17.0001 10.25V7.75C17.0001 6.23122 15.7689 5 14.2501 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Section;
