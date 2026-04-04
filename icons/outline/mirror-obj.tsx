import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MirrorObj({
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
        <circle cx="9" cy="2.75" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="9" cy="5.875" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="9" cy="12.125" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="9" cy="15.25" fill={secondaryfill} r=".75" stroke="none" />
        <path
          d="M6.5,13.98l-3.017,.724c-.629,.151-1.233-.326-1.233-.972V5.538c0-.462,.317-.864,.767-.972l3.483-.836"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5,13.98l3.017,.724c.629,.151,1.233-.326,1.233-.972V5.538c0-.462-.317-.864-.767-.972l-3.483-.836"
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

export default MirrorObj;
