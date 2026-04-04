import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextAlignLeft({
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
          d="M15.2501 15H2.75009C2.33599 15 2.00009 14.6641 2.00009 14.25C2.00009 13.8359 2.33599 13.5 2.75009 13.5H15.2501C15.6642 13.5 16.0001 13.8359 16.0001 14.25C16.0001 14.6641 15.6642 15 15.2501 15Z"
          fill={fill}
        />
        <path
          d="M15.2501 4.5H2.75009C2.33599 4.5 2.00009 4.1641 2.00009 3.75C2.00009 3.3359 2.33599 3 2.75009 3H15.2501C15.6642 3 16.0001 3.3359 16.0001 3.75C16.0001 4.1641 15.6642 4.5 15.2501 4.5Z"
          fill={fill}
        />
        <path
          d="M8.25009 9.75H2.75009C2.33599 9.75 2.00009 9.4141 2.00009 9C2.00009 8.5859 2.33599 8.25 2.75009 8.25H8.25009C8.66419 8.25 9.00009 8.5859 9.00009 9C9.00009 9.4141 8.66419 9.75 8.25009 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TextAlignLeft;
