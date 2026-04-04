import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cover({
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
          d="M13.2501 2H4.75012C3.23134 2 2.00012 3.23122 2.00012 4.75V13.25C2.00012 14.7688 3.23134 16 4.75012 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.2501 4H4.75012C4.33591 4 4.00012 4.33579 4.00012 4.75V8.75C4.00012 9.16421 4.33591 9.5 4.75012 9.5H13.2501C13.6643 9.5 14.0001 9.16421 14.0001 8.75V4.75C14.0001 4.33579 13.6643 4 13.2501 4Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Cover;
