import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GearKeyhole({
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
          d="m16.25,9.355v-.71c0-.51-.383-.938-.89-.994l-1.094-.122-.503-1.214.688-.859c.318-.398.287-.971-.074-1.332l-.502-.502c-.36-.36-.934-.392-1.332-.074l-.859.688-1.214-.503-.122-1.094c-.056-.506-.484-.89-.994-.89h-.71c-.51,0-.938.383-.994.89l-.122,1.094-1.214.503-.859-.687c-.398-.318-.971-.287-1.332.074l-.502.502c-.36.36-.392.934-.074,1.332l.688.859-.503,1.214-1.094.122c-.506.056-.89.484-.89.994v.71c0,.51.383.938.89.994l1.094.122.503,1.214-.687.859c-.318.398-.287.972.074,1.332l.502.502c.36.36.934.392,1.332.074l.859-.688,1.214.503.122,1.094c.056.506.484.89.994.89h.71c.51,0,.938-.383.994-.89l.122-1.094,1.214-.503.859.688c.398.318.971.287,1.332-.074l.502-.502c.36-.36.392-.934.074-1.332l-.687-.859.503-1.214,1.094-.122c.506-.056.89-.484.89-.994l-.002-.001Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="9"
          cy="8.5"
          fill={secondaryfill}
          r="1.25"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="10.094"
          y2="11.75"
        />
      </g>
    </svg>
  );
}

export default GearKeyhole;
