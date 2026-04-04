import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipVertical({
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
        <circle cx="9" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="15.25" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="12.125" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="5.875" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="2.75" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <path
          d="M12.504,2.583l-3.132,3.5c-.199,.222-.546,.222-.745,0l-3.132-3.5c-.288-.322-.06-.833,.373-.833h6.263c.432,0,.661,.511,.373,.833Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.504,15.417l-3.132-3.5c-.199-.222-.546-.222-.745,0l-3.132,3.5c-.288,.322-.06,.833,.373,.833h6.263c.432,0,.661-.511,.373-.833Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default FlipVertical;
