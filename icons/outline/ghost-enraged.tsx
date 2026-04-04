import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GhostEnraged({
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
          d="M9,16.25c1.438,0,1.531-1.5,3-1.5,1.469,0,1.5,1.5,3.25,1.5V8c0-3.452-2.798-6.25-6.25-6.25S2.75,4.548,2.75,8v8.25c1.75,0,1.781-1.5,3.25-1.5s1.562,1.5,3,1.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75,9.508c.769,.444,1.711,.319,2.337-.244,.241-.217,.17-.618-.111-.78l-2.452-1.416c-.281-.162-.664-.024-.731,.294-.175,.824,.188,1.702,.957,2.146Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.25,9.508c-.769,.444-1.711,.319-2.337-.244-.241-.217-.17-.618,.111-.78l2.452-1.416c.281-.162,.664-.024,.731,.294,.175,.824-.188,1.702-.957,2.146Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default GhostEnraged;
