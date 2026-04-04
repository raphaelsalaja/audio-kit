import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowExpandTopRight({
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
          d="M13.2501 2H4.75009C3.23131 2 2.00009 3.23122 2.00009 4.75V13.25C2.00009 14.7688 3.23131 16 4.75009 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25009 9H4.75009C3.23131 9 2.00009 10.2312 2.00009 11.75V13.25C2.00009 14.7688 3.23131 16 4.75009 16H6.25009C7.76887 16 9.00009 14.7688 9.00009 13.25V11.75C9.00009 10.2312 7.76887 9 6.25009 9Z"
          fill={fill}
        />
        <path
          d="M12.0001 8.25V7.06055L10.5304 8.53015C10.2374 8.82315 9.76279 8.82315 9.46989 8.53015C9.17699 8.23715 9.17689 7.76263 9.46989 7.46973L10.9396 6H9.75009C9.33599 6 9.00009 5.6641 9.00009 5.25C9.00009 4.8359 9.33599 4.5 9.75009 4.5H12.7501C13.1642 4.5 13.5001 4.8359 13.5001 5.25V8.25C13.5001 8.6641 13.1642 9 12.7501 9C12.336 9 12.0001 8.6641 12.0001 8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowExpandTopRight;
