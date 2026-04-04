import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Leaf({
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
          d="m4.3833,9.4508c-.6615,2.6185.9447,4.386,1.7966,4.9343.9662.609,3.2119,1.7216,5.9464-.2024,2.3379-1.645,4.0954-6.7418,1.1134-12.399-1.6861,3.8653-7.753,3.2995-8.8564,7.6671Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m2.75,16.25s4.598-1.265,7.5-6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.8997,15.1642c4.9614-.879,6.1773-8.293,3.3653-13.4142-1.709,3.571-5.652,3.034-7.858,5.754-.654.806-1.158,1.901-1.158,3.082,0,1.577.779,2.972,1.972,3.816"
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

export default Leaf;
