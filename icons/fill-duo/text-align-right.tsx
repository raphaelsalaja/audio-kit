import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextAlignRight({
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
          d="M15.2501 15H2.75012C2.33602 15 2.00012 14.6641 2.00012 14.25C2.00012 13.8359 2.33602 13.5 2.75012 13.5H15.2501C15.6642 13.5 16.0001 13.8359 16.0001 14.25C16.0001 14.6641 15.6642 15 15.2501 15Z"
          fill={fill}
        />
        <path
          d="M15.2501 4.5H2.75012C2.33602 4.5 2.00012 4.1641 2.00012 3.75C2.00012 3.3359 2.33602 3 2.75012 3H15.2501C15.6642 3 16.0001 3.3359 16.0001 3.75C16.0001 4.1641 15.6642 4.5 15.2501 4.5Z"
          fill={fill}
        />
        <path
          d="M15.2501 9.75H9.75012C9.33602 9.75 9.00012 9.4141 9.00012 9C9.00012 8.5859 9.33602 8.25 9.75012 8.25H15.2501C15.6642 8.25 16.0001 8.5859 16.0001 9C16.0001 9.4141 15.6642 9.75 15.2501 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TextAlignRight;
