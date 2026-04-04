import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackY2({
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
          d="M14.2501 4.5H3.75012C2.78362 4.5 2.00012 5.2835 2.00012 6.25V11.75C2.00012 12.7165 2.78362 13.5 3.75012 13.5H14.2501C15.2166 13.5 16.0001 12.7165 16.0001 11.75V6.25C16.0001 5.2835 15.2166 4.5 14.2501 4.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 1.5H2.75012C2.33602 1.5 2.00012 1.8359 2.00012 2.25C2.00012 2.6641 2.33602 3 2.75012 3H15.2501C15.6642 3 16.0001 2.6641 16.0001 2.25C16.0001 1.8359 15.6642 1.5 15.2501 1.5Z"
          fill={fill}
        />
        <path
          d="M15.2501 15H2.75012C2.33602 15 2.00012 15.3359 2.00012 15.75C2.00012 16.1641 2.33602 16.5 2.75012 16.5H15.2501C15.6642 16.5 16.0001 16.1641 16.0001 15.75C16.0001 15.3359 15.6642 15 15.2501 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StackY2;
