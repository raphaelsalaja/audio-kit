import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceEnraged({
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
        <path
          d="M6.75,13c.472-.746,1.304-1.242,2.25-1.242s1.778,.496,2.25,1.242"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5,9.732c.769,.444,1.711,.319,2.337-.244,.241-.217,.17-.618-.111-.78l-2.452-1.416c-.281-.162-.664-.024-.731,.294-.175,.824,.188,1.702,.957,2.146Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.5,9.732c-.769,.444-1.711,.319-2.337-.244-.241-.217-.17-.618,.111-.78l2.452-1.416c.281-.162,.664-.024,.731,.294,.175,.824-.188,1.702-.957,2.146Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceEnraged;
