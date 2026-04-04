import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Candy({
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
          d="m12.25,5.215v-3.12c0-.17.17-.297.331-.243,1.606.54,2.843,1.643,3.55,3.554.06.163-.066.344-.24.344h-3.103"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.215,12.25h-3.12c-.17,0-.297.17-.243.331.54,1.606,1.643,2.843,3.554,3.55.163.06.344-.066.344-.24v-3.103"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="8.91"
          width="9.958"
          fill="none"
          rx="4.333"
          ry="4.333"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(-3.728 9.088) rotate(-45.399)"
          x="4.021"
          y="4.545"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.25"
          x2="7.25"
          y1="13.653"
          y2="4.673"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.75"
          x2="10.75"
          y1="13.115"
          y2="4.348"
        />
      </g>
    </svg>
  );
}

export default Candy;
