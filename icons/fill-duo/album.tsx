import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Album({
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
          d="M3.5 1.75C3.5 1.33579 3.83579 1 4.25 1H13.75C14.1642 1 14.5 1.33579 14.5 1.75C14.5 2.16421 14.1642 2.5 13.75 2.5H4.25C3.83579 2.5 3.5 2.16421 3.5 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.72611 6.06321C1.53024 4.98816 2.35674 4 3.44801 4H14.552C15.6447 4 16.468 4.98929 16.274 6.06242L14.638 15.0626C14.4872 15.8953 13.7609 16.5 12.916 16.5H5.08501C4.23892 16.5 3.51534 15.8943 3.36328 15.0641L1.72611 6.06321Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Album;
