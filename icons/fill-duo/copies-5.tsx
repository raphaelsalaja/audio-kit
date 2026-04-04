import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copies5({
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
          d="M11.2501 4H6.75012C5.23134 4 4.00012 5.23122 4.00012 6.75V11.25C4.00012 12.7688 5.23134 14 6.75012 14H11.2501C12.7689 14 14.0001 12.7688 14.0001 11.25V6.75C14.0001 5.23122 12.7689 4 11.2501 4Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 7H9.75012C8.23134 7 7.00012 8.23122 7.00012 9.75V14.25C7.00012 15.7688 8.23134 17 9.75012 17H14.2501C15.7689 17 17.0001 15.7688 17.0001 14.25V9.75C17.0001 8.23122 15.7689 7 14.2501 7Z"
          fill={fill}
        />
        <path
          d="M4.00009 6.75C4.00009 5.2334 5.23349 4 6.75009 4H11.0418V3.7915C11.0418 2.2749 9.80841 1.0415 8.29181 1.0415H3.79181C2.27521 1.0415 1.04181 2.2749 1.04181 3.7915V8.2915C1.04181 9.8081 2.27521 11.0415 3.79181 11.0415H4.00009V6.75Z"
          fill={secondaryfill}
          opacity="0.2"
        />
      </g>
    </svg>
  );
}

export default Copies5;
