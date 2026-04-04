import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceTongueWink({
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
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="7.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="6" cy="8" fill={secondaryfill} r="1" stroke="none" />
        <path
          d="M6,10.75c.769,.768,1.83,1.243,3,1.243s2.231-.475,3-1.243"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10,8.25c.138-.105,.604-.432,1.281-.422,.639,.01,1.077,.314,1.219,.422"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.756,11.986c-.002,.162,.017,.326,.071,.488l.25,.75c.209,.629,.795,1.026,1.423,1.026,.157,0,.317-.025,.475-.078,.786-.262,1.21-1.111,.948-1.897l-.25-.75c-.043-.131-.099-.239-.172-.348-.702,.512-1.567,.815-2.5,.815-.1,0-.244-.007-.244-.007"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceTongueWink;
