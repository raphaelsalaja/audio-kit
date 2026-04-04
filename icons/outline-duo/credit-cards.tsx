import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCards({
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
          d="M6.25 15.25H14.75C15.578 15.25 16.25 14.578 16.25 13.75V8.25C16.25 7.422 15.578 6.75 14.75 6.75H6.25C5.422 6.75 4.75 7.422 4.75 8.25V13.75C4.75 14.578 5.422 15.25 6.25 15.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 15.25H14.75C15.5784 15.25 16.25 14.578 16.25 13.75V8.25C16.25 7.422 15.5784 6.75 14.75 6.75H6.25C5.4216 6.75 4.75 7.422 4.75 8.25V13.75C4.75 14.578 5.4216 15.25 6.25 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.1641 3.7487C12.9577 3.167 12.4022 2.75 11.75 2.75H3.25C2.422 2.75 1.75 3.422 1.75 4.25V10.242"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 10.25H16.25"
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

export default CreditCards;
