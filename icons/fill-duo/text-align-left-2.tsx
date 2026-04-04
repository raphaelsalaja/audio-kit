import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextAlignLeft2({
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
          d="M15.2501 11.5H2.75012C2.33602 11.5 2.00012 11.1641 2.00012 10.75C2.00012 10.3359 2.33602 10 2.75012 10H15.2501C15.6642 10 16.0001 10.3359 16.0001 10.75C16.0001 11.1641 15.6642 11.5 15.2501 11.5Z"
          fill={fill}
        />
        <path
          d="M9.25012 15H2.75012C2.33602 15 2.00012 14.6641 2.00012 14.25C2.00012 13.8359 2.33602 13.5 2.75012 13.5H9.25012C9.66422 13.5 10.0001 13.8359 10.0001 14.25C10.0001 14.6641 9.66422 15 9.25012 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.25012 8H2.75012C2.33602 8 2.00012 7.6641 2.00012 7.25C2.00012 6.8359 2.33602 6.5 2.75012 6.5H9.25012C9.66422 6.5 10.0001 6.8359 10.0001 7.25C10.0001 7.6641 9.66422 8 9.25012 8Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 4.5H2.75012C2.33602 4.5 2.00012 4.1641 2.00012 3.75C2.00012 3.3359 2.33602 3 2.75012 3H15.2501C15.6642 3 16.0001 3.3359 16.0001 3.75C16.0001 4.1641 15.6642 4.5 15.2501 4.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TextAlignLeft2;
