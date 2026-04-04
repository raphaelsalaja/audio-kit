import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DividerX({
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
          d="M9.00012 16.75C8.58602 16.75 8.25012 16.4141 8.25012 16V2C8.25012 1.5859 8.58602 1.25 9.00012 1.25C9.41422 1.25 9.75012 1.5859 9.75012 2V16C9.75012 16.4141 9.41422 16.75 9.00012 16.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75012 2H2.75012C2.33602 2 2.00012 2.3359 2.00012 2.75V15.25C2.00012 15.6641 2.33602 16 2.75012 16H3.75012C5.26672 16 6.50012 14.7666 6.50012 13.25V4.75C6.50012 3.2334 5.26672 2 3.75012 2Z"
          fill={fill}
        />
        <path
          d="M14.2501 2H15.2501C15.6642 2 16.0001 2.3359 16.0001 2.75V15.25C16.0001 15.6641 15.6642 16 15.2501 16H14.2501C12.7335 16 11.5001 14.7666 11.5001 13.25V4.75C11.5001 3.2334 12.7335 2 14.2501 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DividerX;
