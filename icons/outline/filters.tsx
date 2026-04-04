import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Filters({
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
          d="M10.496,9.757c.164,.467,.254,.97,.254,1.493,0,2.485-2.015,4.5-4.5,4.5S1.75,13.735,1.75,11.25c0-.911,.271-1.759,.736-2.467"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.511,15.745c.531,.028,1.076-.038,1.612-.209,2.367-.758,3.671-3.291,2.913-5.658s-3.291-3.671-5.658-2.913c-.868,.278-1.592,.794-2.125,1.453"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.156,11.171c-.461-.088-.917-.251-1.35-.492-2.17-1.211-2.947-3.952-1.736-6.123s3.952-2.947,6.123-1.736c.711,.397,1.272,.958,1.663,1.609"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Filters;
